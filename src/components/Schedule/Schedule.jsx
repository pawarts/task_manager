import DayChoose from "./components/DayChoose/DayChoose";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import s from "./style/Schedule.module.css";

const Schedule = (props) => {


     return (
          <div className={s.wrapper}>
               <Header />
               <DayChoose />
               <Table />
          </div>
     );
};

export default Schedule;
