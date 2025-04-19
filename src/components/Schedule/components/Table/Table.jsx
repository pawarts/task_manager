import { createContext, useContext, useEffect, useRef, useState } from "react";
import TaskColumn from "./components/TaskColumn/TaskColumn.jsx";
import TimeColumn from "./components/TimeColumn/TimeColumn.jsx";

import s from "./style/Table.module.css";

const ScrollTopContext = createContext();

export const useScrollTop = () => useContext(ScrollTopContext);


const Table = () => {
     const [scrollTop, setScrollTop] = useState(0);    
     const tableWrapper = useRef(null);

     useEffect(() => {
          if(tableWrapper.current) {
               tableWrapper.current.scrollTop = scrollTop;
          }

     }, [scrollTop])

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
