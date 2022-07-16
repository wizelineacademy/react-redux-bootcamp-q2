import { configureStore } from "@reduxjs/toolkit";
import myCartReducer from "./slices/myCartSlice";
import productsReducer from "./slices/getProductsSlice";
import loginReducer from "./slices/usersLogin";


export const store = configureStore({
  reducer:{
    myCart: myCartReducer,
    products: productsReducer,
    auth: loginReducer,
  }
});