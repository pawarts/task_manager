import json from "../../../../../../../../../../json_data/meetings_table.json";

import s from "./style/ContextMenu.module.css";

import TaskTitle from "../TaskTitle/TaskTitle";
import Icon from "./components/Icon/Icon";

import ic_time from "../../../../../../../../../../images/icon/time.svg";
import ic_location from "../../../../../../../../../../images/icon/location.svg";
import HighlightedText from "./components/HighlightedText/HighlightedText";

const ContextMenu = (props) => {
     const { id } = props;

     const task = json.schedule.find((item) => item.id === id);

     const { title, start_time, end_time, location, participants } = task;

     return (
          <div className={s.wrapper}>
               <TaskTitle title={title} />
               <div className={s.information_wrapper}>
                    <div className={s.info_block}>
                         <Icon icon={ic_time} />

                         <div>
                              <HighlightedText text={start_time} />
                              <HighlightedText text={end_time} />
                         </div>
                    </div>
                    <div className={s.info_block}>
                         <Icon icon={ic_location} />
                         <HighlightedText text={location} />
                    </div>

                    <div className={s.participants_block}>
                         <p>Учасники</p>
                         <div className={s.participants}>
                              {participants.map((practipants, index) => (
                                   <HighlightedText
                                        key={index}
                                        text={practipants}
                                   />
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ContextMenu;
