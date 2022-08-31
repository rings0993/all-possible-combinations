import style from "./Combinations.module.css";
import { useSelector, useDispatch } from "react-redux";
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
  let textCombination = "";

  // Turn list.value into:
  // [['Set A: Element A1', 'Set A: Element A2'], ['Set B: Element B1', 'Set B: Element B2']]
  const mergeContent = list?.value.map((el, i) => {
    textCombination = [...el.Contents].map((content, i) =>
      el.Title !== "" ? `${el.Title}: ${content.value}` : ""
    );
    return textCombination;
  });

  // Check Cartesian Product for shorturl.at/fGTY6
  const cartesianProduct = (...a) =>
    a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));

  const joinContent = cartesianProduct(...mergeContent).map((el, i) =>
    el.join("   ")
  );
  joinContent.map((el, i) => row.push(<div key={uniqid()}>{el}</div>));
  return <ul className={style.main}>{row}</ul>;
}

export default Combinations;
