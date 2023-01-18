import { configureStore } from "@reduxjs/toolkit";
import farmerReducer from "./reducer";
import authReducer from "./auth";
import landReducer from "./landStore";

const store = configureStore({
  reducer: {
    farmer: farmerReducer,
    auth: authReducer,
    land: landReducer,
  },
});

export default store;
