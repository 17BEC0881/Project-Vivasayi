import { configureStore } from "@reduxjs/toolkit";
import farmerReducer from "./reducer";
import authReducer from "./auth";
import landReducer from "./landStore";
import cropReducer from "./cropReducer";
import labourReducer from "./labourReducer";



const store = configureStore({
  reducer: {
    farmer: farmerReducer,
    auth: authReducer,
    land: landReducer,
    crop: cropReducer,
    labour: labourReducer,
   
  },
});

export default store;
