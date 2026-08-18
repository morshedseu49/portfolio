import { socialLinks } from '../../data/contact';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ margin: 0 }}>&copy; 2026 Md. Golam Morshed. All rights reserved.</p>
          <ul className="footer-social" style={{ display: 'flex', gap: '12px', listStyle: 'none', margin: 0, padding: 0, paddingRight: '60px' }}>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <i className={`bi ${link.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
