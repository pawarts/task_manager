import Calendar from "./components/Calendar/Calendar";
import s from "./style/AsideBlock.module.css";

const AsideBlock = (props) => {

     return (
          <div className={s.wrapper}>
               <div>
                    <Calendar />
               </div>
          </div>
     );
};

export default AsideBlock;
