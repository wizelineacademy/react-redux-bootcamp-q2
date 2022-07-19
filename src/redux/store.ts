import { configureStore } from '@reduxjs/toolkit';
import products from './slices/Products';
import cart from './slices/Cart';

export const reducer = { products, cart };

export default configureStore({
  reducer
});
