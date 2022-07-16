import { createSlice } from "@reduxjs/toolkit";


export const myCartSlice = createSlice({
  name: "myCart",
  initialState: {
    products:[]
  },
  reducers:{
    add:(state, action) => {
      state.products.push({...action.payload, quantity: 1});
    },
    remove: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.productId);
      state.products[index] = {...state.products[index], quantity: action.payload.quantity }
    },
    update: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    }
    },

});

export const { add, remove, update, updateProduct } = myCartSlice.actions;
export const selectMyProducts = (state) => state.myCart.products;
export const selectProductsLoading = (state) => state.myCart.products;

export default myCartSlice.reducer;