import { configureStore } from '@reduxjs/toolkit';
import products from './slices/Products';
import cart from './slices/Cart';

export default configureStore({
  reducer: { products, cart }
});
