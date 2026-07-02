import { businessInfo, navigation } from '../data/site';

function navigateTo(path) {
  window.location.hash = path === '/' ? '#/' : `#${path}`;
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-layout">
        <div className="footer-brand">
          <img className="footer-logo" src={businessInfo.logo} alt="Bullfrog Wine &amp; Spirits logo" />
          <p className="footer-copy">{businessInfo.tagline}</p>
        </div>

        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            {navigation.map((item) => (
              <a
                key={item.path}
                href={item.path === '/' ? '#/' : `#${item.path}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(item.path);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-title">Visit</p>
          <p className="footer-copy">{businessInfo.address}</p>
          <p className="footer-copy">{businessInfo.phone}</p>
          <p className="footer-copy">{businessInfo.hoursSummary}</p>
          <a className="footer-social-link" href={businessInfo.instagramLink} target="_blank" rel="noreferrer">
            Follow on Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
