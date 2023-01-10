import { createSlice } from "@reduxjs/toolkit";

export const FarmerDetails = createSlice({
  name:"farmer",
  initialState:{
    farmer: [],
    farmer_id: [],
    editData: {},
  },
  reducers: {
    create_farmer(state,action){
      state.farmer = action.payload;
    },
    create_id(state,action){
      state.farmer_id = action.payload;
    },
    edit_data(state,action){
      state.editData = action.payload;
    },
  }   
 });

 export const farmeractions =  FarmerDetails.actions;

 export default FarmerDetails;