import { useState } from 'react';

const campusInfo = [
  {
    id: 'address',
    label: 'Address',
    value: '100 Innovation Way, Tech City, TC 94025',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+1 (555) 019-2834',
    href: 'tel:+15550192834',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    value: 'info@techuniversity.edu',
    href: 'mailto:info@techuniversity.edu',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'hours',
    label: 'Office Hours',
    value: 'Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM\nSun: Closed',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map contact-name, contact-email, contact-subject, contact-message to state keys
    const field = id.replace('contact-', '');
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="container my-5">
    <div className="contact-page animate__animated animate__fadeIn">
      {/* Hero */}
      <section className="mb-5 pb-2">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <span className="text-primary text-uppercase fw-bold small tracking-wider">Get in Touch</span>
            <h1 className="display-5 fw-extrabold text-dark mt-2 mb-3">Contact Us</h1>
            <p className="lead text-muted mb-0" style={{ lineHeight: '1.7', maxWidth: '640px' }}>
              Whether you have questions about admissions, campus visits, or student services, our team is here to help. Send us a message and we&apos;ll respond within one business day.
            </p>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="contact-response-pill rounded-4 p-3 p-md-4 text-center text-lg-end">
              <span className="d-block fw-bold text-primary fs-3">~24 hrs</span>
              <span className="text-muted small">Average response time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Campus Info */}
      <section className="mb-5">
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm bg-white contact-form-card rounded-4 overflow-hidden">
              <div className="card-body p-4 p-md-5">
                {status === 'success' ? (
                  <div className="text-center py-5 success-animation">
                    <div className="d-inline-flex align-items-center justify-content-center bg-success-subtle text-success rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
                      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="fw-bold text-dark mb-2">Message Sent!</h3>
                    <p className="text-muted mx-auto mb-4" style={{ maxWidth: '420px', lineHeight: '1.6' }}>
                      Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <strong>&quot;{formData.subject}&quot;</strong>. A representative will contact you at <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      className="btn btn-outline-primary px-4 rounded-pill fw-semibold"
                      onClick={() => {
                        setFormData({ name: '', email: '', subject: '', message: '' });
                        setStatus('idle');
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="h4 fw-bold text-dark mb-1">Send a Message</h2>
                    <p className="text-muted small mb-4">Fill out the form below and a member of our team will get back to you shortly.</p>

                    <form
                      className="contact-form"
                      onSubmit={handleSubmit}
                      aria-label="Contact form"
                    >
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="contact-name" className="form-label fw-semibold small">
                            Full Name <span className="text-danger">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            className="form-control form-control-lg contact-input"
                            placeholder="Jane Doe"
                            required
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="contact-email" className="form-label fw-semibold small">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            className="form-control form-control-lg contact-input"
                            placeholder="jane@example.com"
                            required
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="contact-subject" className="form-label fw-semibold small">
                            Subject <span className="text-danger">*</span>
                          </label>
                          <input
                            id="contact-subject"
                            type="text"
                            className="form-control form-control-lg contact-input"
                            placeholder="Admissions inquiry, campus tour, etc."
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="contact-message" className="form-label fw-semibold small">
                            Message <span className="text-danger">*</span>
                          </label>
                          <textarea
                            id="contact-message"
                            className="form-control contact-input contact-textarea"
                            rows="5"
                            placeholder="Tell us how we can help you..."
                            required
                            value={formData.message}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                          />
                        </div>
                        <div className="col-12 pt-2">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg px-4 rounded-pill d-inline-flex align-items-center gap-2"
                            disabled={status === 'loading'}
                          >
                            {status === 'loading' ? (
                              <>
                                <span className="loading-spinner"></span>
                                Sending...
                              </>
                            ) : (
                              'Send Message'
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 shadow-sm bg-white contact-info-card rounded-4 h-100">
              <div className="card-body p-4 p-md-5">
                <h2 className="h4 fw-bold text-dark mb-1">Campus Information</h2>
                <p className="text-muted small mb-4">Visit us in person or reach out through any of the channels below.</p>

                <ul className="list-unstyled mb-0">
                  {campusInfo.map((item) => (
                    <li key={item.id} className="contact-info-item d-flex gap-3 mb-4">
                      <div className="contact-info-icon flex-shrink-0">{item.icon}</div>
                      <div>
                        <span className="d-block fw-semibold text-dark small mb-1">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="text-muted small contact-info-link fw-medium">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-muted small contact-info-text d-block lh-base" style={{ whiteSpace: 'pre-line' }}>
                            {item.value}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="contact-info-note rounded-3 p-3 mt-4">
                  <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                    For urgent matters outside office hours, please call our 24/7 campus security line at{' '}
                    <a href="tel:+15550192835" className="contact-info-link fw-semibold text-primary">
                      +1 (555) 019-2835
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder with Campus Map Image and Hover Overlay */}
      <section className="mb-2">
        <figure className="contact-map-wrapper rounded-4 overflow-hidden shadow-sm border mb-0">
          <div className="contact-map-image-container">
            <div className="contact-map-overlay text-white text-center p-4">
              <div className="contact-map-pin mb-3">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="fw-bold mb-1">Tech University Campus</h4>
              <p className="small mb-3 text-white-50">100 Innovation Way, Tech City, TC 94025</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-sm px-4 rounded-pill fw-semibold text-primary shadow-sm hover-card"
              >
                Get Directions
              </a>
            </div>
          </div>
          <figcaption className="contact-map-caption text-center py-3 px-4 bg-white border-top">
            <span className="text-muted small">
              Campus Map illustration. Hover and click &quot;Get Directions&quot; to open your maps application.
            </span>
          </figcaption>
        </figure>
      </section>
    </div>
    </div>
  );
}
