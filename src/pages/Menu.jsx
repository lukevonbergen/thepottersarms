import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('alacarte');

  // Scroll to top only on initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle reveal animations - re-run when tab changes
  useEffect(() => {
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
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

    // Use setTimeout to ensure DOM has updated after tab change
    const timeoutId = setTimeout(() => {
      revealOnScroll();
    }, 50);

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      clearTimeout(timeoutId);
    };
  }, [activeTab]);

  // A La Carte Menu Data
  const alacarteStarters = [
    { name: "Scotch Egg", description: "Soft boiled egg wrapped in Cumberland sausage. Served with a whole grain mustard mayonnaise", price: "8" },
    { name: "Crispy Calamari", description: "Served with a sweet chilli sauce", price: "9" },
    { name: "Bruschetta", description: "Grilled sourdough bread rubbed with fresh garlic, drizzled with extra virgin olive oil and topped with diced cherry tomatoes", price: "7" },
    { name: "Buffalo Chicken Wings", description: "Crispy chicken wings coated in a signature spicy, tangy, buttery sauce", price: "9" },
    { name: "Butter Chicken Mac 'N' Cheese", description: "Butter chicken perfectly combined with mozzarella, Gouda, cheddar, Parmesan and cavatelli pasta", price: "9" },
  ];

  const alacarteMains = [
    { name: "BBQ Pork Ribs", description: "Served with crispy onions, coleslaw and skinny fries", price: "19" },
    { name: "Fish 'N' Chips", description: "Moretti beer battered haddock, tartar sauce, mushy peas and hand cut chips", price: "18.50" },
    { name: "Guinness Bangers and Mash", description: "A classic bangers and mash served with a Guinness onion gravy", price: "18.50" },
    { name: "Scampi and Chips", description: "Breaded scampi, skinny fries, tartar sauce and garden peas", price: "16" },
  ];

  const alacarteBurgers = [
    { name: "Potters Signature Veggie Burger", description: "Mushrooms, carrots, onion, celery, rice chickpeas all marinated and blitzed to form a perfect patty. Served with vegan cheese, vegan cheese, lettuce and sweet potato fries", price: "17" },
    { name: "Chicken Burger", description: "Buttermilk chicken, American cheese and iceberg lettuce. Served with skinny fries", price: "18" },
    { name: "American Cheese Burger", description: "12oz patty topped with American cheese, bacon, homemade sauce, gherkins and iceberg lettuce. Served with skinny fries", price: "18" },
    { name: "Fillet 'O' Fish", description: "Battered haddock, tartar sauce topped with cheese. Served with skinny fries", price: "16" },
  ];

  // Bar Snacks Menu Data
  const barSnacks = [
    { name: "Potters Magic", description: "One of the most popular veggie dishes cooked in our own recipe. It's called 'magic' for a reason. You will not be disappointed", price: "10" },
    { name: "Chilli Chicken", description: "A typical Nepalese dish made from chicken breast, marinated in spices, cooked with onion, tomato, capsicum and green chillies", price: "12" },
    { name: "Mustang Sally", description: "Succulent spring lamb cooked with chunks of bell peppers & onions in a garlicy and sweet chilli sauce", price: "12" },
    { name: "Dallo Onion", description: "Crispy Nepalese fritters, finely sliced onions tempered with our own recipe", price: "6" },
    { name: "Momo - Chicken / Lamb / Veg", description: "Nepalese style dumplings, steam cooked and served with tomato chutney", price: "12" },
    { name: "Sinduh Aloo", description: "Mouth-watering baby potato wedges tempered with a fusion of Nepalese spices", price: "10" },
    { name: "Papadums", description: "Served with homemade Nepalese chutneys", price: "2.50" },
  ];

  // Nepalese Menu Data
  const nepaleseStarters = [
    { name: "Mutton Chops", description: "Marinated in our homemade spice mix, served sizzling (GF/DF)", price: "12.95" },
    { name: "Tandoori Chicken Wings", description: "Nepalese style chicken wings cooked in our clay oven (GF/DF)", price: "11.95" },
    { name: "Potters Scallops", description: "Marinated in Himalayan spices, cooked to perfection. Served with a minty sauce made with garden peas (GF/DF)", price: "10.95" },
    { name: "Potters Magic", description: "One of our most popular veggie dishes cooked in our own recipe. Honey glazed cauliflower topped with spring onion and sesame seeds (GF/DF)", price: "10" },
    { name: "Sorha Khutte", description: "Baby squid stuffed with a vegetable stuffing, chargrilled and served on a Nepalese salad (GF/DF)", price: "9.95" },
    { name: "Ramtoria", description: "Crispy okra (lady fingers) packed with Nepalese herbs and spices. Tantalising finger food (V)(GF/DF)", price: "7.50" },
    { name: "Chicken/Lamb/Veg Momo", description: "5 Nepalese style dumplings, steam cooked and served with a homemade Nepalese tomato chutney and a sprinkle of coriander (V) AVAILABLE", price: "6.95" },
  ];

  const nepaleseMains = [
    { name: "Kathmandhu Chicken", description: "Succulent chicken tikka, slow cooked in a mild sauce, methi leaves and ground Himalayan spices. Served with pilau rice (GF/DF)", price: "17.95" },
    { name: "Lamb Sizzler", description: "Marinated in our homemade spice mix, peppers and fresh fenugreek to give a distinctive aromatic taste GRANDMA'S RECIPE! Served with pilau rice (GF/DF)", price: "17.95" },
    { name: "Romeo and Juliet", description: "Sweet and sour king prawns. Cooked with love and passion in tamarind sauce. Served with lemon rice (GF/DF)", price: "£" },
    { name: "Gurkha's Rifle", description: "Freshly imported goat from the Himalayans, cooked with onions, bell peppers and spices in a rich medium or spicy sauce. AROMATIC! Served with pilau rice (GF/DF)", price: "17.95" },
    { name: "Bang Bang Tandoori Mix Grill", description: "1 chop, 1 wing, 1 sheek kebab, 2 chicken tikka, 2 lamb tikka. Marinated to perfection (GF/DF)", price: "21.95" },
    { name: "Hariyo Lamb or Chicken", description: "Pieces of lamb or chicken cooked with fresh spinach and Nepalese herbs and spices. Served medium or hot. Accompanied with plain rice (GF/DF)", price: "17.50" },
    { name: "Peero Chicken", description: "Nepalese marinated chicken. Cooked in a medium to hot tomato based sauce. Served with pilau rice (GF/DF)", price: "17.95" },
    { name: "Everest Supreme", description: "Monkfish lightly spiced. Half cooked in our clay oven then pan cooked in a coconut, cashew nut and balsamic vinegar for the extra zing (GF/DF)", price: "£" },
    { name: "Lason Chicken", description: "Chicken cooked in a medium to hot fresh garlic sauce. Great for the garlic lovers... sadly not for the vampires (GF/DF)", price: "17.95" },
  ];

  const nepaleseSides = [
    { name: "Plain Naan", price: "3.50" },
    { name: "Garlic Naan", price: "3.95" },
    { name: "Sweet Naan", price: "4.50" },
    { name: "Garlic Chilli Naan", price: "4.50" },
    { name: "Keema Naan", price: "4.50" },
    { name: "Cheese & Onion Naan", price: "4.50" },
  ];

  const nepaleseRices = [
    { name: "Plain Rice", price: "3.50" },
    { name: "Pilau Rice", price: "3.95" },
    { name: "Lemon Rice", price: "3.95" },
    { name: "Bhuteko Bhat", price: "4.50" },
    { name: "Garlic Rice", price: "3.95" },
    { name: "Onion Rice", price: "4.50" },
  ];

  const nepaleseExtras = [
    { name: "Saag", price: "7.50" },
    { name: "Sindhu Aloo", description: "For two", price: "10" },
    { name: "Chau Chau", price: "7.50" },
  ];

  const MenuItem = ({ name, description, price }) => (
    <div className="menu-item">
      <div className="menu-item-info">
        <h4 className="menu-item-name">{name}</h4>
        {description && <p className="menu-item-description">{description}</p>}
      </div>
      <span className="menu-item-price">£{price}</span>
    </div>
  );

  const menuTabs = [
    { id: 'alacarte', label: 'A La Carte' },
    { id: 'barsnacks', label: 'Bar Snacks' },
    { id: 'nepalese', label: 'Nepalese' },
  ];

  return (
    <main>
      <Helmet>
        <title>Menu | Potters Arms - Traditional Pub Food & Nepalese Cuisine</title>
        <meta name="description" content="Discover our menu at the Potters Arms. Blending pub classics with the taste of Nepal. All freshly prepared by our team of chefs." />
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
          <h1 className="hero-title">Our Menu</h1>
          <p className="hero-location">Traditional Pub Food & Nepalese Cuisine</p>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="section-dark" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="menu-tabs">
            {menuTabs.map(tab => (
              <button
                key={tab.id}
                className={`menu-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* A La Carte Menu */}
      {activeTab === 'alacarte' && (
        <section className="section-darker menu-section">
          <div className="container">
            {/* Menu Description */}
            <div className="section-header reveal" style={{ marginBottom: '3rem' }}>
              <h2 className="section-title">A La Carte Menu</h2>
              <p className="section-subtitle">
                English classics served alongside our signature dishes
              </p>
              <div className="celtic-border"></div>
            </div>

            {/* Starters */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Starters</h2>
              {alacarteStarters.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Mains */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Mains</h2>
              {alacarteMains.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Burgers */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Burgers</h2>
              {alacarteBurgers.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Allergy Note */}
            <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Our food and drinks are prepared in areas where nuts and gluten are present as well as other allergens. We can not guarantee that any item is completely free from traces of allergens, due to the risk of unexpected cross contamination. Our menu descriptions do not list all ingredients. Please inform the staff of any allergies or dietary requirements before ordering. Some of our dishes may contain alcohol.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Bar Snacks Menu */}
      {activeTab === 'barsnacks' && (
        <section className="section-darker menu-section">
          <div className="container">
            {/* Menu Description */}
            <div className="section-header reveal" style={{ marginBottom: '3rem' }}>
              <h2 className="section-title">Bar Snacks</h2>
              <p className="section-subtitle">
                Nepalese bites perfect with your favourite drink
              </p>
              <div className="celtic-border"></div>
            </div>

            {/* Bar Snacks */}
            <div className="menu-category reveal">
              {barSnacks.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Allergy Note */}
            <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Our food and drinks are prepared in areas where nuts and gluten are present as well as other allergens. We can not guarantee that any item is completely free from traces of allergens, due to the risk of unexpected cross contamination. Our menu descriptions do not list all ingredients. Please inform the staff of any allergies or dietary requirements before ordering. Some of our dishes may contain alcohol.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Nepalese Menu */}
      {activeTab === 'nepalese' && (
        <section className="section-darker menu-section">
          <div className="container">
            {/* Menu Description */}
            <div className="section-header reveal" style={{ marginBottom: '3rem' }}>
              <h2 className="section-title">Nepalese Menu</h2>
              <p className="section-subtitle">
                See bottom of page for allergy information
              </p>
              <div className="celtic-border"></div>
            </div>

            {/* Starters */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Starters</h2>
              {nepaleseStarters.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Mains */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Mains</h2>
              {nepaleseMains.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Sides - Naan Breads */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Naan Breads</h2>
              {nepaleseSides.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Sides - Rices */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Rices</h2>
              {nepaleseRices.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Extras */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Extras</h2>
              {nepaleseExtras.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Allergy Note */}
            <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Our food and drinks are prepared in areas where nuts and gluten are present as well as other allergens. We can not guarantee that any item is completely free from traces of allergens, due to the risk of unexpected cross contamination. Our menu descriptions do not list all ingredients. Please inform the staff of any allergies or dietary requirements before ordering. Some of our dishes may contain alcohol.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="newsletter">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Reserve a Table</h2>
            <p className="section-subtitle">
              Book your table today and experience our delicious food.
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

export default Menu;
