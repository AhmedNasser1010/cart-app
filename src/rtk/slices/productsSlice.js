import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
})

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export default productsSlice.reducer;