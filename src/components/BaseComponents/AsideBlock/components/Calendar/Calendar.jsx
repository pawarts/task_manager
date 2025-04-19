import dayjs from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";
import "dayjs/locale/uk";
import isoWeek from "dayjs/plugin/isoWeek";

import {
     setActiveDay,
     setMondayDate,
} from "../../../../../store/slices/dateSlice";
import { useDispatch, useSelector } from "react-redux";

dayjs.extend(isoWeek);
dayjs.extend(isBetweenPlugin);
dayjs.locale("uk");

const Calendar = (props) => {
     const date = useSelector((state) => state.date.activeDay);

     const dispatch = useDispatch();

     const weekRange = (value) => {
          
          const firstDay = value.startOf("week").format("YYYY-MM-DD");
          dispatch(setActiveDay(value.format("YYYY-MM-DD")));
          dispatch(setMondayDate(firstDay));
     };

     return (
          <div>
               <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="uk"
               >
                    <DateCalendar
                         value={dayjs(date)}
                         onChange={(newValue) => weekRange(newValue)}
                         sx={{
                              color: "white",

                              "& .MuiTypography-root": {
                                   color: "white",
                              },
                              "& .MuiDayCalendar-weekDayLabel": {
                                   color: "white",
                              },
                              "& .MuiPickersCalendarHeader-label": {
                                   color: "white",
                              },
                              "& .MuiSvgIcon-root": {
                                   color: "white",
                              },

                              ".MuiYearCalendar-button": {
                                   "&.Mui-selected": {
                                        bgcolor: "#DA667B",
                                   },
                              },
                         }}
                         slotProps={{
                              year: {
                                   sx: {
                                        color: "yellow",
                                   },
                              },
                              day: {
                                   sx: {
                                        color: "#ffff",
                                        "&:hover": {
                                             color: "black",
                                             bgcolor: "#E7B4BD",
                                        },
                                        "&.Mui-selected": {
                                             bgcolor: "#DA667B",
                                             "&:focus": {
                                                  bgcolor: "#DA667B",
                                             },
                                        },
                                        "&.MuiPickersDay-today": {
                                             border: "1px solid #DA667B",
                                        },
                                   },
                              },
                         }}
                    />
               </LocalizationProvider>
          </div>
     );
};

export default Calendar;
