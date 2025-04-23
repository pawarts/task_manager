import { useChosedFormContext } from "../../AddTaskForm";

import s from "./styles/Form.module.css";

import { AnimatePresence, motion } from "framer-motion";

import TaskForm from "./components/TaskForm/TaskForm";
import BackButton from "./components/BackButton/BackButton";
import { useEffect, useState } from "react";
import FindFilmForm from "./components/FindFilmForm/FindFilmForm";

const Form = (props) => {
     const [title, setTitle] = useState("");

     const { chosedForm } = useChosedFormContext();

     const form = () => {
          switch (chosedForm) {
               case "task":
                    return <TaskForm />;
               case "cinema":
                    return <FindFilmForm />;
               default:
                    return null;
          }
     };

     useEffect(() => {
          switch (chosedForm) {
               case "task":
                    setTitle("Додати задачу/зустріч");
                    break;
               case "cinema":
                    setTitle("Знайти фільм");
                    break;
               default:
                    break;
          }
     }, [chosedForm]);

     return (
          <AnimatePresence>
               {chosedForm && (
                    <motion.div
                         initial={{ opacity: 0, y: "100%" }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: "100%" }}
                         transition={{ ease: "linear", duration: 0.5 }}
                         className={s.wrapper}
                    >
                         <h2 className={s.title}>{title}</h2>
                         <BackButton />
                         {form()}
                    </motion.div>
               )}
          </AnimatePresence>
     );
};

export default Form;
