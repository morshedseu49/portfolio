import { useScrollReveal } from '../hooks/useScrollReveal';
import { contactInfo } from '../data/contact';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section section-alt" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work <span className="gradient-text">Together</span></h2>
          <p className="section-sub">Have a project in mind or a role to fill? I'd love to hear from you.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {contactInfo.map((item) => (
            <div className={`col-md-6 col-xl-3 reveal ${item.delay}`} key={item.title}>
              <a href={item.href} className="contact-card" target="_blank" rel="noopener noreferrer">
                <i className={`bi ${item.icon}`}></i>
                <p>{item.value}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
