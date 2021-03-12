import React from "react";
import classes from "./ModalHeader.module.css";

const ModalHeader = (props) => {
  return (
    <div className={classes.header}>
      <h3>作成</h3>
      <span onClick={props.onToggle}>X</span>
    </div>
  );
};

export default ModalHeader;
