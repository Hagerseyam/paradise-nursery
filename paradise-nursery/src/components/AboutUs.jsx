import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './AboutUs.css';

/**
 * AboutUs Component
 * 
 * Displays information about Paradise Nursery company.
 * Includes company mission, values, and a brief history.
 */
const AboutUs = () => {
  // Get total quantity from Redux store for cart icon
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="about-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="nav-logo">🌿</span>
          <span className="nav-title">Paradise Nursery</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">Plants</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link cart-link">
              <span className="cart-icon">🛒</span>
              {/* Display cart count badge */}
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* About Us Content */}
      <div className="about-container">
        <h1 className="about-title">About Paradise Nursery</h1>
        
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Welcome to Paradise Nursery, your premier destination for beautiful indoor 
            houseplants. Founded with a passion for bringing nature indoors, we have been 
            helping plant enthusiasts transform their living spaces into lush, green 
            sanctuaries since 2010.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Do</h2>
          <p>
            At Paradise Nursery, we specialize in sourcing and selling the finest selection 
            of indoor houseplants. From low-maintenance succulents to exotic tropical plants, 
            we offer a diverse range of greenery to suit every lifestyle and skill level. 
            Each plant is carefully nurtured and inspected to ensure it arrives at your 
            doorstep healthy and thriving.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make indoor gardening accessible and enjoyable for everyone. 
            We believe that plants have the power to improve well-being, purify air, and 
            create a sense of calm in any environment. That's why we're committed to 
            providing not just plants, but also the knowledge and support you need to 
            help them flourish.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="about-list">
            <li>🌱 Hand-selected, premium quality plants</li>
            <li>🚚 Careful packaging and fast delivery</li>
            <li>💚 Expert plant care advice and support</li>
            <li>🔄 Satisfaction guarantee on all purchases</li>
            <li>🌍 Eco-friendly and sustainable practices</li>
          </ul>
        </section>

        <div className="about-cta">
          <Link to="/products" className="browse-btn">
            Browse Our Plants
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
