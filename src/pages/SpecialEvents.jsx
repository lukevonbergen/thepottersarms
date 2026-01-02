import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const SpecialEvents = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will be in touch shortly.');
  };

  const features = [
    'Private dining area',
    'Customised food & drinks packages',
    'Decorations welcome',
    'Music and entertainment options',
    'Friendly, experienced staff',
    'Flexible layouts to suit your needs',
  ];

  return (
    <main>
      <Helmet>
        <title>Special Events | Potters Arms - Private Hire in Winchmore Hill, Bucks</title>
        <meta name="description" content="Host your special occasion at the Potters Arms. Birthday parties, anniversaries, celebrations. Our cozy pub provides the ideal setting for your events." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Special Events</h1>
          <p className="hero-location">Host Your Celebrations With Us</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Celebrate at the Potters Arms</h2>
            <p className="section-subtitle">
              Whether it's a birthday, anniversary, or any special occasion, celebrate it with us at Potters Arms.
              Our cozy pub provides the ideal setting for your events, complete with great food, drinks, and warm hospitality.
            </p>
            <div className="celtic-border"></div>
          </div>
        </div>
      </section>

      {/* Quiz Nights */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Quiz Nights</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Wednesday digital speedquiz. Test your knowledge of trivia, celebrity, films, TV, sport and music.
                Just £6 per person to play with a £200 jackpot up for grabs.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Download the SpeedQuizzing app (1 required per team) and join in the fun!
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.speedquizzing.android&hl=en_GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '0.75rem 1.25rem' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  Android
                </a>
                <a
                  href="https://apps.apple.com/us/app/speedquizzing/id409839077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '0.75rem 1.25rem' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  iPhone
                </a>
              </div>
              <div style={{
                background: 'var(--primary-bg)',
                padding: '1.5rem',
                border: '1px solid var(--border-color)',
                marginTop: '1.5rem'
              }}>
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                  When
                </h3>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                  Wednesdays from 8pm
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  height: '400px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-dark">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>What We Offer</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 0',
                      borderBottom: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BAC29F" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div
                style={{
                  height: '400px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=2072)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section style={{ padding: 0 }}>
        <div className="feature-grid">
          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Birthdays</h3>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Anniversaries</h3>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Family Gatherings</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Fill out the form below and we'll get back to you to discuss your event.
            </p>
          </div>

          <div className="two-column reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="eventType">Event Type *</label>
                <select
                  id="eventType"
                  name="eventType"
                  className="form-select"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="family">Family Gathering</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="guests">Approximate Guests *</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  className="form-input"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-input"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Enquiry
              </button>
            </form>

            <div style={{ paddingLeft: '2rem' }}>
              <div style={{
                background: 'var(--primary-bg)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                marginBottom: '2rem',
              }}>
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                  Prefer to Call?
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Give us a call to discuss your requirements:
                </p>
                <a href="tel:01494726222" style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '600' }}>
                  01494 726222
                </a>
              </div>

              <div style={{
                background: 'var(--primary-bg)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
              }}>
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                  Email Us
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Send us an email with your enquiry:
                </p>
                <a href="mailto:Info@pottersarms.co.uk" style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                  Info@pottersarms.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpecialEvents;
