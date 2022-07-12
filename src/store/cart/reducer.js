import {createReducer} from "@reduxjs/toolkit";
import {addToCart, ChangeQuantity} from "./actions";
import {addProductToCart, changeQuantity} from "./util.reducer";

const initialState = {
    cart: []
}

export const CartReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addToCart, (state, {payload}) => {
            return ({cart: addProductToCart(state.cart, payload)});
        })
        .addCase(ChangeQuantity,(state, {payload}) => {
            return ({cart: changeQuantity(state.cart, payload.item, payload.number)});
        })
});