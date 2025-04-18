import s from "./style/DayChooseButton.module.css"

const DayChooseButton = (props) => {

    const {day} = props

    const dayWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"]
    return (
        <button className={s.wrapper}>
            <p className={s.day_title}>{dayWeek[day]}</p>
            <p className={s.date_number}>{day}</p>
        </button>
    )
}

export default DayChooseButton 