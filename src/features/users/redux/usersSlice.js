import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Delete, Post, Put, get } from "../../../apiService/apiService";

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
    return response;
  } catch (err) {
    console.error(err);
  }
});
//Update users in DB
export const updateUser= createAsyncThunk("/createUser", async(data)=>{
  console.log("user--", data);
  const response = Put(data)
  return response
})

//Delete users in DB
export const deleteUser = createAsyncThunk(
  "/deleteUser",
  async (userId) => {
    // console.log("thunkAPI", thunkAPI);
    const response = Delete(userId);
    return response;
  }
);

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
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users  = state.users.push(action.payload)
    });
    builder.addCase(createUser.rejected, (state) => {
      state.error("error");
    });

    //GET User case
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.error = "error";
    });

    //Delete User case
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.error = "error";
    });
    //Update User




    
  },
});

//selectors
export const getUserList = (state) => state.user;

//Reducer actions export

// Root reducer export
export default usersSlice.reducer;
