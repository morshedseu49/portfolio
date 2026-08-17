import { useState, useEffect } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navLinks } from '../../data/navigation';
import { scrollToSection } from '../../utils/helpers';

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY + 120;
      let current = 'home';
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(id);
  };

  const isScrolled = scrollY > 60;

  return (
    <nav className={`navbar navbar-expand-lg fixed-top main-nav ${isScrolled ? 'scrolled' : ''}`} id="mainNav">
      <div className="container">
        <a className="navbar-brand brand" href="#home" onClick={(e) => handleNavClick(e, 'home')}>
          <span className="brand-badge">GM</span>
          <span className="brand-text">Golam<span className="brand-dot">Morshed</span></span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navMenu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <a className="btn btn-gradient btn-sm nav-cta" href="/Golam_Morshed_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-download"></i> Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
