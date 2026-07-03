import { useMemo, useState } from 'react';
import { businessInfo, cocktailCentral, navigation, spiritCategoryTabs } from '../data/site';

function navigateTo(path) {
  window.location.hash = path === '/' ? '#/' : `#${path}`;
}

function NavLink({ item, currentRoute, onClick }) {
  const active = item.path === currentRoute;

  return (
    <a
      className={`nav-link ${active ? 'nav-link-active' : ''}`}
      href={item.path === '/' ? '#/' : `#${item.path}`}
      onClick={(event) => {
        event.preventDefault();
        navigateTo(item.path);
        onClick();
      }}
    >
      {item.label}
    </a>
  );
}

export default function SiteHeader({ currentRoute, theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');

  const searchMatches = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return [];
    }

    const categoryResults = spiritCategoryTabs
      .filter((item) => item.label.toLowerCase().includes(value))
      .map((item) => ({ label: item.label, path: `/category/${item.slug}` }));

    const pageResults = navigation
      .filter((item) => item.label.toLowerCase().includes(value))
      .map((item) => ({ label: item.label, path: item.path }));

    const cocktailResults = cocktailCentral.drinks
      .filter((item) => item.name.toLowerCase().includes(value))
      .map((item) => ({ label: item.name, path: `/cocktail/${item.slug}` }));

    return [...categoryResults, ...pageResults, ...cocktailResults].slice(0, 8);
  }, [query]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchMatches.length > 0) {
      navigateTo(searchMatches[0].path);
      setQuery('');
      return;
    }

    navigateTo('/selection');
    setQuery('');
  };

  return (
    <header className="site-header">
      <div className="shell header-row">
        <a
          className="brand-mark"
          href="#/"
          onClick={(event) => {
            event.preventDefault();
            navigateTo('/');
            setMenuOpen(false);
          }}
        >
          <img src={businessInfo.logo} alt="Bullfrog Wine &amp; Spirits logo" />
        </a>

        <nav className={`nav-panel ${menuOpen ? 'nav-panel-open' : ''}`}>
          {navigation.map((item) => (
            <NavLink
              item={item}
              key={item.path}
              currentRoute={currentRoute}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </nav>

        <div className="header-actions">
          <form className="header-search" aria-label="Search" onSubmit={handleSearchSubmit}>
            <input
              className="header-search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the store..."
            />
            {searchMatches.length > 0 ? (
              <div className="search-results">
                {searchMatches.map((item) => (
                  <button
                    className="search-result-item"
                    key={`${item.path}-${item.label}`}
                    type="button"
                    onClick={() => {
                      navigateTo(item.path);
                      setQuery('');
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ) : null}
          </form>

          <button
            className="theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
          <a
            className="instagram-icon-link"
            href={businessInfo.instagramLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Bullfrog Wine &amp; Spirits on Instagram"
            title="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.95 2.2a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 6.8A5.2 5.2 0 1 1 6.8 12 5.2 5.2 0 0 1 12 6.8Zm0 1.5A3.7 3.7 0 1 0 15.7 12 3.7 3.7 0 0 0 12 8.3Z" />
            </svg>
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
