import { PRODUCTS, createGeneralWhatsAppLink } from '../data/products';
import ProductCard from './ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const featuredItems = PRODUCTS.filter((item) => item.isFeatured);

  return (
    <section id="featured" className="section featured-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Chef's Recommendations</span>
          <h2 className="section-title">Most Loved &amp; Featured Treats</h2>
          <p className="section-subtitle">
            These are the bites our customers can't stop talking about! Order straight on WhatsApp for prompt preparation and hot &amp; fresh delivery.
          </p>
        </div>

        <div className="featured-grid">
          {featuredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="featured-banner-callout">
          <div className="callout-content">
            <span className="callout-tag">Custom Party &amp; Event Orders</span>
            <h3 className="callout-title">Planning a Party, Birthday, or Office Gathering?</h3>
            <p className="callout-desc">
              We cater large doughnut boxes, custom celebration cakes, assorted shawarma platters and party puff-puff packs with special event packages!
            </p>
          </div>
          <a
            href={createGeneralWhatsAppLink('Hello Sweet Cravings! I want to inquire about custom orders / event catering.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary callout-btn"
          >
            <span>Inquire for Events</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
