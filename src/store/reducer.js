import { createSlice } from "@reduxjs/toolkit";

export const FarmerDetails = createSlice({
  name: "farmer",
  initialState: {
    farmer: [],
    farmer_id: [],
    editData: {},
    editMachineData: {},
    create: true,
  },
  reducers: {
    create_farmer(state, action) {
      state.farmer = action.payload;
    },
    create_id(state, action) {
      state.farmer_id = action.payload;
    },
    edit_data(state, action) {
      state.editData = action.payload;
      state.create = false;
    },
    edit_machine_data(state, action) {
      state.editMachineData = action.payload;
      state.create = false;
    },
  },
});

export const farmerActions = FarmerDetails.actions;

export default FarmerDetails.reducer;
