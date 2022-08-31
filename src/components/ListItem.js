import React from "react";
import style from "./ListItem.module.css";
import uniqid from "uniqid";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItem,
  setTitle,
  setContent,
  addContent,
  deleteContent,
} from "../features/listObj/listObjSlice";

function ListItem(props) {
  const dispatch = useDispatch();
  const contentRows = [];
  const curentContentLengh = props.content.length;
  const titleInput = useRef(null);
  const contentInput = useRef([]);

  for (let i = 0; i < curentContentLengh; i++) {
    contentRows.push(
      <div className={style.input} key={props.content[i].id}>
        <input
          type="text"
          id={props.content[i].id}
          value={props.content[i].value || ""}
          className={style.input__box}
          ref={el => (contentInput.current[i] = el)}
          onChange={() =>
            dispatch(
              setContent({
                id: props.id,
                contentValue: contentInput.current[i].value,
                subId: props.content[i].id,
              })
              // deleteItem([props.id, titleInput.current.value])
            )
          }
        />
        <button
          className={style.input__deleteBtn}
          onClick={() =>
            dispatch(
              deleteContent({ id: props.id, subId: props.content[i].id })
            )
          }
          // onClick={onClickHandler}
        >
          Detele
        </button>
      </div>
    );
  }
  return (
    <div className={style.main} id={props.id}>
      <div className={style.title}>Set Name</div>
      <div className={style.input}>
        <input
          type="text"
          id="title"
          value={props.children}
          className={style.input__box}
          ref={titleInput}
          onChange={() =>
            dispatch(
              setTitle({ id: props.id, title: titleInput.current.value })
              // deleteItem([props.id, titleInput.current.value])
            )
          }
        />
        <button
          className={style.input__deleteBtn}
          onClick={() => dispatch(deleteItem(props.id))}
          // onClick={onClickHandler}
        >
          Delete
        </button>
      </div>
      <div className={style.sub}>
        <div className={style.title}>
          {titleInput?.current?.value} Set Elements
        </div>
        {contentRows}
        <button
          className={style.addSubBtn}
          onClick={() =>
            dispatch(addContent({ id: props.id, subId: uniqid() }))
          }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ListItem;
