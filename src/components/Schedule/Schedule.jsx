import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
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
               <AddTaskForm />
          </div>
     );
};

export default Schedule;
