
import tasks from "../../../../../../../../../../json_data/meetings_table.json";
import s from "./style/TaskConflict.module.css";

import dayjs from "dayjs";

const TaskConflict = (props) => {
     const { date } = props;

     const last_task_end_in = tasks.schedule[
          dayjs(date).format("YYYY-MM-DD")
     ].reduce((currenItem, maxItem) =>
          currenItem.end_time > maxItem.end_time
               ? currenItem.end_time
               : maxItem.end_time
     );

     return (
          <div className={s.content}>
               <div className={s.conflict_animation_wrapper}>
                    <p className={s.error_task}></p>
                    <div className={s.space_between}>
                         <p></p>
                         <p></p>
                         <p></p>
                         <p></p>
                         <p></p>
                         <p></p>
                         <p></p>
                    </div>
                    <p className={s.error_task}></p>
               </div>

               <h3>У цей час є завдання</h3>
               <p>Ви вільні після {last_task_end_in}</p>
          </div>
     );
};

export default TaskConflict;
