import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import terms from "./termSlice";

export const store = configureStore({
  reducer: {
    user,
    terms,
  },
});
