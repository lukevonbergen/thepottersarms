import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
  // Scroll reveal animation
  useEffect(() => {
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
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Potters Arms | Village Pub in Winchmore Hill, Bucks | Food, Rooms & Comedy</title>
        <meta name="description" content="Potters Arms - The heart of the Bucks countryside. Village pub offering great food, comfortable rooms, and legendary comedy nights. Traditional pub food & Nepalese cuisine." />
        <meta name="keywords" content="Potters Arms, Winchmore Hill pub, Bucks pub, village pub, comedy nights, pub rooms, Nepalese cuisine, Sunday roast" />
        <meta property="og:title" content="Potters Arms | Village Pub Winchmore Hill" />
        <meta property="og:description" content="The heart of the Bucks countryside. Great food, comfortable rooms, and legendary comedy nights." />
        <meta property="og:type" content="restaurant" />
        <link rel="canonical" href="https://pottersarms.co.uk" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(/images/pub-outsideview.png)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle animate-fade-in-up">Eat, Drink, Laugh, Sleep at the</p>
          <h1 className="hero-title animate-fade-in-up animate-delay-1">Potters Arms</h1>
          <p className="hero-location animate-fade-in-up animate-delay-2">Winchmore Hill, Bucks</p>
        </div>

        {/* Quick Actions Bar */}
        <div className="quick-actions">
          <a href="https://maps.google.com/?q=Fagnall+Lane+Winchmore+Hill+Bucks+HP7+0PH" target="_blank" rel="noopener noreferrer" className="quick-action">
            Find Us
          </a>
          <Link to="/menu" className="quick-action">
            View Menu
          </Link>
          <a href="tel:01494726222" className="quick-action">
            01494 726222
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Welcome to Potters Arms</h2>
            <p className="section-subtitle">
              Welcome to Potters Arms, the heart of the Bucks countryside. Our village pub is the perfect place
              for you to enjoy a great meal, have a few drinks with friends, share some laughter, and even stay the night.
            </p>
            <div className="celtic-border"></div>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ padding: 0 }}>
        <div className="feature-grid">
          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Our Menu</h3>
              <Link to="/menu" className="btn btn-primary">Discover Our Menus</Link>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=2071)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Comedy Nights</h3>
              <Link to="/comedy-nights" className="btn btn-primary">Find Out What's On</Link>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Book a Room</h3>
              <a href="https://via.eviivo.com/ThePottersArmsHP70PH" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="section-dark food-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Traditional Pub Food & Nepalese Cuisine</h2>
            <p className="section-subtitle">
              Blending pub classics, Sunday roasts and snacks with the taste of Nepal, a meal at our restaurant
              is something to be remembered. All freshly prepared by our young team of chefs, our dishes are
              designed to complement the excellent range of wines and beers we offer.
            </p>
            <div className="celtic-border"></div>
            <Link to="/menu" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Comedy Nights Banner */}
      <section className="banner">
        <div
          className="banner-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=2070)',
          }}
        ></div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <div className="celtic-border" style={{ marginBottom: '2rem' }}></div>
          <h2>Comedy Nights</h2>
          <p>Nights to Remember</p>
          <p style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Some of the top stars of the comedy circuit have performed at the Potters Arms.
            From Rob Brydon to Bob Mills, Dominic Holland and Zoe Lyons. Join us for some great laughs.
          </p>
          <Link to="/comedy-nights" className="btn btn-primary">Find Out What's On</Link>
          <div className="celtic-border" style={{ marginTop: '2rem' }}></div>
        </div>
      </section>

      {/* What's On Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Your Home From Home in Bucks</h2>
            <p className="section-subtitle">
              Whether you are a tourist, working in or around our village or here visiting friends,
              our comfortable rooms are the perfect pied-à-terre in the country. Dog friendly and with
              plenty of parking, we are close to local transport and amenities to make your stay as comfortable as possible.
            </p>
          </div>

          <div className="event-grid reveal">
            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Comfortable Rooms</h4>
                <p>Relax in our cozy, well-appointed rooms. Perfect for a countryside getaway.</p>
                <a href="https://via.eviivo.com/ThePottersArmsHP70PH" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Book a Room
                </a>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Dog Friendly</h4>
                <p>Bring your four-legged friends along. We welcome well-behaved dogs.</p>
                <Link to="/about" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Learn More
                </Link>
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
                <h4>Special Events</h4>
                <p>Host your celebrations with us. Birthday, anniversary, or any special occasion.</p>
                <Link to="/special-events" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Hire Banner */}
      <section className="split-banner">
        <div className="split-banner-images">
          <div
            className="split-image"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074)',
            }}
          ></div>
          <div
            className="split-image"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=2072)',
            }}
          ></div>
        </div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <h2>Host Your Celebrations With Us</h2>
          <p>Whether it's a birthday, anniversary, or any special occasion</p>
          <Link to="/special-events" className="btn btn-primary">Enquire Now</Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Reserve a Table</h2>
            <p className="section-subtitle">
              Ready to experience the Potters Arms? Book your table today and join us for great food and warm hospitality.
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

export default Home;
