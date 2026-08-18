import { useScrollReveal } from '../hooks/useScrollReveal';
import { aboutDescription, education, certifications, publication } from '../data/content';
import { profileInfo } from '../data/contact';
import profileImage from '../assets/images/morshed.jpeg';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="row align-items-center g-5 mb-5">
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

        <div className="row g-4">
          <div className="col-md-6 reveal">
            <div className="glass-card">
              <div className="card-top-line"></div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }} className="mb-3">
                <i className="bi bi-mortarboard me-2 gradient-text"></i>Education
              </h4>
              <div className="edu-card" style={{ background: 'none', border: 'none', padding: 0, boxShadow: 'none' }}>
                <h4 style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{education.degree}</h4>
                <div className="org">{education.university}</div>
                <div className="period">{education.period}</div>
              </div>
            </div>
          </div>

          <div className="col-md-6 reveal reveal-delay-1">
            <div className="glass-card">
              <div className="card-top-line"></div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }} className="mb-3">
                <i className="bi bi-journal-text me-2 gradient-text"></i>Publication
              </h4>
              <div className="pub-card" style={{ background: 'none', border: 'none', padding: 0, boxShadow: 'none' }}>
                <h4 style={{ fontSize: '1rem' }}>
                  {publication.title}{' '}
                  <a href={publication.link} target="_blank" rel="noopener noreferrer" className="project-link" style={{ display: 'inline' }}>
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="section-head text-start reveal mt-5" style={{ margin: '0 0 24px' }}>
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>
            <i className="bi bi-patch-check me-2 gradient-text"></i>Certifications
          </h3>
        </div>
        <div className="row g-4">
          {certifications.map((cert, i) => (
            <div className="col-md-6 reveal" key={i}>
              <div className="glass-card">
                <div className="card-top-line"></div>
                <div className="cert-item">
                  <i className={`bi ${cert.icon}`}></i>
                  <div>
                    <h5>{cert.title}</h5>
                    <p>{cert.org}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
