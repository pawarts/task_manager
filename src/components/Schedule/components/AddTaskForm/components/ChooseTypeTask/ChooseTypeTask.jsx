import { useChosedFormContext } from "../../AddTaskForm";
import { AnimatePresence, motion } from "framer-motion";

import ChooseTypeTaskButton from "./components/ChooseTypeTaskButton";

import s from "./styles/ChooseTypeTask.module.css";

const ChooseTypeTask = (props) => {
     const { chosedForm } = useChosedFormContext();

     return (
          <AnimatePresence>
               {chosedForm.length === 0 && (
                    <motion.div
                         className={s.wrapper}
                         initial={{opacity: 0, y: "-100%"}}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: "-100%" }}
                         transition={{ ease: "linear", duration: 0.5 }}
                    >
                         <ChooseTypeTaskButton
                              title="Додати задачу/зустріч"
                              mode="task"
                         />
                         <ChooseTypeTaskButton
                              title="Знайти фільм"
                              mode="cinema"
                         />
                    </motion.div>
               )}
          </AnimatePresence>
     );
};

export default ChooseTypeTask;
