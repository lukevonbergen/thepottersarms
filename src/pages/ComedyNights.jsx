import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const ComedyNights = () => {
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

  const pastPerformers = [
    'Rob Brydon',
    'Bob Mills',
    'Dominic Holland',
    'Zoe Lyons',
  ];

  const previousShows = [
    {
      image: '/images/comedy/thursday4thdec.avif',
      title: 'Comedy Night',
      date: 'Thursday 4th December',
    },
    {
      image: '/images/comedy/thursday18thdec.avif',
      title: 'Comedy Night',
      date: 'Thursday 18th December',
    },
  ];

  return (
    <main>
      <Helmet>
        <title>Comedy Nights | Potters Arms - Live Comedy in Winchmore Hill, Bucks</title>
        <meta name="description" content="Legendary comedy nights at the Potters Arms. Top stars of the comedy circuit have performed here including Rob Brydon, Bob Mills, Dominic Holland and Zoe Lyons." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=2070)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Comedy Nights</h1>
          <p className="hero-location">Nights to Remember</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Legendary Comedy at the Potters Arms</h2>
            <p className="section-subtitle">
              Some of the top stars of the comedy circuit have performed at the Potters Arms.
              From Rob Brydon to Bob Mills, Dominic Holland and Zoe Lyons. Join us for some great laughs
              and very memorable nights.
            </p>
            <div className="celtic-border"></div>
          </div>
        </div>
      </section>

      {/* Past Performers */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Stars Who've Graced Our Stage</h2>
            <p className="section-subtitle">
              We've been proud to host some of the biggest names in comedy.
            </p>
          </div>

          <div className="event-grid reveal" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {pastPerformers.map((performer, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'var(--secondary-bg)',
                border: '1px solid var(--border-color)',
              }}>
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '0.5rem' }}>{performer}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comedy Night Image Banner */}
      <section className="banner">
        <div
          className="banner-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=2071)',
          }}
        ></div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <div className="celtic-border" style={{ marginBottom: '2rem' }}></div>
          <h2>An Unforgettable Night Out</h2>
          <p>Great comedy, great atmosphere, great company</p>
          <div className="celtic-border" style={{ marginTop: '2rem' }}></div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-dark">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>What to Expect</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Our comedy nights are legendary in the local area. We bring top-quality comedians
                from the UK comedy circuit to perform in our intimate venue, creating an atmosphere
                that's hard to beat.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Enjoy a delicious meal from our menu, grab a drink from the bar, and settle in for
                an evening of non-stop laughter. Whether you're celebrating a special occasion or
                just looking for a great night out, our comedy nights deliver.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Tickets tend to sell out fast, so make sure to book early to avoid disappointment!
              </p>
            </div>
            <div>
              <div
                style={{
                  height: '400px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Upcoming Shows</h2>
            <p className="section-subtitle">
              Check back soon for our upcoming comedy night schedule. When shows are announced, you can book your tickets via WeGotTickets.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://www.wegottickets.com/location/19498"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Buy Tickets on WeGotTickets
              </a>
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <a
                href="https://www.facebook.com/ThePottersArms/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/thepottersarmspub/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Shows */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Previous Shows</h2>
            <p className="section-subtitle">
              Take a look at some of our past comedy nights.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '2rem',
            }}
          >
            {previousShows.map((show, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--primary-bg)',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '400px',
                    backgroundImage: `url(${show.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                  }}
                ></div>
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{show.title}</h3>
                  <p style={{ color: 'var(--highlight-gold)' }}>{show.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="newsletter">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Don't Miss Out</h2>
            <p className="section-subtitle">
              Our comedy nights sell out fast. Book your tickets as soon as shows are announced!
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a
                href="https://www.wegottickets.com/location/19498"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Upcoming Shows
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComedyNights;
