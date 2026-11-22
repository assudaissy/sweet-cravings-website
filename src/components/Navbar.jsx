import { useState, useEffect } from 'react';
import { BRAND_INFO, createGeneralWhatsAppLink } from '../data/products';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-sticky' : ''}`}>
      {/* Top micro-announcement bar */}
      <div className="top-banner">
        <div className="container top-banner-content">
          <div className="top-banner-item">
            <span className="banner-icon">📍</span>
            <span>{BRAND_INFO.location}, Kano</span>
          </div>
          <div className="top-banner-item hide-mobile">
            <span className="banner-icon">⏰</span>
            <span>Freshly baked daily • Fast pickup &amp; delivery</span>
          </div>
          <div className="top-banner-item">
            <span className="banner-icon">📞</span>
            <a href={`tel:${BRAND_INFO.phone}`} className="banner-link">
              {BRAND_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          {/* Logo & Brand Identity */}
          <a href="#home" className="brand-logo-wrap" onClick={closeMobileMenu}>
            <img
              src={BRAND_INFO.logo}
              alt="Sweet Cravings - Treats ND Bites"
              className="brand-logo-img"
              width="60"
              height="60"
            />
            <div className="brand-text">
              <span className="brand-name">{BRAND_INFO.name}</span>
              <span className="brand-tagline">{BRAND_INFO.tagline}</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li>
              <a href="#categories" className="nav-link">Categories</a>
            </li>
            <li>
              <a href="#featured" className="nav-link">Featured</a>
            </li>
            <li>
              <a href="#menu" className="nav-link">Menu &amp; Catalogue</a>
            </li>
            <li>
              <a href="#about" className="nav-link">About Us</a>
            </li>
            <li>
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>

          {/* Action CTA & Mobile Toggle */}
          <div className="nav-actions">
            <a
              href={createGeneralWhatsAppLink('Hello Sweet Cravings! I want to order delicious treats.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp nav-cta"
            >
              <svg className="wa-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.848.813 2.796.813h.005c3.179 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.767-5.767-5.767zm0 10.378c-.85 0-1.68-.228-2.408-.659l-.173-.102-1.789.47.477-1.745-.112-.178c-.475-.755-.726-1.636-.725-2.544.001-2.541 2.068-4.608 4.61-4.608 2.542 0 4.609 2.067 4.61 4.608 0 2.542-2.068 4.608-4.61 4.608zm2.527-3.447c-.139-.069-.821-.405-.948-.451-.127-.046-.22-.069-.312.07-.093.139-.359.451-.44.544-.081.093-.162.104-.301.035-.139-.07-.587-.216-1.118-.689-.413-.368-.692-.823-.773-.962-.081-.139-.009-.214.061-.283.063-.062.139-.162.208-.243.069-.081.093-.139.139-.231.046-.093.023-.174-.012-.243-.035-.07-.312-.751-.428-1.029-.112-.269-.227-.233-.312-.237-.081-.005-.174-.006-.266-.006-.093 0-.243.035-.37.174-.127.139-.486.475-.486 1.157 0 .683.497 1.343.567 1.436.07.093.979 1.494 2.371 2.096.331.143.59.229.791.293.333.106.636.091.876.055.267-.04.821-.336.937-.66.116-.324.116-.602.081-.66-.035-.058-.128-.093-.267-.162z" />
              </svg>
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={`hamburger ${mobileMenuOpen ? 'is-active' : ''}`}
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-inner">
            {/* Mobile Brand Banner */}
            <div className="mobile-brand-banner">
              <img
                src={BRAND_INFO.logo}
                alt={BRAND_INFO.name}
                className="mobile-brand-logo"
                width="48"
                height="48"
              />
              <div className="mobile-brand-meta">
                <span className="mobile-brand-title">{BRAND_INFO.name}</span>
                <span className="mobile-brand-sub">{BRAND_INFO.tagline}</span>
              </div>
            </div>

            <ul className="mobile-links">
              <li>
                <a href="#home" onClick={closeMobileMenu}>Home</a>
              </li>
              <li>
                <a href="#categories" onClick={closeMobileMenu}>Food Categories</a>
              </li>
              <li>
                <a href="#featured" onClick={closeMobileMenu}>Featured Treats</a>
              </li>
              <li>
                <a href="#menu" onClick={closeMobileMenu}>Full Menu &amp; Prices</a>
              </li>
              <li>
                <a href="#about" onClick={closeMobileMenu}>About Sweet Cravings</a>
              </li>
              <li>
                <a href="#contact" onClick={closeMobileMenu}>Contact &amp; Location</a>
              </li>
            </ul>

            <div className="mobile-nav-footer">
              <a
                href={createGeneralWhatsAppLink('Hello Sweet Cravings! I want to place an order from your website.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-full"
                onClick={closeMobileMenu}
              >
                <span>Order on WhatsApp (+2347075114804)</span>
              </a>
              <div className="mobile-contact-info">
                <p>📍 {BRAND_INFO.location}, Kano</p>
                <p>📞 Call: <a href={`tel:${BRAND_INFO.phone}`}>{BRAND_INFO.phone}</a></p>
                <p>📸 Instagram: <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer">{BRAND_INFO.instagram}</a></p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
