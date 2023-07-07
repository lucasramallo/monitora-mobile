import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logar: (state, action) => {
            state.currentUser = action.payload 
        }
    }
});

export const { logar } = userSlice.actions;
export default userSlice.reducer;
