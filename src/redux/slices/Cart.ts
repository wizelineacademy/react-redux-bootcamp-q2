import { createSlice } from '@reduxjs/toolkit';
import { I_Item } from '../../pages/types/Products';
import { productMock } from '../../components/__test__/Product.test';

export interface I_Storage extends I_Item {
  quantity: number;
}

interface CartState {
  data: I_Storage[];
}

const initialState: CartState = {
  data: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
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
    remove: (state, action) => {
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
    }
  }
});

export const selectCart = (state: any) => state.cart.data;

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
