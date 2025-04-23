import { useChosedFormContext } from "../../../AddTaskForm";
import s from "./styles/ChooseTypeTaskButton.module.css";

const ChooseTypeTaskButton = (props) => {
     const { icon, title, mode } = props;

     const { setChosedForm } = useChosedFormContext();

     return (
          <button className={s.wrapper} onClick={() => setChosedForm(mode)}>
               <img src={icon} alt="" />
               <h2>{title}</h2>
          </button>
     );
};

export default ChooseTypeTaskButton;
