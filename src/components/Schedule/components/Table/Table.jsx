import { createContext, useContext, useRef, useState } from "react";
import TaskColumn from "./components/TaskColumn/TaskColumn.jsx";
import TimeColumn from "./components/TimeColumn/TimeColumn.jsx";

import s from "./style/Table.module.css";

const ScrollTopContext = createContext();

export const useScrollTop = () => {useContext(ScrollTopContext)};


const Table = () => {
     const [scrollTop, setScrollTop] = useState(0);    
     const tableWrapper = useRef(null);

     return (
          <ScrollTopContext.Provider value={{scrollTop, setScrollTop}}>
               <div className={s.wrapper} ref={tableWrapper}>
                    <TimeColumn />
                    <TaskColumn />
               </div>
          </ScrollTopContext.Provider>
     );
};

export default Table;
