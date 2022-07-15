import { createSlice } from '@reduxjs/toolkit';
import { getProducto, getProductos } from '../thunks/productos';

const productosSlice = createSlice({
  name: 'productos',
  initialState: {
    items: null,
    hasLoaded: false,
    isLoading: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProductos.pending, (state, action) => {
      state.hasError = false;
      state.hasLoaded = false;
      state.isLoading = true;
    });
    builder.addCase(getProductos.fulfilled, (state, action) => {
      state.hasError = false;
      state.items = action.payload;
      state.isLoading = false;
      state.hasLoaded = true;
    });
    builder.addCase(getProductos.rejected, (state, action) => {
      state.items = null;
      state.isLoading = false;
      state.hasLoaded = false;
      state.hasError = action.payload;
    });
    builder.addCase(getProducto.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
  },
});

export default productosSlice.reducer;
