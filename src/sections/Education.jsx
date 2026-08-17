import { useScrollReveal } from '../hooks/useScrollReveal';
import { education, certifications, publication, whatIDeliver } from '../data/content';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-head text-start reveal" style={{ margin: '0 0 30px' }}>
              <span className="section-tag">Academic</span>
              <h2 className="section-title">Education</h2>
            </div>
            <div className="edu-card reveal">
              <div className="edu-icon"><i className="bi bi-mortarboard"></i></div>
              <h4>{education.degree}</h4>
              <div className="org">{education.university}</div>
              <div className="period">{education.period}</div>
            </div>

            <div className="section-head text-start reveal mt-5" style={{ margin: '0 0 30px' }}>
              <span className="section-tag">Credentials</span>
              <h2 className="section-title">Certifications</h2>
            </div>
            {certifications.map((cert, i) => (
              <div className="cert-item reveal" key={i}>
                <i className={`bi ${cert.icon}`}></i>
                <div>
                  <h5>{cert.title}</h5>
                  <p>{cert.org}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-5">
            <div className="section-head text-start reveal" style={{ margin: '0 0 30px' }}>
              <span className="section-tag">Research</span>
              <h2 className="section-title">Publication</h2>
            </div>
            <div className="pub-card reveal">
              <div className="pub-badge"><i className="bi bi-journal-text me-1"></i> {publication.badge}</div>
              <h4>{publication.title}</h4>
              <div className="pub-meta">
                {publication.authors}<br />
                {publication.journal}
              </div>
              <a href={publication.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Read Publication <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>

            <div className="glass-card mt-4 reveal">
              <div className="card-top-line"></div>
              <h4 style={{ color: '#fff', fontWeight: 700 }} className="mb-2">
                <i className="bi bi-lightning-charge me-2 gradient-text"></i>What I Deliver
              </h4>
              <ul className="mb-0" style={{ paddingLeft: 18, color: 'var(--text-muted)', fontSize: '.93rem' }}>
                {whatIDeliver.map((item, i) => (
                  <li className="mb-2" key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
