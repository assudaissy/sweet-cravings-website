import { useState } from 'react';
import { BRAND_INFO, PRODUCTS, createWhatsAppOrderLink } from '../data/products';
import './ContactSection.css';

const ContactSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0].name);
  const [customerName, setCustomerName] = useState('');
  const [deliveryNote, setDeliveryNote] = useState('');

  const handleCustomOrderSubmit = (e) => {
    e.preventDefault();
    const product = PRODUCTS.find((p) => p.name === selectedProduct);
    const waUrl = createWhatsAppOrderLink(
      product || { name: selectedProduct, price: 'Contact us for price' },
      customerName,
      deliveryNote
    );
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Visit Us or Order Now</h2>
          <p className="section-subtitle">
            We are always thrilled to hear from you! Reach out via WhatsApp, call us directly, or follow our appetizing updates on Instagram.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="contact-cards-grid">
          {/* WhatsApp Card */}
          <div className="contact-card card-whatsapp">
            <div className="contact-card-icon wa-bubble">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.848.813 2.796.813h.005c3.179 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.767-5.767-5.767zm0 10.378c-.85 0-1.68-.228-2.408-.659l-.173-.102-1.789.47.477-1.745-.112-.178c-.475-.755-.726-1.636-.725-2.544.001-2.541 2.068-4.608 4.61-4.608 2.542 0 4.609 2.067 4.61 4.608 0 2.542-2.068 4.608-4.61 4.608zm2.527-3.447c-.139-.069-.821-.405-.948-.451-.127-.046-.22-.069-.312.07-.093.139-.359.451-.44.544-.081.093-.162.104-.301.035-.139-.07-.587-.216-1.118-.689-.413-.368-.692-.823-.773-.962-.081-.139-.009-.214.061-.283.063-.062.139-.162.208-.243.069-.081.093-.139.139-.231.046-.093.023-.174-.012-.243-.035-.07-.312-.751-.428-1.029-.112-.269-.227-.233-.312-.237-.081-.005-.174-.006-.266-.006-.093 0-.243.035-.37.174-.127.139-.486.475-.486 1.157 0 .683.497 1.343.567 1.436.07.093.979 1.494 2.371 2.096.331.143.59.229.791.293.333.106.636.091.876.055.267-.04.821-.336.937-.66.116-.324.116-.602.081-.66-.035-.058-.128-.093-.267-.162z" />
              </svg>
            </div>
            <span className="card-kicker">Instant Order Chat</span>
            <h3 className="card-title">WhatsApp</h3>
            <p className="card-value">{BRAND_INFO.phoneRaw}</p>
            <p className="card-desc">Fastest response for fresh orders, custom cakes &amp; delivery.</p>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Sweet Cravings! I would like to order.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp card-action-btn"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Phone Call Card */}
          <div className="contact-card">
            <div className="contact-card-icon phone-bubble">📞</div>
            <span className="card-kicker">Call Us Directly</span>
            <h3 className="card-title">Phone</h3>
            <p className="card-value">{BRAND_INFO.phone}</p>
            <p className="card-desc">Call during opening hours for urgent questions or bulk inquiries.</p>
            <a href={`tel:${BRAND_INFO.phone}`} className="btn btn-secondary card-action-btn">
              Call {BRAND_INFO.phone}
            </a>
          </div>

          {/* Location Card */}
          <div className="contact-card">
            <div className="contact-card-icon loc-bubble">📍</div>
            <span className="card-kicker">Kitchen &amp; Pickup</span>
            <h3 className="card-title">Location</h3>
            <p className="card-value">{BRAND_INFO.location}</p>
            <p className="card-desc">Kano State, Nigeria. Convenient pickup point for all orders.</p>
            <div className="location-pill">Open: 9:00 AM – 9:00 PM</div>
          </div>

          {/* Instagram Card */}
          <div className="contact-card">
            <div className="contact-card-icon ig-bubble">📸</div>
            <span className="card-kicker">Follow Our Delights</span>
            <h3 className="card-title">Instagram</h3>
            <p className="card-value ig-handle">{BRAND_INFO.instagram}</p>
            <p className="card-desc">See our daily baking reels, customer reviews &amp; cake drops.</p>
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline card-action-btn"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        {/* Quick WhatsApp Message Builder */}
        <div className="quick-order-form-container">
          <div className="form-info-side">
            <div className="form-brand-badge-row">
              <img
                src={BRAND_INFO.logo}
                alt={BRAND_INFO.name}
                className="form-brand-logo"
                width="38"
                height="38"
              />
              <span className="section-tag">Direct WhatsApp Assistant</span>
            </div>
            <h3 className="form-heading">Build Your Order Message in Seconds</h3>
            <p className="form-text">
              Select your craving below, add any special instructions (like extra peppers on your shawarma, custom writing for your bento cake, or delivery details), and click the button to send directly to our WhatsApp!
            </p>

            <div className="form-perks">
              <div className="perk-row">
                <span className="perk-check">✓</span>
                <span>Pre-filled WhatsApp message with product name</span>
              </div>
              <div className="perk-row">
                <span className="perk-check">✓</span>
                <span>Immediate confirmation from our kitchen team</span>
              </div>
              <div className="perk-row">
                <span className="perk-check">✓</span>
                <span>Zero complicated checkouts or hidden fees</span>
              </div>
            </div>
          </div>

          <div className="form-card-side">
            <form onSubmit={handleCustomOrderSubmit} className="order-builder-form">
              <div className="form-group">
                <label htmlFor="productSelect" className="form-label">
                  Choose Your Item
                </label>
                <select
                  id="productSelect"
                  className="form-select"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.name}>
                      {prod.name} — {prod.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="customerName" className="form-label">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  id="customerName"
                  className="form-input"
                  placeholder="e.g. Fatima or Ahmad"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="deliveryNote" className="form-label">
                  Special Instructions or Delivery Location (Optional)
                </label>
                <textarea
                  id="deliveryNote"
                  className="form-textarea"
                  rows={3}
                  placeholder="e.g. Extra spicy beef shawarma, pickup at 2pm, or deliver to Zoo Road..."
                  value={deliveryNote}
                  onChange={(e) => setDeliveryNote(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-whatsapp btn-full-submit">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.848.813 2.796.813h.005c3.179 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.767-5.767-5.767zm0 10.378c-.85 0-1.68-.228-2.408-.659l-.173-.102-1.789.47.477-1.745-.112-.178c-.475-.755-.726-1.636-.725-2.544.001-2.541 2.068-4.608 4.61-4.608 2.542 0 4.609 2.067 4.61 4.608 0 2.542-2.068 4.608-4.61 4.608zm2.527-3.447c-.139-.069-.821-.405-.948-.451-.127-.046-.22-.069-.312.07-.093.139-.359.451-.44.544-.081.093-.162.104-.301.035-.139-.07-.587-.216-1.118-.689-.413-.368-.692-.823-.773-.962-.081-.139-.009-.214.061-.283.063-.062.139-.162.208-.243.069-.081.093-.139.139-.231.046-.093.023-.174-.012-.243-.035-.07-.312-.751-.428-1.029-.112-.269-.227-.233-.312-.237-.081-.005-.174-.006-.266-.006-.093 0-.243.035-.37.174-.127.139-.486.475-.486 1.157 0 .683.497 1.343.567 1.436.07.093.979 1.494 2.371 2.096.331.143.59.229.791.293.333.106.636.091.876.055.267-.04.821-.336.937-.66.116-.324.116-.602.081-.66-.035-.058-.128-.093-.267-.162z" />
                </svg>
                <span>Send Order to WhatsApp (+2347075114804)</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
