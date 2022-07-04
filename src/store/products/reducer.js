import {createReducer} from "@reduxjs/toolkit";
import {GetProducts} from "./actions";
import {productsFetch} from "./slice";

const initialState = {
    products: [],
    status: null
}

export const ProductsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase( GetProducts, (state, action) => {
            return ProductsReducer.getInitialState();
        })
        .addCase(productsFetch.fulfilled, (state, action) => {
            return ({products: action.payload.products.items, status: action.type})
        })
});