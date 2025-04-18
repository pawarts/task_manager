import { useDispatch, useSelector } from "react-redux";
import s from "./style/DayChooseButton.module.css";
import { setActiveDay } from "../../../../../../store/slices/dateSlice";

const DayChooseButton = (props) => {
     const { day } = props;

     const dispatch = useDispatch();

     const date = new Date(props.date);

     const dateISO = date.toISOString().split("T")[0];
     const activeDay = useSelector((state) => state.date.activeDay);

     const dayWeek = [
          "Понеділок",
          "Вівторок",
          "Середа",
          "Четвер",
          "П'ятниця",
          "Субота",
          "Неділя",
     ];
     return (
          <button
               className={`${s.wrapper} ${
                    activeDay === dateISO && s.wrapperActive
               }`}
               onClick={() => dispatch(setActiveDay(dateISO))}
          >
               <p className={s.day_title}>{dayWeek[day]}</p>
               <p className={s.date_number}>{date.getDate()}</p>
          </button>
     );
};

export default DayChooseButton;
