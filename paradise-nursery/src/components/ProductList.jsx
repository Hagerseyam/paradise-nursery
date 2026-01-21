import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

/**
 * ProductList Component
 * 
 * Displays all available plants organized by categories.
 * Each plant has an image, name, price, and Add to Cart button.
 * The Add to Cart button is disabled once the item is added.
 */

// Product data organized by categories
const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 1, name: 'Snake Plant', price: 25, image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg' },
      { id: 2, name: 'Spider Plant', price: 18, image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg' },
      { id: 3, name: 'Peace Lily', price: 30, image: 'https://cdn.pixabay.com/photo/2019/06/28/09/41/peace-lily-4304221_1280.jpg' },
      { id: 4, name: 'Boston Fern', price: 22, image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/fern-5114339_1280.jpg' },
      { id: 5, name: 'Rubber Plant', price: 35, image: 'https://cdn.pixabay.com/photo/2020/02/01/01/22/rubber-plant-4809288_1280.jpg' },
      { id: 6, name: 'Aloe Vera', price: 20, image: 'https://cdn.pixabay.com/photo/2018/04/29/11/54/aloe-3359479_1280.jpg' },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { id: 7, name: 'Lavender', price: 28, image: 'https://cdn.pixabay.com/photo/2020/05/03/13/09/lavender-5125259_1280.jpg' },
      { id: 8, name: 'Jasmine', price: 32, image: 'https://cdn.pixabay.com/photo/2015/07/29/00/10/jasmine-865774_1280.jpg' },
      { id: 9, name: 'Rosemary', price: 15, image: 'https://cdn.pixabay.com/photo/2019/10/11/16/48/rosemary-4542233_1280.jpg' },
      { id: 10, name: 'Mint', price: 12, image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/mint-2496344_1280.jpg' },
      { id: 11, name: 'Eucalyptus', price: 38, image: 'https://cdn.pixabay.com/photo/2020/03/06/08/00/eucalyptus-4906245_1280.jpg' },
      { id: 12, name: 'Lemon Balm', price: 16, image: 'https://cdn.pixabay.com/photo/2019/09/15/22/23/lemon-balm-4479131_1280.jpg' },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { id: 13, name: 'Pothos', price: 15, image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg' },
      { id: 14, name: 'ZZ Plant', price: 28, image: 'https://cdn.pixabay.com/photo/2019/11/07/20/48/zamioculcas-4609689_1280.jpg' },
      { id: 15, name: 'Jade Plant', price: 22, image: 'https://cdn.pixabay.com/photo/2013/01/14/13/51/jade-plant-74825_1280.jpg' },
      { id: 16, name: 'Cast Iron Plant', price: 26, image: 'https://cdn.pixabay.com/photo/2017/02/16/19/47/houseplant-2072337_1280.jpg' },
      { id: 17, name: 'Dracaena', price: 30, image: 'https://cdn.pixabay.com/photo/2020/06/25/08/54/dracaena-5339219_1280.jpg' },
      { id: 18, name: 'Haworthia', price: 18, image: 'https://cdn.pixabay.com/photo/2020/02/20/09/19/cactus-4864378_1280.jpg' },
    ],
  },
];

const ProductList = () => {
  // Redux hooks for state and dispatch
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  /**
   * Check if a plant is already in the cart
   * @param {number} plantId - The ID of the plant to check
   * @returns {boolean} - True if plant is in cart
   */
  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  /**
   * Handle adding a plant to the cart
   * @param {object} plant - The plant object to add
   */
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-page">
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
            <Link to="/products" className="nav-link active">Plants</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link cart-link">
              <span className="cart-icon">🛒</span>
              {/* Display cart count badge dynamically */}
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Header */}
      <header className="product-header">
        <h1>Our Plants Collection</h1>
        <p>Discover the perfect plants for your home</p>
      </header>

      {/* Products Container */}
      <div className="products-container">
        {plantsData.map((category) => (
          <section key={category.category} className="category-section">
            {/* Category Title */}
            <h2 className="category-title">{category.category}</h2>
            
            {/* Plants Grid */}
            <div className="plants-grid">
              {category.plants.map((plant) => (
                <div key={plant.id} className="plant-card">
                  {/* Plant Image */}
                  <div className="plant-image-container">
                    <img 
                      src={plant.image} 
                      alt={plant.name} 
                      className="plant-image"
                    />
                  </div>
                  
                  {/* Plant Details */}
                  <div className="plant-details">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-price">${plant.price}</p>
                    
                    {/* Add to Cart Button */}
                    <button
                      className={`add-to-cart-btn ${isInCart(plant.id) ? 'added' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
