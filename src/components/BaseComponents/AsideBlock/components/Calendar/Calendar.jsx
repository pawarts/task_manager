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
          const day = new Date(value.$d).toISOString().split("T")[0];

          const selectedDay = dayjs(day);
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
                    />
               </LocalizationProvider>
          </div>
     );
};

export default Calendar;
