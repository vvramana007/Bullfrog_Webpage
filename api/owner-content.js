import { readFile } from 'node:fs/promises';
import path from 'node:path';

const repoOwner = 'vvramana007';
const repoName = 'Bullfrog_Webpage';
const branch = 'main';
const contentPath = 'src/data/owner-content.json';
const githubApiBase = `https://api.github.com/repos/${repoOwner}/${repoName}/contents`;

async function readJsonBody(request) {
  if (request.body && typeof request.body === 'object') {
    return request.body;
  }

  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');
  return rawBody ? JSON.parse(rawBody) : {};
}

function getConfig() {
  return {
    adminPassword: process.env.OWNER_ADMIN_PASSWORD || process.env.ADMIN_PASSWORD,
    githubToken: process.env.GITHUB_CONTENT_TOKEN || process.env.OWNER_GITHUB_TOKEN || process.env.GITHUB_TOKEN,
  };
}

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(payload));
}

function isValidContent(content) {
  return content
    && Array.isArray(content.updateTicker)
    && Array.isArray(content.premiumShelf)
    && Array.isArray(content.updateMoments)
    && Array.isArray(content.featuredUpdates)
    && Array.isArray(content.tastingUpdates);
}

function normalizeContent(content) {
  return {
    ...content,
    siteGallery: Array.isArray(content.siteGallery) ? content.siteGallery : [],
    sitePhotos: content.sitePhotos && typeof content.sitePhotos === 'object' ? content.sitePhotos : {},
    tastingCalendar: Array.isArray(content.tastingCalendar)
      ? content.tastingCalendar.filter(
          (entry) => entry && /^\d{4}-\d{2}-\d{2}$/.test(entry.date || '') && typeof entry.note === 'string',
        )
      : [],
  };
}

function assertUploadPath(uploadPath) {
  if (
    typeof uploadPath !== 'string'
    || !uploadPath.startsWith('public/uploads/')
    || uploadPath.includes('..')
    || /[\\]/.test(uploadPath)
  ) {
    throw new Error('Invalid upload path.');
  }
}

async function githubRequest(githubToken, apiPath, options = {}) {
  const response = await fetch(`${githubApiBase}/${apiPath}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${githubToken}`,
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.headers || {}),
    },
  });

  if (response.status === 404) {
    return null;
  }

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || 'GitHub request failed.');
  }

  return payload;
}

async function getGithubFile(githubToken, apiPath) {
  return githubRequest(githubToken, apiPath, {
    method: 'GET',
  });
}

async function putGithubFile(githubToken, apiPath, message, base64Content, sha) {
  const body = {
    message,
    content: base64Content,
    branch,
  };

  if (sha) {
    body.sha = sha;
  }

  return githubRequest(githubToken, apiPath, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

async function loadContent(githubToken) {
  if (githubToken) {
    const file = await getGithubFile(githubToken, contentPath);

    if (file?.content) {
      const json = Buffer.from(file.content, 'base64').toString('utf8');
      return JSON.parse(json);
    }
  }

  const localPath = path.join(process.cwd(), contentPath);
  const localContent = await readFile(localPath, 'utf8');
  return JSON.parse(localContent);
}

async function saveImages(githubToken, images = []) {
  for (const image of images) {
    assertUploadPath(image.path);

    if (typeof image.dataUrl !== 'string' || !image.dataUrl.startsWith('data:image/')) {
      throw new Error('Invalid image upload.');
    }

    const [, base64Content] = image.dataUrl.split(',');

    if (!base64Content) {
      throw new Error('Invalid image upload.');
    }

    const existingImage = await getGithubFile(githubToken, image.path);
    await putGithubFile(
      githubToken,
      image.path,
      `Upload owner image ${image.path.replace('public/uploads/', '')}`,
      base64Content,
      existingImage?.sha,
    );
  }
}

async function saveContent(githubToken, content) {
  const existingFile = await getGithubFile(githubToken, contentPath);
  const base64Content = Buffer.from(`${JSON.stringify(content, null, 2)}\n`, 'utf8').toString('base64');

  await putGithubFile(
    githubToken,
    contentPath,
    'Update owner website content',
    base64Content,
    existingFile?.sha,
  );
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    sendJson(response, 405, { error: 'Use POST.' });
    return;
  }

  try {
    const { adminPassword, githubToken } = getConfig();

    if (!adminPassword) {
      sendJson(response, 500, { error: 'Admin password is not configured.' });
      return;
    }

    const body = await readJsonBody(request);

    if (body.password !== adminPassword) {
      sendJson(response, 401, { error: 'Wrong password.' });
      return;
    }

    if (body.action === 'load') {
      const content = await loadContent(githubToken);
      sendJson(response, 200, { content });
      return;
    }

    if (body.action === 'save') {
      if (!githubToken) {
        sendJson(response, 500, { error: 'GitHub content token is not configured.' });
        return;
      }

      if (!isValidContent(body.content)) {
        sendJson(response, 400, { error: 'Content is missing required sections.' });
        return;
      }

      await saveImages(githubToken, body.images || []);
      await saveContent(githubToken, normalizeContent(body.content));
      sendJson(response, 200, { ok: true });
      return;
    }

    sendJson(response, 400, { error: 'Unknown action.' });
  } catch (error) {
    sendJson(response, 500, { error: error.message || 'Unable to save changes.' });
  }
}
