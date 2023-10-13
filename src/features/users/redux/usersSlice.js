import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [],
    loading: false,
    error: null,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers:{}
})


//selectors


//actions export 

// root reducer export 
export default usersSlice.reducer