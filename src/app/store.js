import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
// import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
