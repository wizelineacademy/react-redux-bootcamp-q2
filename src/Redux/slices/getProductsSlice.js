import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { update } from "./myCartSlice";
//import key from "./key"

const URL = "https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api";

export const getProducts = createAsyncThunk (
  "products/getProducts",

  async (_, { rejectWithValue}) => {
    try {
      const response = await fetch(`${URL}/products`, {
        method: "GET",
        headers: {
          'x-api-key': process.env.REACT_APP_API_KEY
        }
      });

      if(!response.ok){
        return rejectWithValue ("Error fetching Products")
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue (error)
    }

  });

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ post }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}/posts`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });

      if (!response.ok) {
        return rejectWithValue("Error creating posts");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ post }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${URL}/posts/${post.id}`, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });

      if (!response.ok) {
        return rejectWithValue("Error updating posts");
      }

      const data = await response.json();

      dispatch(update(data));

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.items;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
});

export const selectAllProducts = (state) => state.products.products;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;

export default productSlice.reducer;
