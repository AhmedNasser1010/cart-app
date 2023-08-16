import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((product) => product.id === action.payload.id);

      if(findProduct) {
        findProduct.quantity += 1;
      } else {
        state.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      const findProduct = state.find((product) => product.id === action.payload.id);

      if(action.payload.quantity > 1) {
        findProduct.quantity -= 1;
      } else {
        return state.filter((product) => product.id !== action.payload.id);
      }
    },
    clearCart: (state, action) => {
      return [];
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;