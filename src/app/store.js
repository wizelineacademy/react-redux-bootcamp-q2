import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../pages/Login/LoginSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
  }
})