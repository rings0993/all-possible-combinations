import React from "react";
import "./App.css";

import style from "./app.module.css";
import ListGenerator from "./components/ListGenerator";
import Combinations from "./components/Combinations";

function App() {
  return (
    <div className={style.main}>
      <h1 className={style.main__title}> Possible Combinations</h1>
      <div className={style.container}>
        <div className={style.container__box1}>
          <ListGenerator></ListGenerator>
        </div>
        <div className={style.container__box2}>
          <h3 className={style.container__box2Title}>Combinations Output</h3>
          <Combinations></Combinations>
        </div>
      </div>
    </div>
  );
}

export default App;
