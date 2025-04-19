import { useDispatch } from "react-redux";
import Calendar from "./components/Calendar/Calendar";
import UserProfile from "./components/UserProfile/UserProfile";
import s from "./style/AsideBlock.module.css";

import { setAddTaskOpen } from "../../../store/slices/popupSlice";

const AsideBlock = (props) => {

     const dispatch = useDispatch()

     const openCloseTaskForm = () => {dispatch(setAddTaskOpen())}

     return (
          <div className={s.wrapper}>
               <section className={s.aside_section}>
                    <UserProfile />
               </section>
               <section className={s.aside_section}>
                    <Calendar />
               </section>
               <section className={s.aside_section}>
                    <button onClick={() => openCloseTaskForm()}>
                         Додати задачу
                    </button>
               </section>
          </div>
     );
};

export default AsideBlock;
