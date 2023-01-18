import { createSlice } from "@reduxjs/toolkit";

export const landSlice = createSlice({
  name: "land",
  initialState: {
    landData: [],
  },
  reducers: {
    createLand(state, action) {
      state.landData = action.payload;
    },
  },
});

export const landActions = landSlice.actions;

export default landSlice.reducer;
