import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const chatSlice = createSlice({
  name: "user",
  initialState: {
    // currentChat: Cookies.get("currentChat")
    //   ? JSON.parse(Cookies.get("currentChat"))
    //   : null,
    currentChat: null,

    currentUser: Cookies.get("currentUser")
      ? JSON.parse(Cookies.get("currentUser"))
      : null,

    fetchAgain: true,
  },
  reducers: {
    setCurrentChat: (state, action) => {
      // Cookies.set("currentChat", JSON.stringify(action.payload));
      state.currentChat = action.payload;
    },

    closeChat: (state) => {
      // Cookies.remove("currentChat");
      state.currentChat = null;
    },

    setCurrentUser: (state, action) => {
      Cookies.set("currentUser", JSON.stringify(action.payload));
      state.currentUser = action.payload;
    },

    setFetchAgain: (state) => {
      state.fetchAgain = !state.fetchAgain;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentChat, closeChat, setCurrentuser, setFetchAgain } =
  chatSlice.actions;

export default chatSlice.reducer;
