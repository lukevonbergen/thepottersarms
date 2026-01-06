import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const About = () => {
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

  return (
    <main>
      <Helmet>
        <title>About | Potters Arms - Village Pub in Winchmore Hill, Bucks</title>
        <meta name="description" content="Learn about the Potters Arms, a traditional village pub in the heart of the Bucks countryside. Great food, comfortable rooms, and legendary comedy nights." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(/images/pub-outsideview.png)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-location">The Heart of the Bucks Countryside</p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Eat, Drink, Laugh, Sleep</h2>
            <p className="section-subtitle">
              Eat, Drink, Laugh, Sleep at our village pub in the heart of the Bucks countryside. Our story began with a passion for creating a warm and welcoming space for locals and visitors alike. We take pride in serving delicious food and a wide selection of drinks, all within a lively and vibrant atmosphere. Our team is dedicated to providing exceptional service, making your experience with us truly memorable.
            </p>
            <div className="celtic-border"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>A Nepalese Pub with a British Soul</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                At our heart, we are a Nepalese pub with a British soul — a place where two rich cultures meet over good food, good drink, and good company.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Nepal and Britain share a long and proud history, built on mutual respect, friendship, and service. From the bravery of the Gurkhas to generations of Nepalese families making the UK their home, our pub is inspired by that connection — a story of cultures coming together rather than standing apart.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                In our kitchen, this shared heritage comes to life. We serve traditional Nepalese dishes full of warmth, spice, and history, alongside classic English pub favourites you know and love. Whether you're here for a comforting roast, a hearty curry, or something new to discover, our menu reflects who we are: familiar, welcoming, and proudly blended.
              </p>
            </div>
            <div>
              <div
                style={{
                  height: '100%',
                  minHeight: '400px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-dark">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <div
                style={{
                  height: '100%',
                  minHeight: '350px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2074)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
            <div>
              <h2 style={{ marginBottom: '2rem' }}>More Than Just a Pub</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                But our pub is about more than food. It's about community. A place where locals, friends, and families gather. Where stories are shared, traditions are respected, and everyone is welcome — whether you've grown up down the road or travelled from the foothills of the Himalayas.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                We invite you to come in, take a seat, and be part of our story — one pint, one plate, and one conversation at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Table, Room or Pub */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Book a Table, a Room or the Pub!</h2>
            <p className="section-subtitle">
              Contact us to reserve a table for any occasion. Whether it's a cozy dinner for two or a celebration with a group of friends, we are happy to accommodate your needs. When the night is over you can retire to one of our cozy upstairs rooms. And if it's a bigger party that you have in mind, we are experienced and capable hosts of birthday and wedding parties, wakes and much more.
            </p>
          </div>

          <div className="event-grid reveal">
            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Reserve a Table</h4>
                <p>Book your table for any occasion, from intimate dinners to group celebrations.</p>
                <a href="https://www.opentable.com/booking/restref/availability?lang=en-US&correlationId=0180db87-f8bb-4ac5-8b69-50bd748dac20&restRef=97176" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', marginTop: '1rem' }}>
                  Book a Table
                </a>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(/images/room-image.png)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Book a Room</h4>
                <p>Retire to one of our cozy upstairs rooms after a great evening at the pub.</p>
                <a href="https://via.eviivo.com/ThePottersArmsHP70PH" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', marginTop: '1rem' }}>
                  Book a Room
                </a>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Private Hire</h4>
                <p>Host birthday parties, wedding receptions, wakes and more at the Potters Arms.</p>
                <Link to="/special-events" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', marginTop: '1rem' }}>
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dog Friendly & Parking */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Your Home From Home</h2>
            <p className="section-subtitle">
              Whether you are a tourist, working in or around our village or here visiting friends,
              our comfortable rooms are the perfect pied-a-terre in the country.
            </p>
          </div>

          <div className="event-grid reveal">
            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Dog Friendly</h4>
                <p>Bring your four-legged friends along. We welcome well-behaved dogs throughout the pub.</p>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2070)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Plenty of Parking</h4>
                <p>No need to worry about parking. We have ample space for all our guests.</p>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2084)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Great Transport Links</h4>
                <p>Close to local transport and amenities to make your stay as comfortable as possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Find Us</h2>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  Address
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  The Potters Arms<br />
                  Fagnall Lane<br />
                  Winchmore Hill<br />
                  Bucks, HP7 0PH
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  Phone
                </h3>
                <a href="tel:01494726222" style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>
                  01494 726222
                </a>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  Email
                </h3>
                <a href="mailto:Info@pottersarms.co.uk" style={{ color: 'var(--text-primary)' }}>
                  Info@pottersarms.co.uk
                </a>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  Opening Hours
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Monday - Friday: 11am - 11pm<br />
                  Saturday - Sunday: 10am - 12am
                </p>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=The Potters Arms&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Potters Arms Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="newsletter">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Reserve a Table</h2>
            <p className="section-subtitle">
              Ready to experience the Potters Arms? Book your table today.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href="https://www.opentable.com/booking/restref/availability?lang=en-US&correlationId=0180db87-f8bb-4ac5-8b69-50bd748dac20&restRef=97176" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Reserve a Table</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
