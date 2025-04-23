import s from "./styles/SubmitButton.module.css";

const SubmitButton = (props) => {

     const {title, disabled} = props 

     return (
          <button
               type="submit"
               className={s.submit_button}
               disabled={disabled}
          >
               Додати таску
          </button>
     );
};

export default SubmitButton;
