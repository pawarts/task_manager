import s from "./style/TimeTitle.module.css"


const TimeTitle = (props) => {
    const {time} = props;
    
    return (
        <p className={s.time}>{time}</p>
    )
}

export default TimeTitle