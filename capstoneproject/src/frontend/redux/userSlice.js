// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     name: "john",
//     email: "john@email.com",
//   },
//   reducers: {
//     update: (state, action) => {
//       state.name = action.payload.name;
//       state.email = action.payload.email;
//     },
//     remove: (state) => {
//       state = null;
//     },
//     addHelloToName : (state, action) =>{
//       state.name = "Hello " + action.payload.name
//     }
//   },
// });

// export const { update, remove } = userSlice.actions;

// export default userSlice.reducer;

////////////////////////////////////////////////////////

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  isLoading: false,
    error: ''
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = '';
    },
    getUserFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getUserReset: (state) => {
      return {
        ...state,
        user: {
          user: {},
          isLoading: false,
            error: ''
        },
    };
    },
  },
});

export const { getUserPending, getUserSuccess, getUserFail, getUserReset } = userSlice.actions;

export default userSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const updateUser2 = createAsyncThunk("users/update", async (user) => {
//   const response = await axios.post(
//     "http://localhost:8800/api/users/1/update",
//     user
//   );
//   return response.data;
// });

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     userInfo: {
//       name: "john",
//       email: "john@email.com",
//     },
//     pending: null,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [updateUser2.pending]: (state) => {
//       state.pending = true;
//       state.error = false;
//     },
//     [updateUser2.fulfilled]: (state, action) => {
//       state.userInfo = action.payload;
//       state.pending = false;
//     },
//     [updateUser2.rejected]: (state) => {
//       state.pending = false;
//       state.error = true;
//     },
//   },
// });

// export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

// export default userSlice.reducer;