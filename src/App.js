import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import style from "./app.module.css";
import ListGenerator from "./components/ListGenerator";
import Button from "./ui/Button";
import Combinations from "./components/Combinations";

function App() {
  return (
    <div className={style.main}>
      <h1> 編輯樣式列表</h1>
      <div className={style.container}>
        <div className={style.container__box1}>
          <ListGenerator></ListGenerator>
        </div>
        <div className={style.container__box2}>
          組合預覽
          <Combinations></Combinations>
        </div>
      </div>
      <div className={style.confirmBox}>
        <Button btnStyle="hollow">取消</Button>
        <Button btnStyle="solid">儲存</Button>
      </div>

      {/* <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div> */}
    </div>
  );
}

export default App;
