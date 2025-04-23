import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChooseTypeTask from "./components/ChooseTypeTask/ChooseTypeTask";
import s from "./styles/AddTaskForm.module.css";
import { useSelector } from "react-redux";
import Form from "./components/Form/Form";

const ChosedForm = createContext();

export const useChosedFormContext = () => useContext(ChosedForm);

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
                              initial={{ opacity: 0, y: "-100%" }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: "-100%" }}
                              transition={{ ease: "linear", duration: 0.5 }}
                         >
                              <ChooseTypeTask />
                              <Form />
                         </motion.div>
                    )}
               </AnimatePresence>
          </ChosedForm.Provider>
     );
};

export default AddTaskForm;
