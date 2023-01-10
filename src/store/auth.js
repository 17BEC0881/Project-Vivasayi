import { createSlice } from "@reduxjs/toolkit";


const initialAuthState = {
    isAuthenticated: false,
    user : []
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state,action) {
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        },
        employee(state,action){
            state.user = action.payload;
        }
        
    }
})
export const authActions = authSlice.actions;

export default authSlice.reducer;
