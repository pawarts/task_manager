import s from "./style/TaskSuccess.module.css"

const TaskSuccess = (props) => {

    return (
        <div className={s.content}>
            <div className={s.animation_wrapper}>
                <p className={s.green_task}></p>
                <p className={s.green_task}></p>
                <p className={s.green_task}></p>
            </div>

            <div className={s.information}>
                <h3>Вітаю! У Вас є час переглянути цей фільм.</h3>
                <div className={s.add_to_table_wrapper}>
                    <h4>Додати його до Вашого списку справ?</h4>

                    <div className={s.button_wrapper}>
                        <button>Відміна</button>
                        <button className={s.button_add}>Додати</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskSuccess