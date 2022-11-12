import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = process.env.NEXT_PUBLIC_SPRINGBOOT_API_URL

// export const updateUser2 = createAsyncThunk("users/update", async (user) => {
//   const response = await axios.post(
//     "http://localhost:8800/api/users/1/update",
//     user
//   );
//   return response.data;
// });
const initialState = {
  isLoading: false,
    isAuth: false,
    error: ''
}
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state)=>{
        state.isLoading = true
    },
    loginSuccess: (state)=>{
        state.isLoading = false
        state.isAuth = true
        state.error = ''
    },
    loginFail: (state, action)=>{
        state.isLoading = false
        state.error = action.payload
    }
  }
});

export const { loginPending, loginSuccess, loginFail } = loginSlice.actions;

export default loginSlice.reducer;