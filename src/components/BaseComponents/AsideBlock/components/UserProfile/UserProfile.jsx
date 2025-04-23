import UserIcon from "./components/UserIcon/UserIcon";

import s from "./styles/UserProfile.module.css"

const UserProfile = (props) => {
     return (
          <div className={s.wrapper}>
               <UserIcon avatar="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/d9a4f9cd-738b-4b49-b5a3-b887e68162d2/bb4a89de-a3a4-491a-9f78-086388c85002.png" />

               <div className={s.user_info}>
                    <h3>[Name] [Surname]</h3>
                    <p>position</p>
               </div>
          </div>
     );
};

export default UserProfile;
