import {configureStore} from "@reduxjs/toolkit";
import {ProductsReducer} from "./products/reducer";
import {CartReducer} from "./cart/reducer";

export const store = configureStore({reducer: { products: ProductsReducer, cart: CartReducer}});
