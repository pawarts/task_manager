import TaskColumn from "./components/TaskColumn/TaskColumn.jsx";
import TimeColumn from "./components/TimeColumn/TimeColumn.jsx";

import s from "./style/Table.module.css";

const Table = () => {
     return (
          <div className={s.wrapper}>
               <div className={s.table_wrapper}>
                    <TimeColumn />
                    <TaskColumn /> 
               </div>
          </div>
     );
};

export default Table;
