import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillCategories, specializations } from '../data/skills';

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <p className="section-sub">A versatile toolkit covering the full software development stack.</p>
        </div>

        <div className="row g-4">
          {skillCategories.map((cat, i) => (
            <div className={`col-md-6 col-xl-3 reveal ${cat.delay}`} key={i}>
              <div className="skill-cat">
                <div className="skill-cat-head">
                  <i className={`bi ${cat.icon}`}></i>
                  <h3>{cat.title}</h3>
                </div>
                <div className="skill-badges">
                  {cat.skills.map((s, j) => (
                    <span className="skill-badge" key={j}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mt-4">
          <div className="col-lg-8">
            <div className="glass-card reveal">
              <div className="card-top-line"></div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }} className="mb-3">
                <i className="bi bi-stars me-2 gradient-text"></i>Specializations
              </h4>
              <div className="skill-badges">
                {specializations.map((s, i) => (
                  <span className="skill-badge" key={i}>{s}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="glass-card reveal reveal-delay-1">
              <div className="card-top-line"></div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }} className="mb-3">
                <i className="bi bi-lightning me-2 gradient-text"></i>Quick Facts
              </h4>
              <div className="quick-facts">
                <div className="fact-item">
                  <span className="fact-number gradient-text">3+</span>
                  <span className="fact-label">Years Experience</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number gradient-text">10+</span>
                  <span className="fact-label">Projects Delivered</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number gradient-text">5+</span>
                  <span className="fact-label">Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
