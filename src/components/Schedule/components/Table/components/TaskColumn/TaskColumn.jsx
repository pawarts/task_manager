import { useSelector } from "react-redux";
import json from "../../../../../../json_data/meetings_table.json";
import Task from "./components/Task/Task";

import s from "./style/TaskColumn.module.css";
import { useEffect, useRef } from "react";
import { useScrollTop } from "../../Table";

const TaskColumn = (props) => {
     const tasks = json;
     const date = useSelector((state) => state.date.activeDay);

     const { setScrollTop } = useScrollTop();

     const taskWindow = useRef(null);

     const task = tasks.schedule[date]
          ? tasks.schedule[date].map((element, index) => {
                 return <Task key={index} task={element} />;
            })
          : null;

          
     useEffect(() => {
          const scrollToTask = (event) => {
               if (task) {
                    if (task.length > 0) {
                         const start_time = Number(
                              task[0].props.task.start_time.split(":")[0]
                         );

                         const task_position = start_time * 110;

                         setScrollTop(task_position);
                    }
               } else {
                    const date = new Date();

                    const hour = date.getHours();

                    setScrollTop(hour * 110);
               }
          };

          scrollToTask();
     }, [date, task, setScrollTop]);

     return (
          <div className={s.wrapper} ref={taskWindow}>
               {task}
               <div className={s.empty}></div>
          </div>
     );
};

export default TaskColumn;
