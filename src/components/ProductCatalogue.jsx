import { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import ProductCard from './ProductCard';
import './ProductCatalogue.css';

const ProductCatalogue = ({ activeCategory, onSelectCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;

      // Search filter
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="section catalogue-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Sweet Cravings Menu</span>
          <h2 className="section-title">Full Product Catalogue</h2>
          <p className="section-subtitle">
            Explore our complete menu of handcrafted shawarma, doughnut packs, luxury cakes, and golden snacks. Every item is available for direct WhatsApp order!
          </p>
        </div>

        {/* Filter Controls: Search and Category Pills */}
        <div className="catalogue-controls">
          {/* Search bar */}
          <div className="catalogue-search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by treat name (e.g. Shawarma, Bento, Parfait, Meat Pie...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="catalogue-search-input"
              aria-label="Search menu items"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="catalogue-category-tabs">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === 'all'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => onSelectCategory(cat.id)}
                >
                  <span className="tab-icon">{cat.icon}</span>
                  <span className="tab-name">{cat.name}</span>
                  <span className="tab-count">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results summary & status */}
        <div className="catalogue-results-meta">
          <p className="results-count">
            Showing <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'item' : 'items'}
            {searchQuery && <span> for &ldquo;{searchQuery}&rdquo;</span>}
          </p>
          <p className="catalogue-note">
            💡 <em>Need custom flavors, extra sauce, or box packages? Just mention it when ordering on WhatsApp!</em>
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="catalogue-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="catalogue-empty">
            <span className="empty-icon">🍰</span>
            <h3>No treats found matching your search</h3>
            <p>Try searching for another favorite bite or select &ldquo;All Cravings&rdquo; above.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalogue;
