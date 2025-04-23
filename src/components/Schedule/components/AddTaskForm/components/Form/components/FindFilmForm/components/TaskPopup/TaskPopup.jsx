import {
     useConflictTimeContext,
     useSuccessTimeContext,
} from "../../FindFilmForm";

import { AnimatePresence, motion } from "framer-motion";
import TaskConflict from "../TaskConflict/TaskConflict";
import s from "./style/TaskPopup.module.css";
import TaskSuccess from "../TaskSuccess/TaskSuccess";

const TaskPopup = (props) => {
     const { date } = props;

     const { conflictTime, setConflictTime } = useConflictTimeContext();
     const { successTime, setSuccessTime } = useSuccessTimeContext();

     const showPopup = conflictTime || successTime;

     const content = () => {
          if (conflictTime) return <TaskConflict date={date} />;
          if (successTime) return <TaskSuccess />;
     };

     return (
          <AnimatePresence>
               {showPopup && (
                    <motion.div
                         className={s.wrapper}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 0.5, ease: "linear" }}
                         onClick={(e) => {
                              if (e.target.className === s.wrapper) {
                                   setConflictTime(false);
                                   setSuccessTime(false);
                              }
                         }}
                    >
                         <motion.div
                              className={s.content}
                              initial={{ y: showPopup ? "100%" : 0 }}
                              animate={{ y: showPopup ? 0 : "100%" }}
                         >
                              {content()}
                         </motion.div>
                    </motion.div>
               )}
          </AnimatePresence>
     );
};

export default TaskPopup;
