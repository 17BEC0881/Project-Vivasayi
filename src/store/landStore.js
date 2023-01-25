import { createSlice } from "@reduxjs/toolkit";

export const landSlice = createSlice({
  name: "land",
  initialState: {
    landData: [],
    leaseLands: [],
    rentalLands: [],
    selectedLand: {},
    delete: [],
  },
  reducers: {
    createLand(state, action) {
      state.landData = [...state.landData, action.payload];
    },
    updateLeaseLands(state, action) {
      state.leaseLands = action.payload;
    },
    // rentalUpdate(state, action) {
    //   state.rentalLands = [...state, action.payload];
    // },
    selectedRentalLand(state, action) {
      state.selectedLand = action.payload;
    },
    deleteLand(state, action) {
      state.landData = state.landData.filter(
        (item) => action.payload !== item.landId
      );
    },
  },
});

export const landActions = landSlice.actions;

export default landSlice.reducer;
