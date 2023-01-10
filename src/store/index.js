import { configureStore } from "@reduxjs/toolkit";
import FarmerDetails from "./reducer";
import authReducer from "./auth";

const store = configureStore({
  reducer: { farmer: FarmerDetails, auth: authReducer },
});

export default store;
