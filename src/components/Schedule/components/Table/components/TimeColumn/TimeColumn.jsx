import s from "./style/TimeColumn.module.css"

import TimeTitle from "./TimeTitle/TimeTitle";

const TimeColumn = (props) => {
     const time_table = [];

     for (let i = 0; i < 24; i++) {
          const time = `${i < 10 ? "0" : ""}${i}:00`;
          time_table.push(
               <div key={i} className="time-column-item">
                    <TimeTitle time={time} />
               </div>
          );
     }

     return (
          <div className={s.wrapper}>
               <div>{time_table}</div>
          </div>
     );
};

export default TimeColumn;
