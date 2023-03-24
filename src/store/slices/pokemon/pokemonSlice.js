import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  data: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setData: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.page = action.payload.page;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoading, setData } = pokemonSlice.actions;
