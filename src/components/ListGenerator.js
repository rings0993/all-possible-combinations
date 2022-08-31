import React from "react";
import style from "./ListGenerator.module.css";

import uniqid from "uniqid";

import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount } from "../features/counter/counterSlice";
import {
  addItem,
  deleteItem,
  selectListLength,
  selectList,
} from "../features/listObj/listObjSlice";
import ListItem from "./ListItem";

function ListGenerator() {
  const list = useSelector(selectList);
  const currentLengh = list["value"].length;
  const dispatch = useDispatch();
  const rows = [];
  // console.log("🅰", list);
  for (let i = 0; i < currentLengh; i++) {
    rows.push(
      <ListItem
        key={i}
        id={list["value"][i]["id"]}
        content={list["value"][i]["Contents"]}
      >
        {list["value"][i]["Title"]}
      </ListItem>
    );
  }

  return (
    <div className="main">
      <button
        className={style.button}
        onClick={() => dispatch(addItem(uniqid()))}
      >
        新增選項
      </button>
      <ul>{rows}</ul>
    </div>
  );
}

export default ListGenerator;
