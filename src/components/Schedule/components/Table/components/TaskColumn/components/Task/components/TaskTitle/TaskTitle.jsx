import s from "./style/TaskTitle.module.css";

const TaskTitle = (props) => {
     const { title } = props;

     return <h3 className={s.title}>{title}</h3>;
};

export default TaskTitle;
