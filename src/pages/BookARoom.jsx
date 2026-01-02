import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const BookARoom = () => {
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

  const features = [
    'Comfortable, well-appointed rooms',
    'Dog friendly accommodation',
    'Plenty of free parking',
    'Close to local transport',
    'Full English breakfast available',
    'Quiet countryside location',
  ];

  return (
    <main>
      <Helmet>
        <title>Book a Room | Potters Arms - Accommodation in Winchmore Hill, Bucks</title>
        <meta name="description" content="Book a comfortable room at the Potters Arms in Winchmore Hill, Bucks. Dog friendly, free parking, and close to local amenities. Your home from home in the countryside." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(/images/room-image.png)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Book a Room</h1>
          <p className="hero-location">Your Home From Home in Bucks</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Stay With Us</h2>
            <p className="section-subtitle">
              Whether you are a tourist, working in or around our village or here visiting friends,
              our comfortable rooms are the perfect pied-a-terre in the country. Dog friendly and with
              plenty of parking, we are close to local transport and amenities to make your stay as comfortable as possible.
            </p>
            <div className="celtic-border"></div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Room Features</h2>
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
                  backgroundImage: 'url(/images/room-image.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Images */}
      <section style={{ padding: 0 }}>
        <div className="feature-grid">
          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Comfortable Beds</h3>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Countryside Views</h3>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2070)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Modern Amenities</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Book Now CTA */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Book Your Stay</h2>
            <p className="section-subtitle">
              Ready to experience the Potters Arms? Book your room online today.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href="https://via.eviivo.com/ThePottersArmsHP70PH" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>

          <div className="event-grid reveal" style={{ marginTop: '3rem' }}>
            <div style={{
              background: 'var(--primary-bg)',
              padding: '2rem',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
            }}>
              <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                Prefer to Call?
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Give us a call to book directly:
              </p>
              <a href="tel:01494726222" style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '600' }}>
                01494 726222
              </a>
            </div>

            <div style={{
              background: 'var(--primary-bg)',
              padding: '2rem',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
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
      </section>
    </main>
  );
};

export default BookARoom;
