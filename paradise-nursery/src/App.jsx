import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

/**
 * LandingPage Component
 * 
 * The main landing page for Paradise Nursery.
 * Features:
 * - Company name display
 * - Background image
 * - Get Started button that navigates to products
 */
const LandingPage = () => {
  const navigate = useNavigate();

  /**
   * Handle Get Started button click
   * Navigates to the product listing page
   */
  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      {/* Overlay for better text visibility */}
      <div className="landing-overlay">
        {/* Logo and Title */}
        <div className="landing-header">
          <span className="landing-logo">🌿</span>
          <h1 className="landing-title">Paradise Nursery</h1>
        </div>

        {/* Tagline */}
        <p className="landing-tagline">
          Transform Your Space Into a Green Paradise
        </p>

        {/* Description */}
        <p className="landing-description">
          Discover our collection of beautiful indoor plants that bring life, 
          color, and fresh air to your home.
        </p>

        {/* Get Started Button */}
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>

        {/* Quick Links */}
        <div className="landing-links">
          <button 
            className="landing-link" 
            onClick={() => navigate('/about')}
          >
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * App Component
 * 
 * Main application component that handles routing.
 * Routes:
 * - / : Landing page
 * - /products : Product listing page
 * - /cart : Shopping cart page
 * - /about : About us page
 */
function App() {
  return (
    <div className="app">
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Product Listing Route */}
        <Route path="/products" element={<ProductList />} />
        
        {/* Shopping Cart Route */}
        <Route path="/cart" element={<CartItem />} />
        
        {/* About Us Route */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
