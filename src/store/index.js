import { configureStore } from "@reduxjs/toolkit";
import farmerReducer from "./reducer";
import authReducer from "./auth";
import landReducer from "./landStore";
import cropDetailsReducer from "./cropDetailsReducer";
import labourWorkReducer from "./labourWorkReducer";
import formReducer from "./gardenreducer"
const store = configureStore({
  reducer: {
    farmer: farmerReducer,
    auth: authReducer,
    land: landReducer,
    crop: cropDetailsReducer,
    labour: labourWorkReducer,
    
    

  },
});

export default store;
