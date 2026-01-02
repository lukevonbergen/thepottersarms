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
  const breakfast = [
    { name: "Full English Breakfast", description: "Two Cumberland sausages, streaky bacon, plum tomato, fried egg, fried bread", price: "13.50" },
    { name: "Full Veggie Breakfast", description: "Two fried eggs, plum tomato, portobello mushrooms, two plant-based sausages, avocado, fried bread", price: "12.50" },
    { name: "Eggs Benedict", description: "Toasted English muffin, streaky bacon, poached hen's eggs, hollandaise sauce", price: "12" },
    { name: "Eggs Royal", description: "Toasted English muffin, smoked salmon, poached hen's eggs, hollandaise sauce", price: "12" },
    { name: "Bacon Sandwich", description: "Streaky bacon on brown or white bread", price: "6" },
    { name: "Cumberland Sausage Sandwich", description: "Cumberland sausage served on brown or white bread", price: "6.50" },
  ];

  const starters = [
    { name: "Soup of the Day", description: "Ask your server for today's special served with warm bread and English butter", price: "8.50" },
    { name: "Salt & Pepper Wings", description: "Served with lime mayonnaise and micro parsley", price: "9" },
    { name: "Scotch Egg", description: "Soft boiled egg in a Cumberland sausage case with whole grain mustard mayonnaise", price: "7" },
    { name: "Grilled Asparagus", description: "Served with nori crispy hen's egg, truffle mayonnaise and parmesan cheese", price: "10" },
    { name: "Red Chilli Prawns", description: "Burnt red chilli prawns, focaccia and lemon", price: "12" },
    { name: "Crispy Whitebait", description: "Served with tartare sauce, brown bread and butter", price: "9" },
  ];

  const chefsSpecials = [
    { name: "Fish & Chips", description: "Beer battered haddock, tartare sauce, mushy peas and hand cut chips", price: "17.50" },
    { name: "Chicken Schnitzel", description: "Golden crumbed chicken fillet with asparagus, tenderstem broccoli, garlic butter and mashed potato", price: "18" },
    { name: "Scampi", description: "Breaded scampi, skinny fries, tartare sauce and garden peas", price: "19" },
    { name: "Bangers & Mash", description: "Victoria sausages served with mashed potato, buttered seasonal vegetables and an onion and red wine gravy", price: "16.50" },
    { name: "BBQ Pork Ribs", description: "Served with crispy onion rings, coleslaw and skinny fries", price: "18.50" },
    { name: "Vegan Buttermilk Burger", description: "Buttermilk quorn burger with vegan cheese, hash brown, cool salsa, iceberg lettuce and sweet potato fries", price: "16" },
    { name: "Buttermilk Chicken Burger", description: "With cheddar cheese, hash brown, cool salsa and iceberg lettuce. Served with skinny fries", price: "16" },
    { name: "Lamb Burger", description: "With roasted red peppers, tzatziki, and iceberg lettuce", price: "16" },
    { name: "Halloumi Burger", description: "Brioche bun, iceberg lettuce, beef tomato and cool salsa", price: "9" },
  ];

  const nepaleseBites = [
    { name: "Papadums - plain or spicy", description: "Served with homemade Nepalese chutneys", price: "2.50" },
    { name: "Sindhu Aloo", description: "Mouth-watering baby potato wedges tampered with fusion of Nepalese spices, served crispy. A favourite for potato lovers!", price: "10" },
    { name: "Potters Magic", description: "One of the most popular veggie dishes cooked in our own recipe. It's called the 'magic' for a reason - you will not be disappointed", price: "10" },
    { name: "Momo - veg / chicken / lamb", description: "Nepalese style dumpling, steam cooked, served with tomato chutney", price: "12" },
    { name: "Chilli Chicken", description: "A typical Nepalese dish made from chicken breast, marinated in spices, cooked with onion, tomato, capsicum and green chillies", price: "12" },
    { name: "Aghari Lamb", description: "For mincemeat lovers, minced lamb balls, tangy, garlicky, served with freshness of greenery. Simply mouth-watering", price: "12" },
    { name: "Dallo Onion", description: "Crispy Nepalese fritters, finely sliced onions tempered with our own recipe. 3pcs", price: "6" },
    { name: "Mustang Sally", description: "Succulent spring lamb cooked with chunks of bell peppers & onions in a garlicky and sweet chilli sauce. Fantastic with Beers/Ales!", price: "12.50" },
    { name: "Mashura Garlic and Chilli", description: "Fresh Tofu cooked in our own homemade sauce", price: "11" },
    { name: "Taro Finger Chips", description: "Taro chips, steamed then deep fried with a hint of Nepalese herbs. Great for protein/fibre lovers!", price: "10" },
  ];

  const saladsSharing = [
    { name: "Chicken Caesar Salad", description: "Grilled chicken fillet with soft boiled egg, croutons, baby gem lettuce, anchovies, caesar dressing and parmesan", price: "11" },
    { name: "Salmon & Prawn Salad", description: "Scottish smoked salmon and prawns with bitter leaves, cucumber, cherry tomatoes, a Marie Rose sauce and brown bread", price: "14" },
    { name: "Orzo Pasta", description: "With buffalo mozzarella, cherry tomatoes, olives and pesto", price: "15" },
    { name: "Greek Platter", description: "Hummus, Tzatziki, Taramosalata, mixed olives and pitta", price: "19" },
    { name: "Potters Nepalese Salad", description: "Cucumber, tomatoes and red onion with olive oil, sesame seeds and garlic and a secret homemade dressing", price: "6" },
    { name: "Baked Camembert", description: "With garlic and rosemary and onion chutney", price: "17" },
  ];

  const sandwiches = [
    { name: "Honey Roast Ham", description: "Hand carved and served in a brioche bun with fried egg and chips", price: "10.50" },
    { name: "Smoked Salmon", description: "Scottish smoked salmon with cream cheese and cucumber", price: "10" },
    { name: "Caprese Focaccia", description: "Pillowy Italian bread with buffalo mozzarella, seasonal tomato and basil", price: "10.50" },
    { name: "Brie & Cranberry", description: "With crispy bacon or avocado on focaccia bread", price: "10" },
    { name: "Potters Arms Toasted Club Sandwich", description: "Bacon, truffled eggs, mayonnaise, gem lettuce and tomato", price: "11" },
  ];

  const desserts = [
    { name: "Brownie", description: "Fresh out the oven brownie with chocolate sauce and vanilla ice cream", price: "8.50" },
    { name: "Sticky Toffee Pudding", description: "Toffee sauce and salted caramel ice cream", price: "8.50" },
    { name: "Apple & Cinnamon Crumble", description: "With your choice of custard or ice cream", price: "8.50" },
    { name: "Summer Berry Eton Mess", description: "Served with a chantilly cream", price: "8" },
    { name: "Ice Cream - 3 Generous Scoops", description: "Choose from vanilla, chocolate, strawberry, salted caramel, mint and choc chip", price: "5" },
    { name: "Sorbet - 3 Generous Scoops", description: "Choose from lemon, mango or raspberry", price: "5" },
  ];

  // Nepalese Menu Data
  const nepaleseStarters = [
    { name: "Mutton Chops", description: "Marinated in Himalayan spices, ginger and garlic, so good that you will want to dig in with your hands (3pce)", price: "14.95" },
    { name: "Ramtorya", description: "Crispy Okra (lady fingers) packed with Nepalese herbs and spices. Tantalising finger food", price: "6.50" },
    { name: "Everest King Prawns", description: "Grilled U5 king prawns, some say freshly imported from the mountains of Nepal. Grounded in our homemade spice mix. Mouthwatering", price: "19.95" },
  ];

  const nepaleseSmallPlates = [
    { name: "Sindhu Aloo", description: "Mouth-watering baby potato wedges tampered with fusion of Nepalese spices, served crispy. A favourite for potato lovers!", price: "10" },
    { name: "Potters Magic", description: "One of the most popular veggie dishes cooked in our own recipe. It's called the 'magic' for a reason - you will not be disappointed", price: "10" },
    { name: "Momo - veg / chicken / lamb", description: "Nepalese style dumpling, steam cooked, served with tomato chutney", price: "12" },
    { name: "Dallo Onion", description: "Crispy Nepalese fritters, finely sliced onions tempered with our own recipe. 3pcs", price: "6" },
    { name: "Mustang Sally", description: "Succulent spring lamb cooked with chunks of bell peppers & onions in a garlicky and sweet chilli sauce. Fantastic with Beers/Ales!", price: "12.50" },
    { name: "Chilli Chicken", description: "A typical Nepalese dish made from chicken breast, marinated in spices, cooked with onion, tomato, capsicum and green chillies", price: "12" },
  ];

  const nepaleseMains = [
    { name: "Kathmandu Chicken", description: "Succulent chicken tikka, cooked slowly in a mild sauce, methi leaves and ground Himalayan spices. Served with pilau rice", price: "16.95" },
    { name: "Lamb Sizzler", description: "Marinated in our homemade spice mix, peppers, fresh fenugreek to give a distinctive aromatic taste. Grandma's Recipe! Served with pilau rice", price: "16.95" },
    { name: "Bang Bang Tandoori Mixed Grill", description: "2 lamb chops, 2 wings, 2 sheek kebab, 2 chicken tikka, 2 lamb tikka. Marinated to perfection...", price: "21.95" },
  ];

  const nepaleseSides = [
    { name: "Plain Rice", price: "3" },
    { name: "Pilau Rice", price: "3.50" },
    { name: "Lemon Rice", price: "6.50" },
    { name: "Saag Aloo", price: "6.50" },
    { name: "Papadums - plain or spicy", description: "Served with homemade Nepalese chutneys", price: "2.50" },
    { name: "Plain Naan", price: "3.50" },
    { name: "Garlic Naan", price: "3.95" },
    { name: "Sweet Naan", price: "4.50" },
    { name: "Cheese Naan", price: "4.50" },
    { name: "Keema Naan", price: "4.50" },
  ];

  // Sunday Menu Data
  const sundayStarters = [
    { name: "Scotch Egg", description: "Soft boiled egg in a Cumberland sausage case with whole grain mustard mayonnaise", price: "7" },
    { name: "Crispy Whitebait", description: "Served with tartare sauce, brown bread and butter", price: "9" },
    { name: "Prawn Cocktail", description: "Served with cucumber, lemon, home-made prawn sauce, lemon, iceberg lettuce & tomato and buttered brown bread", price: "7.50" },
  ];

  const sundayRoasts = [
    { name: "Roast Beef Sirloin - medium rare", description: "Served with roasted potatoes, cauliflower cheese, swede mash, glazed carrots, sweetheart cabbage, giant yorkshire pudding, and real gravy", price: "23" },
    { name: "Roast Chicken", description: "Served with roasted potatoes, cauliflower cheese, swede mash, glazed carrots, sweetheart cabbage, giant yorkshire pudding and real gravy", price: "21" },
    { name: "Roast Lamb - medium rare", description: "Served with roasted potatoes, cauliflower cheese, swede mash, glazed carrots, sweetheart cabbage, giant yorkshire pudding, and real gravy", price: "23" },
    { name: "Roast Gammon", description: "Served with roasted potatoes, cauliflower cheese, swede mash, glazed carrots, sweetheart cabbage, giant yorkshire pudding, and real gravy", price: "19" },
    { name: "Nutless Nut Roast", description: "Served with roasted potatoes, cauliflower cheese, swede mash, glazed carrots, sweetheart cabbage, giant yorkshire pudding, and real gravy", price: "15" },
    { name: "Big Daddy Roast - Chicken, Gammon, Lamb, Beef", description: "Served with roasted potatoes, cauliflower cheese, swede mash, glazed carrots, sweetheart cabbage, giant yorkshire pudding, and real gravy", price: "35" },
  ];

  const sundayMains = [
    { name: "Fish & Chips", description: "Beer battered haddock, tartare sauce, mushy peas and hand cut chips", price: "17.50" },
    { name: "Bangers & Mash", description: "Victoria sausages served with mashed potato, buttered seasonal vegetables and an onion and red wine gravy", price: "16.50" },
    { name: "Pan-roasted Sea Bass", description: "Served with buttery mash, new potato, lemon veg and grilled cherry tomato", price: "18.50" },
    { name: "Chicken Stuffing", description: "Served with sliced pancetta mashed potato, whole grain mustard, cream, rocket leaf sauce and seasonal greens", price: "15" },
    { name: "Chicken Caesar Salad", description: "Grilled chicken fillet with soft boiled egg, croutons, baby gem lettuce, anchovies, caesar dressing and parmesan", price: "11" },
    { name: "Smoked Salmon & Prawn Salad", description: "Scottish smoked salmon with plump prawns, served with bitter leaves, cucumber, cherry tomatoes in a marie rose sauce with brown bread", price: "14" },
    { name: "Buttermilk Chicken Burger", description: "With cheddar cheese, hash brown, cool salsa and iceberg lettuce. Served with skinny fries", price: "16" },
  ];

  const sundaySides = [
    { name: "Pigs in Blankets", price: "6" },
    { name: "Seasonal Greens", price: "6" },
    { name: "Hand Cut Chips", price: "5" },
    { name: "Skinny Fries", price: "5" },
    { name: "Cheesy Chips", price: "6" },
  ];

  const sundayDesserts = [
    { name: "Apple Crumble", description: "With vanilla ice cream", price: "9" },
    { name: "Waffle & Chocolate Ice Cream", description: "With seasonal fruits and chocolate sauce", price: "11.50" },
    { name: "Pistachio Affogato", description: "With vanilla ice cream and an espresso sauce", price: "8.50" },
    { name: "Ice Cream - 3 Generous Scoops", description: "Choose from vanilla, chocolate, strawberry, salted caramel, mint and choc chip", price: "5" },
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
    { id: 'nepalese', label: 'Nepalese' },
    { id: 'sunday', label: 'Sunday' },
  ];

  return (
    <main>
      <Helmet>
        <title>Menu | Potters Arms - Traditional Pub Food & Nepalese Cuisine</title>
        <meta name="description" content="Discover our menu at the Potters Arms. Blending pub classics, Sunday roasts and snacks with the taste of Nepal. All freshly prepared by our team of chefs." />
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
                English classics for breakfast, lunch and dinner served alongside Nepalese specials
              </p>
              <div className="celtic-border"></div>
            </div>

            {/* Breakfast/Brunch */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Breakfast / Brunch</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Served between 7.30am and 1.00pm (except Sundays)
              </p>
              {breakfast.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Starters */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Starters</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Our delicious small plate selection or checkout our Nepalese Bites
              </p>
              {starters.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Chef's Specials */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Chef's Specials</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                They're classics for a reason
              </p>
              {chefsSpecials.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Nepalese Bites */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Nepalese Bites</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Range of Nepalese savouries to tickle your tongue
              </p>
              {nepaleseBites.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Salads and Sharing Plates */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Salads & Sharing Plates</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Lighten up with fresh seasonal ingredients and food that's great to share
              </p>
              {saladsSharing.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Sandwiches */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Sandwiches</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                All served with skinny fries. White or brown bread available
              </p>
              {sandwiches.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Desserts */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Desserts</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Our desserts are made in house by our pastry chef
              </p>
              {desserts.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Allergy Note */}
            <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Please inform staff of any allergies. Menu items subject to availability.
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
                Spicy selection from the land of the Himalayas
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

            {/* Small Plates */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Small Plates</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Our Nepalese Bites to mix and match. Ideal for sharing
              </p>
              {nepaleseSmallPlates.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Mains */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Mains</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Served daily. Checkout our chalk board or ask your server for today's specials
              </p>
              {nepaleseMains.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Extras / Sides */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Extras / Sides</h2>
              {nepaleseSides.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Allergy Note */}
            <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Please inform staff of any allergies. Menu items subject to availability.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Sunday Menu */}
      {activeTab === 'sunday' && (
        <section className="section-darker menu-section">
          <div className="container">
            {/* Menu Description */}
            <div className="section-header reveal" style={{ marginBottom: '3rem' }}>
              <h2 className="section-title">Sunday Menu</h2>
              <p className="section-subtitle">
                Join us for a classic Sunday roast or pick from our a la carte menu
              </p>
              <div className="celtic-border"></div>
            </div>

            {/* Starters */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Starters</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Kick off your meal with our delicious small plates
              </p>
              {sundayStarters.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Legendary Roasts */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Legendary Roasts</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Prepared freshly to set you up for the week ahead
              </p>
              {sundayRoasts.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Special Mains */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Special Mains</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Sunday specials and favourites from our a la carte menu
              </p>
              {sundayMains.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Side Dishes */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Side Dishes</h2>
              {sundaySides.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Desserts */}
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Desserts</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Finish off with something sweet
              </p>
              {sundayDesserts.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Allergy Note */}
            <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Please inform staff of any allergies. Menu items subject to availability.
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
