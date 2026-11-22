import { createWhatsAppOrderLink } from '../data/products';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const isPriced = product.hasExactPrice;
  const waUrl = createWhatsAppOrderLink(product);

  return (
    <div className={`product-card ${product.isFeatured ? 'is-featured-card' : ''}`}>
      {/* Product Image & Badges */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            // Fallback placeholder image if needed
            e.currentTarget.src = '/images/chicken-shawarma.jpg';
          }}
        />
        
        {/* Badges container */}
        <div className="product-badges-top">
          {product.badge && (
            <span className={`product-badge ${product.badge === 'Bestseller' ? 'badge-bestseller' : 'badge-standard'}`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Category tag */}
        <span className="product-category-chip">{product.categoryName}</span>
      </div>

      {/* Card Content */}
      <div className="product-info">
        <div className="product-rating-row">
          <span className="product-rating-stars">★ {product.rating || '4.9'}</span>
          <span className="product-kitchen-tag">Sweet Cravings Fresh</span>
        </div>

        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        {/* Pricing & Order Section */}
        <div className="product-footer">
          <div className="product-price-wrapper">
            <span className="price-label">Price</span>
            <div className={`product-price-value ${isPriced ? 'price-exact' : 'price-contact'}`}>
              {product.price}
            </div>
            {product.optionsText && (
              <span className="product-options-chip">{product.optionsText}</span>
            )}
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp product-order-btn"
            title={`Order ${product.name} on WhatsApp`}
          >
            <svg className="wa-icon-sm" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.848.813 2.796.813h.005c3.179 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.767-5.767-5.767zm0 10.378c-.85 0-1.68-.228-2.408-.659l-.173-.102-1.789.47.477-1.745-.112-.178c-.475-.755-.726-1.636-.725-2.544.001-2.541 2.068-4.608 4.61-4.608 2.542 0 4.609 2.067 4.61 4.608 0 2.542-2.068 4.608-4.61 4.608zm2.527-3.447c-.139-.069-.821-.405-.948-.451-.127-.046-.22-.069-.312.07-.093.139-.359.451-.44.544-.081.093-.162.104-.301.035-.139-.07-.587-.216-1.118-.689-.413-.368-.692-.823-.773-.962-.081-.139-.009-.214.061-.283.063-.062.139-.162.208-.243.069-.081.093-.139.139-.231.046-.093.023-.174-.012-.243-.035-.07-.312-.751-.428-1.029-.112-.269-.227-.233-.312-.237-.081-.005-.174-.006-.266-.006-.093 0-.243.035-.37.174-.127.139-.486.475-.486 1.157 0 .683.497 1.343.567 1.436.07.093.979 1.494 2.371 2.096.331.143.59.229.791.293.333.106.636.091.876.055.267-.04.821-.336.937-.66.116-.324.116-.602.081-.66-.035-.058-.128-.093-.267-.162z" />
            </svg>
            <span>Order</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
