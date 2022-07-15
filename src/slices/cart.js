import { createSlice } from '@reduxjs/toolkit';
import { createOrder } from '../thunks/cart';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productos: {},
    isloading: false,
    order: null,
    message: '',
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.productos[action.payload]) {
        state.productos[action.payload] += 1;
      } else {
        state.productos[action.payload] = 1;
      }
    },
    setQuantity: (state, action) => {
      state.productos[action.payload.id] = action.payload.quantity;
    },
    removeProduct: (state, action) => {
      delete state.productos[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.isloading = false;
      state.order = action.payload.order;
      state.message = action.payload.message;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.order = null;
      state.isloading = false;
      state.message = action.payload;
    });
  },
});

export const { addToCart, setQuantity, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
