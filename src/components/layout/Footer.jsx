import { socialLinks } from '../../data/contact';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a className="brand" href="#home">
            <span className="brand-badge">GM</span>
            <span className="brand-text">Golam<span className="brand-dot">Morshed</span></span>
          </a>
          <ul className="footer-social">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <i className={`bi ${link.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} Md. Golam Morshed. Crafted with <i className="bi bi-heart-fill"></i> using React &amp; Vite.</p>
        </div>
      </div>
    </footer>
  );
}
