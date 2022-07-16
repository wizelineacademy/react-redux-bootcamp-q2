import { createSlice } from "@reduxjs/toolkit";


export const usersLogin = createSlice({
  name: "auth",
  initialState: {
    user:[]
  },
  reducers:{
    signIn:(state, action) => {
      console.log(action.payload)
      state.user =action.payload.userName;
    },
    logOut: (state, action) => {
        state.user=""; 
    },
  }
});

export const { signIn, logOut } = usersLogin.actions;
export const selectMyCurrentUser = (state) => state.auth.user;

export default usersLogin.reducer;