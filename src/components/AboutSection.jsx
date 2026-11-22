import { BRAND_INFO, createGeneralWhatsAppLink } from '../data/products';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Visual Column */}
          <div className="about-visual">
            <div className="about-image-collage">
              <div className="about-img-main-wrap">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
                  alt="Baking with passion at Sweet Cravings"
                  className="about-img-main"
                  loading="lazy"
                />
              </div>
              <div className="about-img-sub-wrap">
                <img
                  src="/images/birthday-cake.jpg"
                  alt="Custom celebration cake"
                  className="about-img-sub"
                  loading="lazy"
                />
              </div>

              {/* Experience & Brand Badge */}
              <div className="about-stat-badge">
                <img
                  src={BRAND_INFO.logo}
                  alt="Sweet Cravings Brand Seal"
                  className="about-stat-logo"
                  width="44"
                  height="44"
                />
                <div className="about-stat-info">
                  <span className="badge-number">100% Fresh</span>
                  <span className="badge-text">{BRAND_INFO.name} Kitchen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content">
            <span className="section-tag">About Our Kitchen</span>
            <h2 className="about-title">
              Crafting Irresistible Moments at <span className="text-pink">{BRAND_INFO.name}</span>
            </h2>
            <p className="about-tagline-text">{BRAND_INFO.tagline}</p>

            <p className="about-p">
              At <strong>Sweet Cravings – Treats ND Bites</strong>, food is more than just a quick bite; it is a burst of warmth, sweet joy, and rich flavor crafted to brighten your day. Located in the vibrant heart of Kano at <strong>Zoo Road, Gandun Albasa</strong>, our kitchen is dedicated to delivering the finest bakery and fast-food treats.
            </p>

            <p className="about-p">
              From our signature toasted shawarmas bursting with seasoned meats and luscious sauces, to velvety soft glazed doughnuts, artistic celebration cakes, and crispy Nigerian party snacks — everything is prepared with meticulous hygiene and unmatched culinary passion.
            </p>

            {/* Core Values Pillars */}
            <div className="about-pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon">🧁</div>
                <div className="pillar-text">
                  <h4>Daily Fresh Bakes</h4>
                  <p>We bake and prepare every item daily using wholesome, quality ingredients.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">🌯</div>
                <div className="pillar-text">
                  <h4>Generous Fillings</h4>
                  <p>Our shawarma and pastries are loaded with flavor, meat, and signature spices.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">🎉</div>
                <div className="pillar-text">
                  <h4>Bespoke Celebrations</h4>
                  <p>From bento cakes to multi-tier birthday cakes, we tailor to your taste.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">💬</div>
                <div className="pillar-text">
                  <h4>Seamless WhatsApp Ordering</h4>
                  <p>Quick chat, prompt confirmations, and friendly customer care every time.</p>
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <a
                href={createGeneralWhatsAppLink('Hello Sweet Cravings! I would like to learn more and place an order.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>Chat With Us on WhatsApp</span>
              </a>
              <a href="#contact" className="btn btn-outline">
                <span>View Kitchen Location</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
