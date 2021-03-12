import React from "react";
import classes from "./SelectColor.module.css";

const SelectColor = (props) => {
  return (
    <div
      className={classes.color}
      style={{ backgroundColor: `${props.color}` }}
      onClick={props.onChangeColor}
    >
      {props.currentColor == props.color && <p>✔︎</p>}
    </div>
  );
};

export default SelectColor;
