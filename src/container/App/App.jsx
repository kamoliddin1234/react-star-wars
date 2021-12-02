import { getApiResource } from "../../utils/network";
import style from "./App.module.css";

const App = () => {
  return (
    <div>
      <header className={style.header}>
        <div className="container">
          <div className={style.headerLogo}>
            <h2>Logo</h2>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
