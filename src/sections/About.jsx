import { useScrollReveal } from '../hooks/useScrollReveal';
import { aboutDescription } from '../data/content';
import { profileInfo } from '../data/contact';
import profileImage from '../assets/images/morshed.jpeg';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="about-photo-wrap reveal">
              <img src={profileImage} alt="Md. Golam Morshed - portrait" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="section-head text-start reveal" style={{ margin: '0 0 24px' }}>
              <span className="section-tag">About Me</span>
              <h2 className="section-title">Professional <span className="gradient-text">Summary</span></h2>
            </div>
            <p className="reveal" style={{ color: 'var(--text-muted)', fontSize: '1.02rem' }} dangerouslySetInnerHTML={{ __html: aboutDescription }} />
            <div className="about-badges mt-4 reveal reveal-delay-1">
              {profileInfo.map((info) => (
                <div className="about-badge" key={info.label}>
                  <i className={`bi ${info.icon}`}></i>
                  <div>
                    <div className="b-label">{info.label}</div>
                    <div className="b-value" style={info.small ? { fontSize: '.85rem' } : undefined}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="/Golam_Morshed_Resume.pdf" className="btn btn-gradient mt-4 reveal reveal-delay-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
