import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://65290c3955b137ddc83e1b81.mockapi.io/api/v1/crud";

//Create Users in DB
export const createUser = createAsyncThunk("/createUser", async (userData) => {
  const result = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  const response = await result.json();
  console.log("post response-->>", response);
});

//

//Get users from DB
export const getUsers = createAsyncThunk("/getUsers", async () => {
  try {
    const result = await fetch(url);
    console.log(result);
    const response = await result.json();
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
