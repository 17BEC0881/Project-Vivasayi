import { configureStore } from "@reduxjs/toolkit";
import farmerReducer from "./reducer";
import authReducer from "./auth";
import landReducer from "./landStore";
import formReducer from "./gardenreducer";
import cropDetailsReducer from "./cropDetailsReducer";
import labourWorkReducer from "./labourWorkReducer";
const store = configureStore({
  reducer: {
    farmer: farmerReducer,
    auth: authReducer,
    land: landReducer,
    user: formReducer,
    crop: cropDetailsReducer,
    labour: labourWorkReducer,
  },
});

export default store;
