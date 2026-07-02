# Bullfrog Wine & Spirits — Website

Store website for Bullfrog Wine & Spirits, 1820 N College Ave #100, Fort Collins, CO 80524.
Built with React + Vite + Tailwind, same architecture as the Mulberry Max site.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Features (same as Mulberry Max)

- 21+ age gate
- Light/dark theme toggle (green/brown palette matching the Bullfrog logo)
- Hash-based routing: Home, Selection, Updates, Community Services, Contact
- Spirit category guide pages (whiskey, tequila, vodka, gin, rum, brandy, liqueurs, RTD)
- Cocktail recipe pages
- Header search across categories, pages, and cocktails
- Scrolling update ticker + photo ribbon
- Inquiry form via FormSubmit (currently pointed at support@bullfrogwineandspirits.com — update in `src/data/site.js` when the email is finalized)
- Owner admin channel at `/admin` (backed by `api/owner-content.js`)

## Deployment notes (Vercel)

1. Create a new GitHub repo for this project and push.
2. In `api/owner-content.js`, `repoOwner`/`repoName` must match the new repo (currently `vvramana007/Bullfrog_Wine_Spirits`).
3. Set Vercel env vars: `OWNER_ADMIN_PASSWORD` and `GITHUB_CONTENT_TOKEN` (same setup as Mulberry Max).

## To-do / placeholders

- `public/community-services/featured-event.jpeg` is referenced but intentionally absent — the community page hides the image until a real event photo is added.
- No store interior photos yet; the photo ribbon and hero use shared promo graphics. Replace with Bullfrog store photos in `public/store-media/` when available.
- Store hours and phone were taken from public listings — have the owner confirm.
