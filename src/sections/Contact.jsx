import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { contactInfo } from '../data/contact';

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: '', text: '' });

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('subject', form.subject);
      formData.append('message', form.message);

      const res = await fetch('/contact', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', text: data.message || 'Message sent successfully!' });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'danger', text: data.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'danger', text: 'Something went wrong. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section section-alt" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work <span className="gradient-text">Together</span></h2>
          <p className="section-sub">Have a project in mind or a role to fill? I'd love to hear from you.</p>
        </div>

        <div className="row g-4 mb-4">
          {contactInfo.map((item) => (
            <div className={`col-md-6 col-xl-3 reveal ${item.delay}`} key={item.title}>
              <a href={item.href} className="contact-card" target="_blank" rel="noopener noreferrer">
                <i className={`bi ${item.icon}`}></i>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.value}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="glass-card reveal">
              <div className="card-top-line"></div>
              <h4 style={{ color: '#fff', fontWeight: 700 }} className="mb-4">
                <i className="bi bi-send me-2 gradient-text"></i>Send a Message
              </h4>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required value={form.name} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" required value={form.email} onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" value={form.subject} onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <textarea name="message" className="form-control" placeholder="Your Message..." required value={form.message} onChange={handleChange}></textarea>
                  </div>
                  <div className="col-12">
                    {status.text && (
                      <div className={`alert alert-${status.type} mb-3`} role="alert">
                        {status.text}
                      </div>
                    )}
                    <button type="submit" className="btn btn-gradient w-100" disabled={sending}>
                      {sending ? (
                        <><span className="spinner-border spinner-border-sm me-2"></span>Sending...</>
                      ) : (
                        <>Send Message <i className="bi bi-send ms-1"></i></>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
