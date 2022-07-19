import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { I_Data } from '../../pages/types/Products';
import { axiosClient } from '../../api/config';

interface I_ProductState {
  data?: I_Data;
  loading: boolean;
  error?: any;
}

// First, create the thunk
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get<I_Data>('/products');

      if (response.status !== 200) {
        return rejectWithValue('error fetching products');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: I_ProductState = {
  loading: false
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action: any) => {
        const { payload } = action;
        state.loading = false;
        state.data = payload?.items;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });
  }
});

export const selectAllProducts = (state: any) => state.products.data;
export const selectProductsLoading = (state: any) => state.products.loading;
export const selectProductsError = (state: any) => state.products.error;

export default productsSlice.reducer;
