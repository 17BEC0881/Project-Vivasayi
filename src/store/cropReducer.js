import { createSlice } from "@reduxjs/toolkit";

export const cropSlice = createSlice({
  name: "crop",
  initialState: {
    addCrop: [],
    cropData: [],
    cropEditData: [],
  },
  reducers: {
    add_crop(state, action){
         state.addCrop = action.payload
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