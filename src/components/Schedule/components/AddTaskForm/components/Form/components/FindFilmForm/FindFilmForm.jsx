import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";
import "dayjs/locale/uk";

import json from "../../../../../../../../json_data/cinema.json";

import s from "./styles/FindFilmForm.module.css";
import { createContext, useContext, useState } from "react";
import Film from "./components/Film/Film";
import TaskPopup from "./components/TaskPopup/TaskPopup";

dayjs.locale("uk");

const ConflictTimeContext = createContext();
const SuccessTimeContext = createContext();

export const useConflictTimeContext = () => useContext(ConflictTimeContext);
export const useSuccessTimeContext = () => useContext(SuccessTimeContext);

const FindFilmForm = (props) => {
     const cinema = json;

     const [date, setDate] = useState(dayjs("2025-04-22"));

     const [conflictTime, setConflictTime] = useState(false);
     const [successTime, setSuccessTime] = useState(false);

     const filtered_cinema = cinema.filter((element) => {
          return element.date === dayjs(date).format("YYYY-MM-DD");
     })[0];

     return (
          <ConflictTimeContext.Provider
               value={{ conflictTime, setConflictTime }}
          >
               <SuccessTimeContext.Provider
                    value={{successTime, setSuccessTime}}>
                    <div className={s.wrapper}>
                         <div className={s.form}>
                              <section>
                                   <h4>Виберіть дату</h4>
                                   <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                        adapterLocale="uk"
                                   >
                                        <DateCalendar
                                             value={date}
                                             minDate={dayjs("2025-04-22")}
                                             onChange={(date) => setDate(date)}
                                        />
                                   </LocalizationProvider>
                              </section>

                              <section>
                                   <h4>Список фільмів</h4>

                                   <div>
                                        {filtered_cinema ? (
                                             filtered_cinema.movies.map(
                                                  (cinema, index) => {
                                                       return (
                                                            <Film
                                                                 date={date}
                                                                 cinema={cinema}
                                                                 key={index}
                                                            />
                                                       );
                                                  }
                                             )
                                        ) : (
                                             <p>Нічого не знайшли</p>
                                        )}
                                   </div>
                              </section>
                         </div>

                         <TaskPopup date={date} />
                    </div>
               </SuccessTimeContext.Provider>
          </ConflictTimeContext.Provider>
     );
};

export default FindFilmForm;
