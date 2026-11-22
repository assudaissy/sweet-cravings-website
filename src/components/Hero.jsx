import { BRAND_INFO, createGeneralWhatsAppLink } from '../data/products';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="hero-pill-badge">
            <img
              src={BRAND_INFO.logo}
              alt="Sweet Cravings Logo"
              className="hero-pill-logo"
              width="24"
              height="24"
            />
            <span>Welcome to Kano's Sweetest Spot</span>
          </div>

          <h1 className="hero-title">
            Freshly Baked <span className="highlight-pink">Treats</span> &amp; Savory{' '}
            <span className="highlight-brown">Bites</span> You'll Crave Every Day.
          </h1>

          <p className="hero-description">
            Welcome to <strong>{BRAND_INFO.name} – {BRAND_INFO.tagline}</strong>! From our famous heavily-loaded chicken &amp; beef shawarma and melt-in-the-mouth doughnut packs, to artisanal cakes, parfaits, and crispy snacks — we prepare every order fresh with premium love.
          </p>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <a
              href={createGeneralWhatsAppLink('Hello Sweet Cravings! I would like to place an order from your website.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp hero-wa-btn"
            >
              <svg className="wa-icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.848.813 2.796.813h.005c3.179 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.767-5.767-5.767zm0 10.378c-.85 0-1.68-.228-2.408-.659l-.173-.102-1.789.47.477-1.745-.112-.178c-.475-.755-.726-1.636-.725-2.544.001-2.541 2.068-4.608 4.61-4.608 2.542 0 4.609 2.067 4.61 4.608 0 2.542-2.068 4.608-4.61 4.608zm2.527-3.447c-.139-.069-.821-.405-.948-.451-.127-.046-.22-.069-.312.07-.093.139-.359.451-.44.544-.081.093-.162.104-.301.035-.139-.07-.587-.216-1.118-.689-.413-.368-.692-.823-.773-.962-.081-.139-.009-.214.061-.283.063-.062.139-.162.208-.243.069-.081.093-.139.139-.231.046-.093.023-.174-.012-.243-.035-.07-.312-.751-.428-1.029-.112-.269-.227-.233-.312-.237-.081-.005-.174-.006-.266-.006-.093 0-.243.035-.37.174-.127.139-.486.475-.486 1.157 0 .683.497 1.343.567 1.436.07.093.979 1.494 2.371 2.096.331.143.59.229.791.293.333.106.636.091.876.055.267-.04.821-.336.937-.66.116-.324.116-.602.081-.66-.035-.058-.128-.093-.267-.162z" />
              </svg>
              <span>Order on WhatsApp</span>
            </a>

            <a href="#menu" className="btn btn-outline hero-menu-btn">
              <span>Explore Our Menu</span>
              <span className="arrow-icon">↓</span>
            </a>
          </div>

          {/* Key Selling Points */}
          <div className="hero-features-list">
            <div className="hero-feature-item">
              <span className="feature-icon">✨</span>
              <div>
                <strong>Fresh Daily</strong>
                <p>Baked &amp; grilled to order</p>
              </div>
            </div>
            <div className="hero-feature-item">
              <span className="feature-icon">📍</span>
              <div>
                <strong>Zoo Road, Kano</strong>
                <p>Gandun Albasa location</p>
              </div>
            </div>
            <div className="hero-feature-item">
              <span className="feature-icon">⚡</span>
              <div>
                <strong>Swift Orders</strong>
                <p>Direct WhatsApp chats</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="hero-visual">
          <div className="hero-image-stack">
            {/* Main Featured Food Card */}
            <div className="hero-main-card">
              <img
                src="/images/chicken-shawarma.jpg"
                alt="Delicious Chicken Shawarma from Sweet Cravings"
                className="hero-main-img"
              />
              <div className="hero-card-overlay">
                <span className="hero-card-tag">Hot &amp; Fresh</span>
                <h3 className="hero-card-title">Juicy Chicken Shawarma</h3>
                <p className="hero-card-price">₦3,000</p>
              </div>
            </div>

            {/* Floating Bubble 1: Official Sweet Cravings Brand Badge */}
            <div className="hero-float-card float-top-right">
              <img
                src={BRAND_INFO.logo}
                alt="Sweet Cravings Official Logo"
                className="float-brand-logo"
                width="50"
                height="50"
              />
              <div className="float-info">
                <span className="float-badge">Original Kitchen</span>
                <span className="float-name">{BRAND_INFO.name}</span>
                <span className="float-sub">{BRAND_INFO.tagline}</span>
              </div>
            </div>

            {/* Floating Bubble 2: Bestseller Treats */}
            <div className="hero-float-card float-bottom-left">
              <img
                src="/images/glazed-doughnuts.jpg"
                alt="Doughnuts Takeaway Pack"
                className="float-thumb"
              />
              <div className="float-info">
                <span className="float-rating">★★★★★ 5.0</span>
                <span className="float-name">Doughnut Packs</span>
                <span className="float-price">From ₦1,000 • Fresh Daily</span>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="hero-bg-blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
