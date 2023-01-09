// import { CREATE_FARMER, DISTRICT, PANCHAYAT, STATE, UNION, VILLAGE } from './action';
import { createSlice } from "@reduxjs/toolkit";

export const FarmerDetails = createSlice({
  name:"farmer",
  initialState:{
    farmer: [],
    farmer_id: [],
  },
  reducers: {
    create_farmer(state,action){
      state.farmer = action.payload;
    },
    create_id(state,action){
      state.farmer_id = action.payload;
    },
  }   
 });

 export const farmeractions =  FarmerDetails.actions;
 export default FarmerDetails;

//  function authReducer(state = initialAuthState, action) {
//    switch (action.type) {
//     case CREATE_FARMER:
//       return { 
//         ...state,
//         farmer: [...state.farmer, action.payload]
//     }
//     case STATE:
//       return { 
//         ...state,
//         state: action.payload,
//     }
//     case DISTRICT:
//       return { 
//         ...state,
//         district: action.payload,
//     }
//     case UNION:
//       return { 
//         ...state,
//         union: action.payload,
//     }
//     case PANCHAYAT:
//       return { 
//         ...state,
//         panchayat: action.payload,
//     }
//     case VILLAGE:
//       return { 
//         ...state,
//         village: action.payload,
//     }
//      default:
//        return state;
//    }
//  }

//  export default authReducer;