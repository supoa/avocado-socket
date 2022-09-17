import { createSlice } from "@reduxjs/toolkit";

export const termSlice = createSlice({
  name: "terms",
  initialState: {
    terms: {},
    background: {},
    paymentMethod: {},
    gallery: [],
  },

  reducers: {
    setTerms: (state, action) => {
      state.terms = action.payload;
    },
    setBackground: (state, action) => {
      state.background = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.background = action.payload;
    },

    setGallery: (state, action) => {
      state.gallery = action.payload;
    },

    setGalleryImage: (state, action) => {
      state.gallery = [action.payload, ...state.gallery];
    },
  },
});

export const {
  setTerms,
  setBackground,
  setPaymentMethod,
  setGallery,
  setGalleryImage,
} = termSlice.actions;

export default termSlice.reducer;
