import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../redux/CartSlice';
import './CartItem.css';

/**
 * CartItem Component
 * 
 * Displays the shopping cart with all added items.
 * Features:
 * - Item list with images, names, prices, and quantities
 * - Quantity controls (increase/decrease)
 * - Remove item functionality
 * - Total cart amount calculation
 * - Checkout and Continue Shopping buttons
 */
const CartItem = () => {
  // Redux hooks
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Handle increasing item quantity
   * @param {number} id - Item ID
   */
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  /**
   * Handle decreasing item quantity
   * @param {number} id - Item ID
   */
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  /**
   * Handle removing item from cart
   * @param {number} id - Item ID
   */
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  /**
   * Handle checkout button click
   * Shows coming soon alert
   */
  const handleCheckout = () => {
    alert('Coming Soon! Checkout feature will be available shortly.');
  };

  /**
   * Handle continue shopping button click
   * Navigates back to product listing
   */
  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="cart-page">
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
            <Link to="/cart" className="nav-link cart-link active">
              <span className="cart-icon">🛒</span>
              {/* Display cart count badge */}
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Cart Container */}
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>

        {/* Empty Cart Message */}
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <span className="empty-cart-icon">🛒</span>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any plants yet!</p>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  {/* Item Image */}
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  {/* Item Details */}
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">Unit Price: ${item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn decrease"
                      onClick={() => handleDecrease(item.id)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button 
                      className="quantity-btn increase"
                      onClick={() => handleIncrease(item.id)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="cart-item-total">
                    <p className="total-label">Total</p>
                    <p className="total-value">${item.totalPrice.toFixed(2)}</p>
                  </div>

                  {/* Delete Button */}
                  <button 
                    className="delete-btn"
                    onClick={() => handleRemove(item.id)}
                    aria-label="Remove item"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary">
              <div className="summary-row">
                <span>Total Items:</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="summary-row total">
                <span>Total Amount:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>

              {/* Action Buttons */}
              <div className="cart-actions">
                <button 
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
                <button 
                  className="continue-shopping-btn"
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;
