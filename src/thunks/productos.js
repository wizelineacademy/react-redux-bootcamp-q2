import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/ecommerce';

export const getProductos = createAsyncThunk(
  'productos/getProductos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getProducts();
      return response.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProducto = createAsyncThunk(
  'productos/getProducto',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getProduct(id);
      return response.items[0];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
