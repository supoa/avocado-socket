import { createSlice } from "@reduxjs/toolkit";

export const termSlice = createSlice({
  name: "terms",
  initialState: {
    terms: {},
  },

  reducers: {
    setTerms: (state, action) => {
      state.terms = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTerms } = termSlice.actions;

export default termSlice.reducer;
