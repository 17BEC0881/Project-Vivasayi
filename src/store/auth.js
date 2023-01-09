import { createSlice } from "@reduxjs/toolkit";


const initialAuthState = {
    isAuthenticated: false,
    user: {}
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state,action) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state){
            state.isAuthenticated = false;
        }
        
    }
})
export const authActions = authSlice.actions;

export default authSlice.reducer;