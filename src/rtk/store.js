import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice.js';
import cartSlice from "./slices/cartSlice.js";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice
  }
});