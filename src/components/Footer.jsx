import { BRAND_INFO, createGeneralWhatsAppLink } from '../data/products';
import './Footer.css';

const Footer = ({ onSelectCategory }) => {
  const handleNavClick = (catId) => {
    if (onSelectCategory && catId) {
      onSelectCategory(catId);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-col footer-brand-col">
          <div className="footer-logo-row">
            <img
              src={BRAND_INFO.logo}
              alt="Sweet Cravings Logo"
              className="footer-logo-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="footer-brand-text">
              <span className="footer-brand-name">{BRAND_INFO.name}</span>
              <span className="footer-brand-tagline">{BRAND_INFO.tagline}</span>
            </div>
          </div>

          <p className="footer-about-text">
            Your premier food destination in Kano for juicy gourmet shawarma, freshly glazed artisan doughnuts, bespoke celebration cakes, creamy parfaits, and crispy hot snacks. Made fresh with pure love daily.
          </p>

          <div className="footer-social-row">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="Instagram"
            >
              <span>📸 Instagram: {BRAND_INFO.instagram}</span>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#categories">Food Categories</a>
            </li>
            <li>
              <a href="#featured">Featured Treats</a>
            </li>
            <li>
              <a href="#menu">Full Menu &amp; Pricing</a>
            </li>
            <li>
              <a href="#about">About Sweet Cravings</a>
            </li>
            <li>
              <a href="#contact">Contact &amp; Location</a>
            </li>
          </ul>
        </div>

        {/* Specialties / Top Categories Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Our Specialties</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#menu" onClick={() => handleNavClick('shawarma')}>
                Shawarma (Beef &amp; Chicken)
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => handleNavClick('doughnut-packs')}>
                Doughnuts (Ring, Filled &amp; Glazed)
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => handleNavClick('cakes-desserts')}>
                Bento &amp; Milk Cakes
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => handleNavClick('cakes-desserts')}>
                Parfaits &amp; Cupcakes
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => handleNavClick('other-products')}>
                Meat Pie &amp; Small Chops
              </a>
            </li>
            <li>
              <a href="#menu" onClick={() => handleNavClick('other-products')}>
                Glazed Puff Puff (Pack of 8)
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col footer-contact-col">
          <h4 className="footer-heading">Get In Touch</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="fc-icon">📍</span>
              <div>
                <strong>Location:</strong>
                <p>{BRAND_INFO.location}, Kano</p>
              </div>
            </li>
            <li>
              <span className="fc-icon">📞</span>
              <div>
                <strong>Call Us:</strong>
                <a href={`tel:${BRAND_INFO.phone}`} className="fc-link">
                  {BRAND_INFO.phone}
                </a>
              </div>
            </li>
            <li>
              <span className="fc-icon">💬</span>
              <div>
                <strong>WhatsApp Orders:</strong>
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fc-link"
                >
                  {BRAND_INFO.phoneRaw}
                </a>
              </div>
            </li>
            <li>
              <span className="fc-icon">⏰</span>
              <div>
                <strong>Kitchen Hours:</strong>
                <p>{BRAND_INFO.openingHours}</p>
              </div>
            </li>
          </ul>

          <a
            href={createGeneralWhatsAppLink('Hello Sweet Cravings! I want to order on WhatsApp.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp footer-order-btn"
          >
            <span>Order on WhatsApp Now</span>
          </a>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            &copy; 2026 <strong>{BRAND_INFO.name}</strong> – {BRAND_INFO.tagline}. All rights reserved.
          </p>
          <p className="footer-subtext">
            Handcrafted with ❤️ at Zoo Road, Gandun Albasa, Kano.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
