import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../data/experiences';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section section-alt" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">Career Path</span>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-sub">A journey of building scalable, enterprise-grade software solutions.</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">{exp.company}</div>
                <span className="timeline-date">{exp.date}</span>
                <ul>
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
