import React from "react";
import style from "./Button.module.css";

function Button(prop) {
  let btnClasses = "";

  if (prop.btnStyle === "solid") {
    btnClasses = style.solid;
  } else {
    btnClasses = style.hollow;
  }

  const cssClass = `${style.button} ${btnClasses}`;

  return (
    <button type="button" className={cssClass}>
      {prop.children}
    </button>
  );
}

export default Button;
