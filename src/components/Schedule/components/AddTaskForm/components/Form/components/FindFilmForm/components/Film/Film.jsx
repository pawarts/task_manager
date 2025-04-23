import { useState } from "react";

import tasks from "../../../../../../../../../../json_data/meetings_table.json";

import s from "./style/Film.module.css";

import dayjs from "dayjs";
import "dayjs/locale/uk";

import {
     useConflictTimeContext,
     useSuccessTimeContext,
} from "../../FindFilmForm";

dayjs.locale("uk");
const Film = (props) => {
     const [details, setDetails] = useState(false);

     const { date, cinema } = props;

     const { setConflictTime } = useConflictTimeContext();
     const { setSuccessTime } = useSuccessTimeContext();

     const checkTable = () => {
          const task = tasks.schedule[date.format("YYYY-MM-DD")];

          return task.some((task) => {
               const taskStart = dayjs(`2025-04-22T${task.start_time}`);
               const taskEnd = dayjs(`2025-04-22T${task.end_time}`);

               const session_start = dayjs(
                    `${date.format("YYYY-MM-DD")}T${cinema.session.time}`
               );
               const session_end = session_start.add(cinema.duration, "minute");

               return (
                    session_start.isBefore(taskEnd) &&
                    session_end.isAfter(taskStart)
               );
          });
     };

     return (
          <div className={s.wrapper}>
               <div
                    className={s.main_info}
                    onClick={() => setDetails(!details)}
               >
                    <img className={s.poster} src={cinema.poster} alt="" />

                    <h4 className={s.title}>{cinema.title}</h4>
                    <h5 className={s.genre}>{cinema.genre}</h5>
               </div>

               <div className={s.session_info}>
                    <div>
                         <span>Початок сеансу: {cinema.session.time}</span>
                    </div>
                    <div>
                         <span>Зал: {cinema.session.hall}</span>
                    </div>
                    <div>
                         <span>Вартість квитка: {cinema.session.price} ₴</span>
                    </div>

                    <button
                         className={s.submit_button}
                         onClick={() => {
                              const check = checkTable();
                              if (check) {
                                   setSuccessTime(false);
                                   setConflictTime(true);
                              } else {
                                   setSuccessTime(true);
                                   setConflictTime(false);
                              }
                         }}
                    >
                         Переглянути доступність часу
                    </button>
               </div>
          </div>
     );
};

export default Film;
