import s from "./style/Schedule.module.css";

import schedule_data from "../../json_data/meetings_table.json";

import Task from "../Task/Task";

const Schedule = (props) => {
     const { schedule } = schedule_data;

     const meet = schedule.map((element) => {
          return (
               <div>
                    <Task meet_info={element} />
               </div>
          );
     });

     return (
          <div className={s.wrapper}>
               <div>{meet}</div>
          </div>
     );
};

export default Schedule;
