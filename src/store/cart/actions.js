import {createAction} from "@reduxjs/toolkit";

export const addToCart = createAction('[Product UI] Add Product to cart');

export const addToCartSuccess = createAction('[Middleware] Add Product to cart success', (product) => product);

export const removeToCart = createAction('[Cart UI] Remove Product to cart', (id) => id);

export const ChangeQuantity = createAction('[Cart UI Product Details] Change product quantity');