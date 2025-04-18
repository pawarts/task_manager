import ContextMenu from "./components/ContextMenu/ContextMenu";
import TaskTitle from "./components/TaskTitle/TaskTitle";

import { AnimatePresence, motion } from "framer-motion";

import s from "./style/Task.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const Task = (props) => {
     const { task } = props;

     const [moreInfo, setMoreInfo] = useState(false);

     const date = useSelector((state) => state.date.activeDay);

     if (date === task.date) {
          const start_time = Number(task.start_time.split(":")[0]);
          const task_position = start_time;
          return (
               <div
                    className={s.wrapper}
                    style={{ top: `${task_position * 110}px` }}
               >
                    <div
                         className={s.task}
                         onClick={() => setMoreInfo(!moreInfo)}
                    >
                         <TaskTitle title={task.title} />
                         <p className={s.time}>
                              {task.start_time} - {task.end_time}
                         </p>
                    </div>

                    <AnimatePresence>
                         {moreInfo && (
                              <motion.div
                                   className={s.moreInfo}
                                   initial={{ opacity: 0, x: -10 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   exit={{ opacity: 0, x: -10 }}
                              >
                                   <ContextMenu task={task} id={task.id} />
                              </motion.div>
                         )}
                    </AnimatePresence>
               </div>
          );
     }

     return null;
};

export default Task;
