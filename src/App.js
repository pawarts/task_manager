import s from "./App.module.css";
import "./App.css";
import Schedule from "./components/Schedule/Schedule";

function App() {
     return (
          <div className={s.wrapper}>
               <Schedule />
          </div>
     );
}

export default App;
