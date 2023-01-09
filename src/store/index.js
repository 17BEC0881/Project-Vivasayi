import { configureStore } from '@reduxjs/toolkit';
import FarmerDetails from './reducer'

const store = configureStore({
  reducer: FarmerDetails,
});

export default store;