import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section section-alt" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-sub">Enterprise and government-scale solutions built for real users.</p>
        </div>

        <div className="row g-4">
          {projects.map((p, i) => (
            <div className={`col-md-6 col-xl-4 reveal ${(i + 1) % 2 === 0 ? 'reveal-delay-1' : ''}`} key={i}>
              <div className="project-card">
                <div className="project-head">
                  <div className="project-icon"><i className={`bi ${p.icon}`}></i></div>
                  <div>
                    <div className="project-title">{p.title}</div>
                    <div className="project-sub">{p.sub}</div>
                  </div>
                </div>
                <div className="project-body">
                  <ul>
                    {p.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link mt-3">
                      {p.linkText} <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  ) : (
                    <span className="project-link mt-3" style={{ cursor: 'default', WebkitTextFillColor: 'var(--text-muted)' }}>
                      {p.linkText} <i className="bi bi-lock"></i>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
