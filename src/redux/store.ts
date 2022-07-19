import { configureStore } from '@reduxjs/toolkit';
import products from './slices/Products';
import cart from './slices/Cart';
import user from './slices/User';

export const reducer = { products, cart, user };

const store = configureStore({
  reducer
});

export type AppDispatch = typeof store.dispatch;

export default store;
