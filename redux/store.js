import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import user from "./userSlice";
import terms from "./termSlice";
import chat from "./ChatSlice";
import socket from "./socketSlice";

export const store = configureStore({
  reducer: {
    user,
    terms,
    chat,
    socket,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
