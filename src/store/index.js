import { configureStore } from "@reduxjs/toolkit";
import farmerReducer from "./reducer";
import authReducer from "./auth";
import landReducer from "./landStore";
import formReducer from "./gardenreducer"
const store = configureStore({
  reducer: {
    farmer: farmerReducer,
    auth: authReducer,
    land: landReducer,
    user: formReducer
  },
});

export default store;
