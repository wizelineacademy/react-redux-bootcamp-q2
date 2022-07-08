import {configureStore} from "@reduxjs/toolkit";
import {ProductsReducer} from "./products/reducer";

export const store = configureStore({reducer: { products: ProductsReducer}});
