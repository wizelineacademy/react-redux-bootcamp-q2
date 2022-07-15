import { configureStore } from '@reduxjs/toolkit';
import productosReducer from './slices/productos';
import cartReducer from './slices/cart';

export const store = configureStore({
  reducer: {
    productos: productosReducer,
    cart: cartReducer,
  },
});
