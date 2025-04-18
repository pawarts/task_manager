import s from "./style/Header.module.css";

const Header = () => {
     const date = new Date();
     const monthFormatter = new Intl.DateTimeFormat("uk-UA", { month: "long" });
     const yearFormatter = new Intl.DateTimeFormat("uk-UA", {
          year: "numeric",
     });

     const monthName = monthFormatter.format(date).toUpperCase();
     const year = yearFormatter.format(date);

     return (
          <div>
               <p className={s.header_title}>
                    {monthName}, {year}
               </p>
          </div>
     );
};

export default Header;
