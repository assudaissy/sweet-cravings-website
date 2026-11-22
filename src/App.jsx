import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoriesSection from './components/CategoriesSection';
import FeaturedProducts from './components/FeaturedProducts';
import ProductCatalogue from './components/ProductCatalogue';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="sweet-cravings-app">
      {/* 1. Navigation bar with logo and links */}
      <Navbar />

      <main id="main-content">
        {/* 2. Hero section with headline, food imagery, and WhatsApp CTA */}
        <Hero />

        {/* 3. Product categories with attractive images */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* 4. Featured products */}
        <FeaturedProducts />

        {/* Product Catalogue with full menu and category/search filters */}
        <ProductCatalogue
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 5. About Sweet Cravings section */}
        <AboutSection />

        {/* 6. Contact section with phone, Instagram, and location */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Persistent Floating WhatsApp Order Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
