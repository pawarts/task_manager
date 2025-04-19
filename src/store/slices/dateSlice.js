import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import "dayjs/locale/uk";

dayjs.locale("uk");

const dateSlice = createSlice({
     name: "date",
     initialState: {
          mondayDate: dayjs().startOf("week").format("YYYY-MM-DD"),
          activeDay: dayjs().format("YYYY-MM-DD"),
     },

     reducers: {
          setMondayDate(state, action) {  
               state.mondayDate = action.payload;
          },
          setActiveDay(state, action) {
               state.activeDay = action.payload;
          },
     },
});

export const { setMondayDate, setActiveDay } = dateSlice.actions;
export default dateSlice.reducer;
