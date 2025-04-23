import { Chip, TextField } from "@mui/material";
import { useSendFormContext } from "../../TaskForm";
import { useState } from "react";

import s from "./styles/Practipants.module.css";

const Practipants = () => {
     const { sendForm, setSendForm } = useSendFormContext();
     const [practipant, setPractipant] = useState("");

     const addPractipant = () => {
          const copiedSendForm = { ...sendForm };
          copiedSendForm.practipants.push(practipant);
          setSendForm(copiedSendForm);
     };

     return (
          <div className={s.wrapper}>
               <h3>Учасники:</h3>

               <div>
                    {sendForm.practipants.map((practipant, index) => (
                         <span className={s.chip} key={index}>
                              <Chip
                                   label={practipant}
                                   sx={{ bgcolor: "#181818", color: "#fff" }}
                              />
                         </span>
                    ))}
               </div>
               <div className={s.field}>
                    <TextField
                         value={practipant}
                         onChange={(event) => setPractipant(event.target.value)}
                         label="Учасник"
                         size="small"
                         sx={{ width: "320px" }}
                    />
                    <button className={s.add_button} onClick={addPractipant}
                         disabled={!practipant}>
                         Додати
                    </button>
               </div>
          </div>
     );
};

export default Practipants;
