import s from "./style/HighlightedText.module.css"

const HighlightedText = (props) => {
     const { text } = props;

     return <span className={s.text}>{text}</span>;
};

export default HighlightedText;
