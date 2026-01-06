import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Placeholder images - replace with actual gallery images
  const galleryImages = [
    // Add your images here in this format:
    // { src: '/images/gallery/image1.jpg', alt: 'Description of image' },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main>
      <Helmet>
        <title>Gallery | Potters Arms - Photos from Winchmore Hill, Bucks</title>
        <meta name="description" content="Browse photos from the Potters Arms in Winchmore Hill, Bucks. See our pub, food, events, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Gallery</h1>
          <p className="hero-location">A Glimpse of the Potters Arms</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Our Photos</h2>
            <p className="section-subtitle">
              Take a look at life at the Potters Arms - from our delicious food to our memorable events.
            </p>
            <div className="celtic-border"></div>
          </div>

          {galleryImages.length > 0 ? (
            <div
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1rem',
                marginTop: '2rem',
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(image)}
                  style={{
                    aspectRatio: '1',
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                    border: '1px solid var(--border-color)',
                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.opacity = '1';
                  }}
                ></div>
              ))}
            </div>
          ) : (
            <div
              className="reveal"
              style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'var(--primary-bg)',
                border: '1px solid var(--border-color)',
                marginTop: '2rem',
              }}
            >
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                Gallery coming soon! Check back after our launch for photos of the pub, food, and events.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer',
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            style={{
              maxWidth: '90%',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
