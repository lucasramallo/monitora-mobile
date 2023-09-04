import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workloadList: [],
    weekWorkloadList: [1, 2, 5, 3, 5]
};

const workloadSlice = createSlice({
    name: 'workload',
    initialState,
    reducers: {
        addWorkload: (state, action) => {
            state.workloadList = action.payload
        },
        setweekWorkloadList: (state, action) => {
            state.weekWorkloadList = action.payload
        },
    }
});

export const { addWorkload, setweekWorkloadList } = workloadSlice.actions;
export default workloadSlice.reducer;
