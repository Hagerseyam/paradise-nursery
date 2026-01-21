import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configure the Redux store with the cart reducer
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Cart slice manages all shopping cart state
  },
});

export default store;
