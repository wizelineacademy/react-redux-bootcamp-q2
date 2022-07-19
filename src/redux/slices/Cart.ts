import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '../../api/config';
import { I_Item } from '../../pages/types/Products';

export interface I_Storage extends I_Item {
  quantity: number;
}

interface I_Order {
  number: number;
  message: string;
}

export interface I_Details {
  details?: I_Order;
  error?: string;
  loading: boolean;
}

interface I_CartState {
  data: I_Storage[];
  order: I_Details;
}

const initialState: I_CartState = {
  data: [],
  order: {
    loading: false
  }
};

export const postOrder = createAsyncThunk(
  'cart/postOrder',
  async (items: I_Item[], { rejectWithValue }) => {
    try {
      const response = await axiosClient.post('/orders');

      if (response.status !== 200) {
        return rejectWithValue(new Error('error making the order'));
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOne: (state, action) => {
      const { payload } = action;
      let hasItem = false;
      state.data.filter(item => {
        if (item.id === payload.id) {
          item.quantity++;
          hasItem = true;
        }
        return true;
      });

      if (!hasItem) {
        state.data.push({ ...payload, quantity: 1 });
      }
    },
    removeOne: (state, action) => {
      const { payload } = action;
      state.data = state.data.filter(item => {
        if (item.id === payload.id) {
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            return false;
          }
        }
        return true;
      });
    },
    removeAll: (state, action) => {
      const { payload } = action;
      state.data = state.data.filter(item => item.id !== payload.id);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postOrder.pending, state => {
        state.order.loading = true;
        delete state.order.error;
      })
      .addCase(postOrder.fulfilled, (state, { payload }: { payload: any }) => {
        debugger;
        state.order.loading = false;
        state.order.details = payload;
        state.data = [];
        delete state.order.error;
      })
      .addCase(postOrder.rejected, (state, { payload }: { payload: any }) => {
        state.order.loading = false;
        state.order.error = payload?.message;
      });
  }
});

export const selectCart = (state: any) => state.cart.data;
export const selectOrder = (state: any) => state.cart.order;

export const { addOne, removeOne, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
