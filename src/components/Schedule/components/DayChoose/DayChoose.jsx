import DayChooseButton from "./components/DayChooseButton/DayChooseButton"
import s from "./style/DayChoose.module.css"


const DayChoose = (props) => {


    const day = Array.from({length: 7})

    return (
        <div className={s.wrapper}>
            {day.map((element, index) => {
                return (
                    <DayChooseButton key={index} day={index} />
                )
            })}
        </div>
    )
}

export default DayChoose