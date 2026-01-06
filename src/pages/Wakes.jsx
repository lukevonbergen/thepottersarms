import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Wakes = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    cateringOption: '',
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
    alert('Thank you for your enquiry. We will be in touch shortly to discuss your requirements.');
  };

  const cateringOptions = [
    {
      name: 'Option 1',
      price: '£17.50',
      description: 'A light and elegant selection',
      items: [
        'Choice of 3 sandwiches (cheese & tomato, bacon, sausage, chicken club or smoked salmon)',
        'A selection of cakes',
        'Scones with jam and clotted cream',
        'Complimentary tea and coffee',
      ],
    },
    {
      name: 'Option 2',
      price: '£21.50',
      description: 'A simple and comforting menu',
      items: [
        'Choice of 3 sandwiches (cheese & tomato, bacon, sausage, chicken club or smoked salmon)',
        'Homemade scotch eggs',
        'Seasoned chips',
        'Skinny fries',
        'BBQ chicken wings',
        'Tea and coffee included',
      ],
    },
    {
      name: 'Option 3',
      price: '£24.50',
      description: 'A heartier option',
      items: [
        'Choice of 3 sandwiches (cheese & tomato, bacon, sausage, chicken club or smoked salmon)',
        'Homemade scotch eggs',
        'Seasoned chips',
        'Sweet chilli chicken',
        'Potters magic (honey glazed cauliflower)',
        'Warm garlic naan',
        'Tea and coffee included',
      ],
    },
  ];

  const addOns = [
    { name: 'Charcuterie board', description: 'Variety of cheeses, cured meats, nuts and olives', price: '£4.50 per person' },
    { name: 'Fruit platter', description: 'Mix of seasonal fruits', price: '£4 per person' },
    { name: 'Nepalese bites', description: 'Sindu aloo, Dallo onion, Masala fries', price: '£1 per person per item' },
    { name: 'Cookies & brownies', description: 'Sweet treats', price: '£1.50 per person' },
  ];

  const considerations = [
    {
      title: 'Memorabilia & Photos',
      description: 'We welcome you to bring photo albums, memory boards or digital slideshows. Photos can be played on our in-house televisions. Simply bring them on a USB or as a digital file.',
    },
    {
      title: 'Music',
      description: "We can play a custom playlist through our sound system. You're welcome to create one and we will take care of the rest.",
    },
    {
      title: 'Bar Options',
      description: "Would you like to set up a bar tab for your guests, first drink on you or keep it pay as you go? We're happy to accommodate any option.",
    },
  ];

  return (
    <main>
      <Helmet>
        <title>Wakes | Potters Arms - Funeral Catering in Winchmore Hill, Bucks</title>
        <meta name="description" content="Host a wake at the Potters Arms. We offer a warm, welcoming space and flexible catering options to help you celebrate the life of your loved one." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Wakes</h1>
          <p className="hero-location">A Warm Space to Celebrate a Life</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Celebrating a Life Well Lived</h2>
            <p className="section-subtitle">
              Welcome to The Potters Arms, a warm and welcoming English-Nepalese pub where traditional British charm meets the bold and vibrant flavours of Nepal.
              We offer a unique dining experience with a menu that brings together both cultures. All dishes are freshly prepared using quality ingredients.
            </p>
            <p className="section-subtitle" style={{ marginTop: '1rem' }}>
              From comforting Sunday roasts and fish 'n' chips to fragrant curries and hand-crafted momos, there's something for everyone to enjoy.
              We pride ourselves on cooking everything fresh to order, which means we're happy to accommodate all dietary requirements - just let us know and we'll tailor your meal to your needs.
            </p>
            <div className="celtic-border"></div>
          </div>
        </div>
      </section>

      {/* Catering Options */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Catering Options</h2>
            <p className="section-subtitle">
              Choose from our carefully crafted menus, designed to suit different preferences and budgets.
            </p>
          </div>

          <div className="event-grid reveal" style={{ marginTop: '2rem' }}>
            {cateringOptions.map((option, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--primary-bg)',
                  border: '1px solid var(--border-color)',
                  padding: '2rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                    {option.name}
                  </h3>
                  <span style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: '600' }}>
                    {option.price}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>
                  {option.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {option.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.5rem 0',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                      }}
                    >
                      <span style={{ color: 'var(--highlight-gold)' }}>*</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Food Add-Ons</h2>
            <p className="section-subtitle">
              Enhance your menu with these additional options. Menu items can be substituted upon request.
            </p>
          </div>

          <div className="event-grid reveal" style={{ marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {addOns.map((addon, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--primary-bg)',
                  border: '1px solid var(--border-color)',
                  padding: '1.5rem',
                }}
              >
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{addon.name}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{addon.description}</p>
                <p style={{ color: 'var(--highlight-gold)', fontWeight: '600' }}>{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complimentary Tasting */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Complimentary Tasting</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                You are more than welcome to visit us and try a few of the dishes - with our compliments - to help you feel confident in your selection.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                We understand this is a difficult time, and we want to make the planning process as easy as possible for you.
              </p>
            </div>
            <div>
              <div
                style={{
                  height: '300px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Consider */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Things to Consider</h2>
          </div>

          <div className="event-grid reveal" style={{ marginTop: '2rem' }}>
            {considerations.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--primary-bg)',
                  border: '1px solid var(--border-color)',
                  padding: '2rem',
                }}
              >
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              We're here to help you plan during this difficult time. Fill out the form below or give us a call.
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
                <label className="form-label" htmlFor="cateringOption">Catering Option</label>
                <select
                  id="cateringOption"
                  name="cateringOption"
                  className="form-select"
                  value={formData.cateringOption}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="option1">Option 1 - £17.50 per person</option>
                  <option value="option2">Option 2 - £21.50 per person</option>
                  <option value="option3">Option 3 - £24.50 per person</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about any specific requirements or questions..."
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
                marginBottom: '2rem',
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

              <div style={{
                background: 'var(--primary-bg)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
              }}>
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                  Download Brochure
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  View our full wake menu brochure:
                </p>
                <a href="/images/brochure/wake-brochure.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  View Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Wakes;
