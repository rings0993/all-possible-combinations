import style from "./Combinations.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount } from "../features/counter/counterSlice";
import uniqid from "uniqid";
import {
  addItem,
  deleteItem,
  selectListLength,
  selectList,
} from "../features/listObj/listObjSlice";

function Combinations(props) {
  const list = useSelector(selectList);
  const row = [];
  console.log(list?.value[0]?.Contents);
  for (let i = 0; i < list.value.length; i++) {
    for (let j = 0; j < list.value[i]?.Contents?.length; j++) {
      row.push(<li key={uniqid()}>{list.value[i].Title}</li>);
    }
  }
  return <ul className={style.main}>{row}</ul>;
}

export default Combinations;
