import { createSlice } from '@reduxjs/toolkit';
import { I_Item } from '../../pages/types/Products';

export interface I_Storage extends I_Item {
  quantity: number;
}

interface I_CartState {
  data: I_Storage[];
}

const initialState: I_CartState = {
  data: []
};

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
  }
});

export const selectCart = (state: any) => state.cart.data;

export const { addOne, removeOne, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
