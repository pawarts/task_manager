import s from "./styles/Task.module.css";

const Task = (props) => {
     const { meet_info } = props;

     const { title, time, date, location, participants } = meet_info;

     return (
          <div className={s.wrapper}>
               <h5>{title}</h5>
               <p>{time}</p>
               <p>{date}</p>
               <p>{location}</p>
               <p>
                    {participants.map((elem) => (
                         <p>{elem}</p>
                    ))}
               </p>
          </div>
     );
};

export default Task;
