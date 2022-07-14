import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: '',
    isLogged: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.username;
      state.isLogged = true;
    }
  },
});

export const {setUser} = loginSlice.actions;
export default loginSlice.reducer;
