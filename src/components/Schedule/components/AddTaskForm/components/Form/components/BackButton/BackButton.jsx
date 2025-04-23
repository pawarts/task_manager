import { useChosedFormContext } from "../../../../AddTaskForm";
import s from "./styles/BackButton.module.css";

const BackButton = () => {

     const { setChosedForm } = useChosedFormContext();

     return <button className={s.back} onClick={()=> setChosedForm("")}>Повернутись</button>;
};

export default BackButton;
