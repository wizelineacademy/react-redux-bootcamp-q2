import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, action) => {
			state.push(action.payload);
		},
		changeQuantity: (state, action) => {
			const item = state.find((item) => item.id === action.payload.id);
			const itemIndex = state.findIndex(
				(item) => item.id === action.payload.id
			);
			const newItem = { ...item, quantity: action.payload.quantity };
			state.splice(itemIndex, 1, newItem);
		},
	},
});

export const { add, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
