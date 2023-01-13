import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  user: [],
  role: false,
  isLogin: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    employee(state, action) {
      state.user = action.payload;
    },
    admin(state) {
      state.role = true;
    },
    staff(state) {
      state.role = false;
    },
    farmerLogin(state) {
      state.isLogin = true;
    },
    farmerLogout(state) {
      state.isLogin = false;
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
