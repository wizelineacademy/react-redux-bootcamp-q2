import {createAction} from "@reduxjs/toolkit";

export const GetProducts = createAction('[Products URL] Get Products');

export const GetProductsSuccess = createAction('[API] Get Products/fulfilled', (products) => products);