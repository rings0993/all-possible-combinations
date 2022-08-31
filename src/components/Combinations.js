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
  let textCombination = "";

  const mergeContent = list?.value.map((el, i) => {
    textCombination = [...el.Contents].map((content, i) =>
      el.Title !== "" ? `${el.Title}: ${content.value}` : ""
    );
    return textCombination;
  });

  const cartesian = (...args) => {
    let r = [],
      max = args?.length - 1;
    function helper(arr, i) {
      for (let j = 0, l = args[i]?.length; j < l; j++) {
        let a = arr.slice(0); // clone arr
        a.push(args[i][j]);
        if (i === max) r.push(a);
        else helper(a, i + 1);
      }
    }
    helper([], 0);
    return r;
  };
  const joinContent = cartesian(...mergeContent).map((el, i) => el.join("   "));
  joinContent.map((el, i) => row.push(<div key={uniqid()}>{el}</div>));
  console.log(list);
  return <ul className={style.main}>{row}</ul>;
}

export default Combinations;
