import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/redux/usersSlice";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunkMiddleware],
});
