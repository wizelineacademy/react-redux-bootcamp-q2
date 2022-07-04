import {createAsyncThunk} from "@reduxjs/toolkit";
import {GetProducts} from "./actions";
import {getProducts} from "../../request/https";

export const productsFetch = createAsyncThunk(GetProducts().type, () => {
    return getProducts().then((res) => {
        return res;
    })
});