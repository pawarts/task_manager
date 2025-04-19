import { useSelector } from "react-redux";
import json from "../../../../../../json_data/meetings_table.json";
import Task from "./components/Task/Task";

import s from "./style/TaskColumn.module.css";
import { useEffect, useRef } from "react";

const TaskColumn = (props) => {
     const tasks = json;
     const date = useSelector((state) => state.date.activeDay);

     const taskWindow = useRef(null);

     const task = tasks.schedule
          .filter((task) => task.date === date)
          .map((element, index) => <Task task={element} key={index} />);



     useEffect(() => {
          const scrollToTask = (event) => {
               if (taskWindow.current) {
                    if (task.length > 0) {
                         const start_time = Number(
                              task[0].props.task.start_time.split(":")[0]
                         );
     
                         const task_position = start_time * 110;
                         taskWindow.current.scrollTo({
                              top: task_position,
                              behavior: "smooth",
                         });
                    }
               }
          };

          scrollToTask()
     }, [date, task]);

     return (
          <div className={s.wrapper} ref={taskWindow}>
               {task}
               <div className={s.empty}></div>
          </div>
     );
};

export default TaskColumn;
