import React from "react";
import classes from "./Modal.module.css";
import BackDrop from "../BackDrop/BackDrop";

const Modal = (props) => {
  return (
    <>
      <div className={classes.modal}>{props.children}</div>
      <BackDrop removeBack={props.removeBack} />
    </>
  );
};

export default Modal;
