import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    profilePicture: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logar: (state, action) => {
            state.currentUser = action.payload 
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload 
        }
    }
});

export const { logar, setProfilePicture } = userSlice.actions;
export default userSlice.reducer;
