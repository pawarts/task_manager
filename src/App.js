import s from "./App.module.css";
import "./App.css";
import Schedule from "./components/Schedule/Schedule";
import AsideBlock from "./components/BaseComponents/AsideBlock/AsideBlock";

function App() {
     return (
          <div className={s.wrapper}>
               <AsideBlock />
               <Schedule />
          </div>
     );
}

export default App;
