import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const createUser= createAsyncThunk("/createUser", async()=>{
//     const result = fetch('')
// })

export const getUsers = createAsyncThunk("/createUser", async () => {
    try{
  const result = await fetch(
    "https://65290c3955b137ddc83e1b81.mockapi.io/api/v1/crud"
  );
  console.log(result);
  const response = await result.json();
  return response;
}
catch(err){
    console.log(err);
}
});

const initialState = {
  users: [],
  loading: false,
  error: null,
};

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
        console.log(action, 'error');
      state.error= "error"
    });
  },
});

//selectors
export const getUserList = (state) => state.user;

//actions export

// root reducer export
export default usersSlice.reducer;
