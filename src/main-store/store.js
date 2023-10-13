import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/redux/usersSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
