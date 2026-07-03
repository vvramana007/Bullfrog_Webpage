import { useEffect, useState } from 'react';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import {
  ageGateContent,
  beerWineSpirits,
  businessInfo,
  campusHighlights,
  categoryStories,
  categoryPages,
  communityServices,
  cocktailCentral,
  featuredUpdates,
  homeFeaturePanels,
  inquiryForm,
  instagramSpotlight,
  pages,
  premiumShelf,
  quickStats,
  sliderPhotos,
  spiritCategoryTabs,
  spiritHistoryCards,
  tastingUpdates,
  updateTicker,
  updateMoments,
} from './data/site';

const routes = ['/', '/selection', '/updates', '/community-services', '/contact', '/cocktails'];
const themeStorageKey = 'bullfrog-theme';

function normalizeRoute(hash) {
  const path = hash.replace(/^#/, '') || '/';
  if (routes.includes(path)) {
    return path;
  }

  if (path.startsWith('/category/')) {
    const slug = path.replace('/category/', '');
    return categoryPages[slug] ? path : '/';
  }

  if (path.startsWith('/cocktail/')) {
    const slug = path.replace('/cocktail/', '');
    return cocktailCentral.drinks.some((drink) => drink.slug === slug) ? path : '/';
  }

  return '/';
}

function useHashRoute() {
  const [route, setRoute] = useState(normalizeRoute(window.location.hash));

  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    const handleHashChange = () => {
      setRoute(normalizeRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route;
}

function SectionHeading({ eyebrow, title, body, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'section-heading-center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p className="section-body">{body}</p> : null}
    </div>
  );
}

function AgeGate({ onConfirm }) {
  return (
    <div className="age-gate">
      <div className="age-gate-card">
        <img className="age-gate-logo" src={businessInfo.logo} alt="Bullfrog Wine &amp; Spirits logo" />
        <p className="eyebrow">{ageGateContent.eyebrow}</p>
        <h1>{ageGateContent.title}</h1>
        <p>{ageGateContent.body}</p>
        <div className="age-gate-actions">
          <button className="button button-solid" type="button" onClick={onConfirm}>
            I am 21+
          </button>
          <a className="button button-soft" href={ageGateContent.exitLink}>
            I am under 21
          </a>
        </div>
      </div>
    </div>
  );
}

function PhotoRibbon() {
  return (
    <div className="photo-ribbon">
      <div className="photo-ribbon-track">
        {[...sliderPhotos, ...sliderPhotos].map((photo, index) => (
          <figure className="photo-ribbon-card" key={`${photo.src}-${index}`}>
            <img src={photo.src} alt={photo.alt} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function UpdateTicker() {
  return (
    <div className="update-ticker">
      <div className="update-ticker-track">
        {[...updateTicker, ...updateTicker].map((item, index) => (
          <span className="update-ticker-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function OptionalImage({ className, src, alt }) {
  const [imageMissing, setImageMissing] = useState(false);

  if (!src || imageMissing) {
    return null;
  }

  return (
    <div className={className}>
      <img src={src} alt={alt} onError={() => setImageMissing(true)} />
    </div>
  );
}

function CocktailRecipePage({ slug }) {
  const drink = cocktailCentral.drinks.find((item) => item.slug === slug);

  if (!drink) {
    return <HomePage />;
  }

  return (
    <>
      <section className="page-banner shell">
        <SectionHeading eyebrow="Cocktail recipe" title={drink.name} body={drink.intro} />
      </section>

      <section className="shell content-block">
        <div className="recipe-layout">
          <article className="recipe-photo-card">
            <img src={drink.image} alt={drink.name} />
          </article>

          <article className="recipe-info-card">
            <p className="eyebrow">{drink.spirit}</p>
            <h3>What you need</h3>
            <ul className="recipe-list">
              {drink.ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>How to make it</h3>
            <ol className="recipe-steps">
              {drink.steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>
        </div>
      </section>
    </>
  );
}

function HomePage() {
  return (
    <>
      <UpdateTicker />

      <section className="hero-banner">
        <img
          className="hero-banner-image"
          src={pages.home.heroPoster}
          alt="Bullfrog Wine &amp; Spirits storefront on North College Ave"
        />
        <div className="hero-banner-overlay" />
        <div className="shell hero-banner-content">
          <p className="eyebrow hero-banner-eyebrow">N College Ave, Fort Collins | 21+</p>
          <h1>Cold beer. Rare bourbon. Zero runaround.</h1>
          <p className="hero-lead">
            Bullfrog keeps it simple: a cold wall that stays stocked, a spirits shelf that goes
            deeper than you expect, and staff who point you to the right bottle instead of the
            expensive one.
          </p>
          <div className="hero-actions">
            <a className="button button-solid" href="#/selection">
              Shop the shelves
            </a>
            <a className="button button-outline-light" href="#/contact">
              Hop in — directions
            </a>
          </div>
        </div>
        <div className="hero-stat-band">
          <div className="shell hero-stat-band-inner">
            {quickStats.map((item) => (
              <div className="hero-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="promo-band promo-band-green">
        <div className="shell promo-row">
          {campusHighlights.map((item, index) => (
            <article className="promo-row-item" key={item.title}>
              <span className="promo-row-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="promo-row-tag">{item.tag}</p>
                <h3>{item.title}</h3>
                <span className="promo-row-body">{item.body}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell content-block">
        <div className="instagram-banner">
          <div className="instagram-banner-copy">
            <p className="eyebrow">{instagramSpotlight.eyebrow}</p>
            <h2>{instagramSpotlight.title}</h2>
            <p>{instagramSpotlight.body}</p>
            <ul className="story-list">
              {instagramSpotlight.points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="instagram-banner-action">
            <a className="button button-solid instagram-button" href={businessInfo.instagramLink} target="_blank" rel="noreferrer">
              {instagramSpotlight.actionLabel}
            </a>
            <span>Fastest way to see what is new in store.</span>
          </div>
        </div>
      </section>

      <section className="shell content-block">
        <div className="premium-shelf-block">
          <SectionHeading
            eyebrow="Premium shelf"
            title="Premium bottles worth slowing down for."
            body="Browse standout tequila, bourbon, whiskey, and limited releases selected for gifting, collecting, and special occasions. Scroll the shelf."
          />

          <div className="premium-scroll">
            {premiumShelf.map((item) => (
              <article className="premium-card premium-scroll-card" key={item.name}>
                <div className="premium-card-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="premium-card-copy">
                  <p className="eyebrow">{item.category}</p>
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell content-block">
        <div className="retail-feature-grid">
          <div className="retail-feature-main">
            <p className="eyebrow">Store spotlight</p>
            <h2>In, out, and on with your night in five minutes flat.</h2>
            <p>
              No maze, no guesswork. Cold beer up front, mixers next to the spirits that need them,
              and clear signs over every aisle. Grab what you came for or take a lap and see what
              is new on the shelf.
            </p>
            <div className="quick-link-row">
              <a className="quick-link-card" href="#/selection">Browse categories</a>
              <a className="quick-link-card" href="#/updates">Latest updates</a>
              <a className="quick-link-card" href="#/contact">Store info</a>
            </div>
          </div>

          <div className="retail-feature-side">
            {homeFeaturePanels.map((item) => (
              <article className="feature-panel-card" key={item.title}>
                <p className="eyebrow">{item.tag}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <a href={item.link}>{item.action}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell content-block">
        <SectionHeading
          eyebrow="What people stop in for"
          title="Fast categories, clear browsing, and a shelf that feels easier to shop."
          body="Shop by the kind of night you are planning, from game-day coolers to dinner bottles and top-shelf spirits."
        />
        <div className="story-grid compact-story-grid">
          {categoryStories.map((story) => (
            <article className="story-card" key={story.title}>
              <div className="story-copy">
                <p className="eyebrow">{story.kicker}</p>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <ul className="story-list">
                  {story.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {story.details ? (
                  <div className="story-detail-grid">
                    {story.details.map((detail) => (
                      <div className="story-detail-card" key={`${story.title}-${detail.label}`}>
                        <span>{detail.label}</span>
                        <strong>{detail.value}</strong>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <img src={story.image} alt={story.alt} />
            </article>
          ))}
        </div>
      </section>

      <section className="shell content-block">
        <div className="split-panel">
          <div className="split-intro">
            <SectionHeading
              eyebrow="Inside the store"
              title="A bright sales floor built for quick stops and good finds."
              body="Wide aisles, cold selections, featured displays, and clear category signs make it easy to get in, browse, and head out with the right bottle."
            />
          </div>
          <div className="chip-cloud">
            {beerWineSpirits.map((item) => (
              <div className="chip-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <PhotoRibbon />
      </section>

      <section className="shell content-block">
        <SectionHeading
          eyebrow="Learn the categories"
          title="A quick guide to the spirit families shoppers ask about most."
          body="Start with the broad category, then read the short history underneath to understand where each spirit family comes from and why it tastes different."
        />
        <div className="category-rail">
          {spiritCategoryTabs.map((item) => (
            <a className="category-badge" href={`#/category/${item.slug}`} key={item.slug}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="history-grid">
          {spiritHistoryCards.map((item) => (
            <article className="history-card" key={item.title}>
              <p className="eyebrow">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.history}</p>
              <p className="history-note">{item.learn}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell content-block">
        <SectionHeading
          eyebrow="What is happening now"
          title="Updates, releases, and store activity should feel visible the moment you land here."
          body="A quick look at store highlights, featured bottles, and the latest things happening at Bullfrog Wine &amp; Spirits."
        />
        <div className="update-highlight-grid">
          {updateMoments.map((item) => (
            <article className="update-highlight-card" key={item.title}>
              <p className="eyebrow">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a href="#/updates">See updates</a>
            </article>
          ))}
        </div>
      </section>

      <section className="shell content-block">
        <div className="cocktail-banner">
          <div>
            <p className="eyebrow">{cocktailCentral.eyebrow}</p>
            <h2>{cocktailCentral.title}</h2>
            <p>{cocktailCentral.body}</p>
          </div>
        </div>
        <div className="cocktail-grid">
          {cocktailCentral.drinks.map((drink) => (
            <a className="cocktail-card" href={`#/cocktail/${drink.slug}`} key={drink.name}>
              <div className="cocktail-card-image">
                <img src={drink.image} alt={drink.name} />
              </div>
              <div className="cocktail-card-copy">
                <h3>{drink.name}</h3>
                <p>{drink.build}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function SelectionPage() {
  return (
    <>
      <section className="page-banner shell">
        <SectionHeading
          eyebrow="Beer / Wine / Spirits"
          title="A tighter, brighter guide to what Bullfrog Wine &amp; Spirits does best."
          body="From quick cold picks to premium bottle browsing, the selection is built for both convenience and discovery."
        />
      </section>

      <section className="shell content-block">
        <div className="catalog-grid">
          {spiritCategoryTabs.map((item) => {
            const category = categoryPages[item.slug];
            const previewImage = category?.bottles?.[0]?.image;

            return (
              <a className="catalog-card catalog-link-card" href={`#/category/${item.slug}`} key={item.slug}>
                <img src={previewImage} alt={item.label} />
                <div className="catalog-copy">
                  <p className="eyebrow">Shop the category</p>
                  <h3>{item.label}</h3>
                  <p>Explore common styles, flavor notes, and helpful bottle cues for this spirit family.</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="shell content-block">
        <SectionHeading
          eyebrow="Spirit history"
          title="Short background notes that make the shelf easier to understand."
          body="Use these quick notes to compare styles, understand flavor differences, and shop with more confidence."
        />
        <div className="history-grid">
          {spiritHistoryCards.map((item) => (
            <article className="history-card" key={item.kicker}>
              <p className="eyebrow">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.history}</p>
              <p className="history-note">{item.learn}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function CategoryDetailPage({ slug }) {
  const category = categoryPages[slug];

  if (!category) {
    return <HomePage />;
  }

  return (
    <>
      <section className="page-banner shell">
        <SectionHeading
          eyebrow={category.eyebrow}
          title={category.title}
          body={category.intro}
        />
      </section>

      <section className="shell content-block">
        <div className="category-detail-grid">
          <article className="history-card category-history-card">
            <p className="eyebrow">History</p>
            <h3>{category.label} in context</h3>
            <p>{category.history}</p>
          </article>

          <article className="history-card category-history-card">
            <p className="eyebrow">Why it matters</p>
            <h3>What shoppers usually notice first</h3>
            <p>
              The easiest way to learn this category is to compare bottle shapes, flavor styles, and
              how aging or base ingredients change what ends up in the glass.
            </p>
          </article>
        </div>
      </section>

      <section className="shell content-block">
        <SectionHeading
          eyebrow="Bottle styles"
          title={`A quick guide to ${category.label.toLowerCase()} bottle types.`}
          body="Compare familiar styles, flavor cues, and bottle types before your next visit."
        />
        <div className="bottle-grid">
          {category.bottles.map((bottle) => (
            <article className="bottle-card" key={bottle.name}>
              <img className="bottle-photo" src={bottle.image} alt={bottle.name} />
              <div className="bottle-copy">
                <p className="eyebrow">{category.label}</p>
                <h3>{bottle.name}</h3>
                <p>{bottle.style}</p>
                <span>{bottle.note}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function UpdatesPage() {
  return (
    <>
      <section className="page-banner shell">
        <SectionHeading
          eyebrow="Store updates"
          title="Fresh arrivals, tastings, and store events."
          body="Check here for featured bottles, in-store tastings, weekend displays, and timely store news."
        />
      </section>

      <section className="shell content-block">
        <div className="update-grid">
          {featuredUpdates.map((item) => (
            <article className="update-card" key={item.title}>
              <OptionalImage className="update-card-image" src={item.image} alt={item.title} />
              <p className="eyebrow">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <p className="update-card-note">{item.cta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell content-block">
        <SectionHeading
          eyebrow="Tastings and pop-ups"
          title="In-store tastings make new bottles, RTDs, and cocktail picks easier to discover."
          body="Meet brand reps, sample featured picks, and discover new ready-to-drink options during in-store tasting events."
        />
        <div className="tasting-grid">
          {tastingUpdates.map((item) => (
            <article className="tasting-card" key={item.title}>
              <OptionalImage className="tasting-card-image" src={item.image} alt={item.alt} />
              <div className="tasting-card-copy">
                <p className="eyebrow">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell content-block">
        <div className="updates-dual-panel">
          <article className="info-card">
            <p className="eyebrow">Instagram first</p>
            <h3>Follow along for day-of updates.</h3>
            <p>
              Instagram is the fastest place for day-of posts, bottle highlights, featured displays,
              and tasting announcements.
            </p>
            <a className="button button-solid instagram-button" href={businessInfo.instagramLink} target="_blank" rel="noreferrer">
              Open Instagram
            </a>
          </article>

          <article className="history-card owner-ready-card">
            <p className="eyebrow">Fresh arrivals</p>
            <h3>New bottles and events are added regularly.</h3>
            <p>
              Stop back for seasonal picks, limited releases, tasting nights, and store displays worth checking out.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

function CommunityEventImage({ event }) {
  const [imageMissing, setImageMissing] = useState(false);

  if (imageMissing) {
    return (
      <div className="community-event-image community-event-image-missing" aria-hidden="true" />
    );
  }

  return (
    <div className="community-event-image">
      <img src={event.image} alt={event.imageAlt} onError={() => setImageMissing(true)} />
    </div>
  );
}

function CommunityServicesPage() {
  return (
    <>
      <section className="page-banner shell">
        <SectionHeading
          eyebrow="Community services"
          title="Service news, community support, and local involvement."
          body={communityServices.intro}
        />
      </section>

      <section className="shell content-block">
        <article className="community-event-feature">
          <CommunityEventImage event={communityServices.featuredEvent} />
          <div className="community-event-copy">
            <p className="eyebrow">{communityServices.featuredEvent.kicker}</p>
            <h3>{communityServices.featuredEvent.title}</h3>
            <p>{communityServices.featuredEvent.body}</p>
            <p>{communityServices.featuredEvent.service}</p>
            <p>{communityServices.featuredEvent.closing}</p>
          </div>
        </article>
      </section>

      <section className="shell content-block">
        <div className="service-grid">
          {communityServices.highlights.map((item) => (
            <article className="service-card" key={item.title}>
              <p className="eyebrow">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="page-banner shell">
        <SectionHeading
          eyebrow="Visit Bullfrog"
          title="Right on North College, minutes from Old Town, and easy to swing by."
          body="Whether it is a quick stop or a browse for something better, the store is set up to make the visit easy."
        />
      </section>

      <section className="shell content-block">
        <div className="contact-grid">
          <article className="info-card">
            <p className="eyebrow">Store info</p>
            <h3>Plan your stop</h3>
            <p>{businessInfo.address}</p>
            <p>{businessInfo.phone}</p>
            <p>{businessInfo.hoursSummary}</p>
            <a className="button button-solid" href={businessInfo.mapLink} target="_blank" rel="noreferrer">
              Open directions
            </a>
            <a className="button button-soft contact-instagram-link" href={businessInfo.instagramLink} target="_blank" rel="noreferrer">
              Follow us on Instagram
            </a>
          </article>

          <article className="visit-card">
            <img src={pages.contact.image} alt="Front sales floor inside Bullfrog Wine &amp; Spirits" />
            <div className="visit-copy">
              <h3>{businessInfo.locationNote}</h3>
              <p>{businessInfo.visitBlurb}</p>
              <ul className="story-list">
                {businessInfo.visitHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="shell content-block">
        <div className="inquiry-layout">
          <article className="inquiry-intro-card">
            <SectionHeading
              eyebrow={inquiryForm.eyebrow}
              title={inquiryForm.title}
              body={inquiryForm.body}
            />
            <ul className="story-list">
              {inquiryForm.reasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <form className="inquiry-form-card" action={inquiryForm.endpoint} method="POST">
            <input type="hidden" name="_subject" value={inquiryForm.subject} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" className="form-honeypot" />
            <div className="inquiry-field-grid">
              {inquiryForm.fields.map((field) => (
                <label className="inquiry-field" key={field.name}>
                  <span>{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    autoComplete={field.autoComplete}
                  />
                </label>
              ))}
            </div>

            <label className="inquiry-field inquiry-field-full">
              <span>Message</span>
              <textarea
                name="message"
                rows="6"
                required
                placeholder="Tell us what you are looking for, what kind of event you are planning, or what question you have."
              />
            </label>

            <div className="inquiry-form-actions">
              <button className="button button-solid" type="submit">
                Send inquiry
              </button>
              <p>
                Sends your message to the Bullfrog Wine &amp; Spirits inbox.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function renderPage(route) {
  if (route.startsWith('/category/')) {
    return <CategoryDetailPage slug={route.replace('/category/', '')} />;
  }

  if (route.startsWith('/cocktail/')) {
    return <CocktailRecipePage slug={route.replace('/cocktail/', '')} />;
  }

  if (route === '/selection') {
    return <SelectionPage />;
  }

  if (route === '/updates') {
    return <UpdatesPage />;
  }

  if (route === '/community-services') {
    return <CommunityServicesPage />;
  }

  if (route === '/contact') {
    return <ContactPage />;
  }

  return <HomePage />;
}

function App() {
  const route = useHashRoute();
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [theme, setTheme] = useState(() => window.localStorage.getItem(themeStorageKey) || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  const handleAgeConfirm = () => {
    setAgeConfirmed(true);
  };

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {!ageConfirmed ? <AgeGate onConfirm={handleAgeConfirm} /> : null}
      <div className="site-frame">
        <SiteHeader currentRoute={route} theme={theme} onThemeToggle={handleThemeToggle} />
        <main>{renderPage(route)}</main>
        <SiteFooter />
      </div>
    </>
  );
}

export default App;
