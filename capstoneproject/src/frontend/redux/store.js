import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import loginReducer from "./loginSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    login: loginReducer,
  },
});
