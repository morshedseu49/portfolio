import { useScrollReveal, useSkillBarReveal } from '../hooks/useScrollReveal';
import { skillCategories, skillBars, specializations } from '../data/skills';

export default function Skills() {
  const ref = useScrollReveal();
  const barRef = useSkillBarReveal();

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

        <div className="row justify-content-center mt-2" ref={barRef}>
          <div className="col-lg-10">
            <div className="skill-bar-group reveal">
              <div className="row g-4">
                {skillBars.map(([name, pct], i) => (
                  <div className="col-md-6" key={i}>
                    <div className="skill-bar-item">
                      <div className="skill-bar-label">
                        <span>{name}</span>
                        <span className="gradient-text">{pct}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div className="skill-bar-fill" data-width={pct}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-lg-10">
            <div className="glass-card reveal">
              <div className="card-top-line"></div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }} className="mb-2">
                <i className="bi bi-stars me-2 gradient-text"></i>Specializations
              </h4>
              <div className="skill-badges">
                {specializations.map((s, i) => (
                  <span className="skill-badge" key={i}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
