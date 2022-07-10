import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/login";
import cartReducer from "./slices/cart";

export const store = configureStore({
	reducer: {
		login: loginReducer,
		cart: cartReducer,
	},
});
