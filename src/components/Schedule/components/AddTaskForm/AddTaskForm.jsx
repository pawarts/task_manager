import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChooseTypeTask from "./components/ChooseTypeTask/ChooseTypeTask";
import s from "./styles/AddTaskForm.module.css";
import { useSelector } from "react-redux";

const ChosedForm = createContext();

export const ChosedFormContext = () => useContext(ChosedForm);

const AddTaskForm = () => {
     const [chosedForm, setChosedForm] = useState("");

     const isOpen = useSelector((state) => state.popup.addTaskOpen);

     useEffect(() => {
          if (!isOpen) {
               setChosedForm("");
          }
     });
     return (
          <ChosedForm.Provider value={{ chosedForm, setChosedForm }}>
               <AnimatePresence>
                    {isOpen && (
                         <motion.div
                              className={s.wrapper}
                              initial={{ opacity: 0, x: "100%" }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: "100%" }}
                              transition={{ ease: "linear", duration: 0.5 }}
                         >
                              <ChooseTypeTask />
                         </motion.div>
                    )}
               </AnimatePresence>
          </ChosedForm.Provider>
     );
};

export default AddTaskForm;
