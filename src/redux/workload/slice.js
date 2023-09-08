import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workloadList: [30, 60, 240],
    weekWorkloadList: [60, 120, 300, 180, 300]
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
