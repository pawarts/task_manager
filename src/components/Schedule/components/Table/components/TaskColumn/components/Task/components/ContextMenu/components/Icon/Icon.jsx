import  s from "./style/Icon.module.css"

const Icon = (props) => {
     const { icon } = props;

     return <img className={s.icon} src={icon} alt="" />;
};

export default Icon;
