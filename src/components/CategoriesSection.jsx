import { CATEGORIES } from '../data/products';
import './CategoriesSection.css';

const CategoriesSection = ({ onSelectCategory }) => {
  // Exclude 'all' for the visual category cards showcase
  const categoryCards = CATEGORIES.filter((cat) => cat.id !== 'all');

  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="section categories-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Delicious Selections</span>
          <h2 className="section-title">Explore by Category</h2>
          <p className="section-subtitle">
            Whether you are longing for a warm, savory shawarma, a sweet glazed doughnut pack, an artistic celebration cake, or crispy party bites — we have it all prepared fresh!
          </p>
        </div>

        <div className="categories-grid">
          {categoryCards.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCategoryClick(category.id);
                }
              }}
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                  loading="lazy"
                />
                <div className="category-image-overlay"></div>
                <span className="category-item-count">{category.itemCount}</span>
              </div>

              <div className="category-content">
                <div className="category-header-row">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-name">{category.name}</h3>
                </div>
                <p className="category-description">{category.description}</p>
                <button
                  type="button"
                  className="category-link-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategoryClick(category.id);
                  }}
                >
                  <span>Browse {category.name}</span>
                  <span className="cat-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
