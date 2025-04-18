import { useSelector } from "react-redux";
import DayChooseButton from "./components/DayChooseButton/DayChooseButton";
import s from "./style/DayChoose.module.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const DayChoose = (props) => {

     const [fullWeekDates, setFullWeekDates] = useState([]);

     const mondayDate = useSelector((state) => state.date.mondayDate);
     console.log(mondayDate)

     useEffect(() => {
          const week_dates = Array.from({ length: 7 }, (_, i) =>
               dayjs(mondayDate).add(i, "day").format("YYYY-MM-DD")
          );
          setFullWeekDates(week_dates)
     }, [mondayDate]);


     return (
          <div className={s.wrapper}>
               {fullWeekDates.map((element, index) => {
                    return <DayChooseButton key={index} date={element} day={index}/>;
               })}
          </div>
     );
};

export default DayChoose;
