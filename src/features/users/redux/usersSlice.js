import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post, get } from "../../../apiService/apiService";

//create async actions

//Create Users in DB
export const createUser = createAsyncThunk("/createUser", async (userData) => {
  try {
    const response = Post(userData);
    return response;
  } catch (error) {
    console.error(error);
  }
});

//Get users from DB
export const getUsers = createAsyncThunk("/getUsers", async () => {
  try {
    const response = get();
    console.log("-->>", response);
    return response;
  } catch (err) {
    console.log(err);
  }
});
//Update users in DB

//Delete users in DB

//Initial State
const initialState = {
  users: [],
  loading: false,
  error: null,
};

//Create SLice

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //CREATE users case
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.error("error");
    });

    //GET users case
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {  
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      console.log(action, "error");
      state.error = "error";
    });
  },
});

//selectors
export const getUserList = (state) => state.user;

//Reducer actions export

// Root reducer export
export default usersSlice.reducer;
