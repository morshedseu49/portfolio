import { useTypedText } from '../hooks/useTypedText';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { scrollToSection } from '../utils/helpers';
import { heroRoles, heroDescription } from '../data/content';
import { socialLinks } from '../data/contact';
import profileImage from '../assets/images/morshed.jpeg';

export default function Hero() {
  const ref = useScrollReveal();
  const typedText = useTypedText(heroRoles);

  return (
    <section id="home" className="hero section-anchor" ref={ref}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="hero-eyebrow reveal"><span className="dot"></span> Available for new opportunities</div>
            <h1 className="hero-title reveal">Hello, I'm<br /><span className="gradient-text">Md. Golam Morshed</span></h1>
            <div className="hero-role reveal reveal-delay-1">
              <span className="typed">{typedText}</span><span className="cursor">&nbsp;</span>
            </div>
            <p className="hero-desc reveal reveal-delay-2">{heroDescription}</p>
            <div className="hero-actions reveal reveal-delay-2">
              <a href="/Golam_Morshed_Resume.pdf" className="btn btn-gradient" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-file-earmark-person"></i> View Resume
              </a>
              <a href="#contact" className="btn btn-outline-gradient" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}>
                <i className="bi bi-envelope"></i> Contact Me
              </a>
            </div>
            <div className="hero-social reveal reveal-delay-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <i className={`bi ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-image-wrap reveal reveal-delay-2">
              <div className="hero-image-frame">
                <img src={profileImage} alt="Md. Golam Morshed" className="img-fluid" />
              </div>
              <div className="float-chip chip-1">
                <i className="bi bi-award"></i>
                <div>
                  <div className="chip-label">Experience</div>
                  <div className="chip-value">3+ Years</div>
                </div>
              </div>
              <div className="float-chip chip-2">
                <i className="bi bi-stack"></i>
                <div>
                  <div className="chip-label">Specialist</div>
                  <div className="chip-value">Laravel / PHP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-down" aria-label="Scroll down" onClick={(e) => {
        e.preventDefault();
        scrollToSection('about');
      }}><i className="bi bi-chevron-double-down"></i></a>
    </section>
  );
}
