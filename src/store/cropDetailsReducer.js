import { createSlice } from "@reduxjs/toolkit";

export const cropSlice = createSlice({
  name: "crop",
  initialState: {
    addCrop: [],
    cropData: [],
    cropEditData: [],
    farmerId: []
  },
  reducers: {
   
add_crop(state, action){
  state.addCrop =[...state.addCrop, action.payload]
},
edit_crop(state, action){
  state.addCrop=action.payload
},

get_farmer(state, action){
  state.farmerId = action.payload
},
    create_crop(state, action) {
      state.cropData = action.payload
    },
    crop_edit_data(state, action){
      state.cropEditData = action.payload;
    }
  },
});

export const cropActions = cropSlice.actions;

export default cropSlice.reducer;

