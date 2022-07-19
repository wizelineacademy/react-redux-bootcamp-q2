import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loginApi from '../../utils/loginApi';

interface I_User {
  id: string;
  username: string;
}

interface I_Login {
  password: string;
  username: string;
}

interface I_UserState {
  data?: I_User;
  loading: boolean;
  error?: any;
}

const initialState: I_UserState = {
  loading: false
};

export const getUser = createAsyncThunk(
  'user/getUser',
  async (data: any, { rejectWithValue }: any) => {
    const { username, password } = data;
    try {
      const response = await loginApi(username, password);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { payload } = action;
      state.data = payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.loading = true;
        delete state.error;
      })
      .addCase(getUser.fulfilled, (state, { payload }: { payload: I_User }) => {
        state.loading = false;
        state.data = payload;
        delete state.error;
      })
      .addCase(getUser.rejected, (state, { payload }: { payload: any }) => {
        state.loading = false;
        state.error = payload?.message;
      });
  }
});

export const selectUser = (state: any) => state.user;

export default userSlice.reducer;
