import UserIcon from "./components/UserIcon/UserIcon";

import s from "./styles/UserProfile.module.css"

const UserProfile = (props) => {
     return (
          <div className={s.wrapper}>
               <UserIcon avatar="https://i.pinimg.com/474x/60/5b/9b/605b9b86a82dd0147ed8aa612381326f.jpg" />

               <div className={s.user_info}>
                    <h3>Andrii Rykachevskyi</h3>
                    <p>Developer</p>
               </div>
          </div>
     );
};

export default UserProfile;
