import { createSlice } from "@reduxjs/toolkit";


const popupSlice = createSlice({
    name: "popup",
    initialState: {
        addTaskOpen: false
    },
    reducers: {
        setAddTaskOpen(state, action) {
            state.addTaskOpen = !state.addTaskOpen
        }
    }
})

export const { setAddTaskOpen } = popupSlice.actions;

export default popupSlice.reducer;