import { createSlice } from "@reduxjs/toolkit";


export const userSlice=createSlice({
  name:"form",
  initialState:{
    garden:[],
    livestck:[],
  },
  reducers:{
    Gardenn:(state,action)=>{
      state.garden=action.payload;
    },
    livestckk:(state,action)=>{
      state.livestck=action.payload;
    }
  }
})

export let {Gardenn,livestckk}=userSlice.actions;
export default userSlice.reducer;