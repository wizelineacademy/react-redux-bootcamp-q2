import { createAsyncThunk } from '@reduxjs/toolkit';
import { postOrder } from '../api/ecommerce';

export const createOrder = createAsyncThunk(
  'cart/createOrder',
  async (_, { rejectWithValue }) => {
    try {
      const response = await postOrder();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
