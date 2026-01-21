import { createSlice } from '@reduxjs/toolkit';

/**
 * CartSlice - Redux slice for managing shopping cart state
 * 
 * State structure:
 * - items: Array of cart items with id, name, image, price, quantity
 * - totalQuantity: Total number of items in cart
 * - totalAmount: Total price of all items in cart
 */

const initialState = {
  items: [], // Array to store cart items
  totalQuantity: 0, // Total count of all items
  totalAmount: 0, // Total price of all items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * Add item to cart
     * If item exists, increase quantity; otherwise add new item
     */
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Item already in cart - increase quantity
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        // New item - add to cart
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      // Update totals
      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },

    /**
     * Remove item completely from cart
     */
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Update totals before removing
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        // Remove item from array
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    /**
     * Increase quantity of a specific item by 1
     */
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        state.totalQuantity += 1;
        state.totalAmount += existingItem.price;
      }
    },

    /**
     * Decrease quantity of a specific item by 1
     * If quantity becomes 0, remove the item
     */
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          // Remove item if quantity would become 0
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          // Decrease quantity
          existingItem.quantity -= 1;
          existingItem.totalPrice = existingItem.quantity * existingItem.price;
        }
        state.totalQuantity -= 1;
        state.totalAmount -= existingItem.price;
      }
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;

// Export reducer for store configuration
export default cartSlice.reducer;
