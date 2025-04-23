import { TextField } from "@mui/material";

import s from "./styles/TaskForm.module.css";

import {
     DateCalendar,
     LocalizationProvider,
     TimeField,
} from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createContext, useContext, useState } from "react";
import Practipants from "./components/Practipants/Practipants";
import dayjs from "dayjs";
import "dayjs/locale/uk";
import SubmitButton from "../SubmitButton/SubmitButton";

const SendFormContext = createContext();

export const useSendFormContext = () => useContext(SendFormContext);

dayjs.locale("uk");

const TaskForm = () => {
     const [sendForm, setSendForm] = useState({
          title: "",
          date: dayjs(new Date()),
          start_time: dayjs(new Date()),
          end_time: dayjs(new Date()),
          location: "",
          practipants: [],
     });

     const disableFunction = () => {
          const keysArray = Object.keys(sendForm);
          for (let index in keysArray) {
               const key = keysArray[index];

               if (!sendForm[key]) return true;
          }

          const {start_time, end_time, practipants} = sendForm

          if (start_time > end_time) return true


          return false;
     };

     const handleChange = (event, field_name) => {
          if (event) {
               const copiedSendForm = { ...sendForm };

               const time_value = ["date", "start_time", "end_time"].includes(
                    field_name
               );

               if (time_value) {
                    copiedSendForm[field_name] = event.$d;

                    return setSendForm(copiedSendForm);
               }

               copiedSendForm[field_name] = event.target.value;
               setSendForm(copiedSendForm);
          }
     };

     const time_enable = sendForm.end_time < sendForm.start_time;

     return (
          <SendFormContext.Provider value={{ sendForm, setSendForm }}>
               <div className={s.wrapper}>
                    <section>
                         <TextField
                              variant="outlined"
                              label="Назва задачі"
                              name="title"
                              onChange={(event) => handleChange(event, "title")}
                              size="small"
                              value={sendForm.title}
                              sx={{ width: "320px" }}
                         />
                    </section>

                    <section>
                         <h3>Виберіть дату</h3>
                         <LocalizationProvider
                              dateAdapter={AdapterDayjs}
                              adapterLocale="uk"
                         >
                              <DateCalendar
                                   value={dayjs(sendForm.date)}
                                   onChange={(event) =>
                                        handleChange(event, "date")
                                   }
                              />
                         </LocalizationProvider>
                    </section>

                    <section>
                         <h3>Час проведення</h3>
                         <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <div className={s.time_field}>
                                   <TimeField
                                        format="HH:mm"
                                        label="Час початку"
                                        size="small"
                                        onChange={(event) => {
                                             handleChange(event, "start_time");
                                        }}
                                        value={dayjs(sendForm.start_time)}
                                        error={time_enable}
                                        sx={{ width: "145px" }}
                                   />
                                   <span className={s.separator}></span>
                                   <TimeField
                                        format="HH:mm"
                                        label="Час завершення"
                                        size="small"
                                        error={time_enable}
                                        onChange={(event) =>
                                             handleChange(event, "end_time")
                                        }
                                        value={dayjs(sendForm.end_time)}
                                        sx={{ width: "145px" }}
                                   />
                              </div>
                         </LocalizationProvider>
                    </section>

                    <section>
                         <TextField
                              variant="outlined"
                              label="Місце проведення"
                              size="small"
                              value={sendForm.location}
                              onChange={(event) =>
                                   handleChange(event, "location")
                              }
                              sx={{ width: "320px" }}
                         />
                    </section>

                    <section>
                         <Practipants />
                    </section>

                    <SubmitButton disabled={disableFunction()} />
               </div>
          </SendFormContext.Provider>
     );
};

export default TaskForm;
