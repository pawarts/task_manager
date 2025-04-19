import s from "./styles/UserIcon.module.css";

const UserIcon = (props) => {
     const { avatar } = props;

     return <img className={s.avatar} src={avatar} alt="" />;
};

export default UserIcon;
