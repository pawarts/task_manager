import json from "../../../../../../json_data/meetings_table.json";
import Task from "./components/Task/Task";

import s from "./style/TaskColumn.module.css"

const TaskColumn = (props) => {
     const tasks = json;

     const task = tasks.schedule.map((element, index) => (
          <Task task={element} key={index} />
     ));

     return <div className={s.wrapper}>{task}</div>;
};

export default TaskColumn;
