import { createSlice } from "@reduxjs/toolkit";

export const socketSlice = createSlice({
  name: "socket",
  initialState: {
    socket: null,
    activeUsers: {},
    socketConnected: null,
  },

  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
    setSocketConected: (state, action) => {
      state.socket = action.payload;
    },
    setActiveUsers: (state, action) => {
      state.activeUsers = action.payload;
    },
  },
});

export const { setSocket, setActiveUsers } = socketSlice.actions;

export default socketSlice.reducer;
