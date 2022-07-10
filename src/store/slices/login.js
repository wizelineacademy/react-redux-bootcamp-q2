import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		login: (state) => {
			state.value = true;
		},
	},
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
