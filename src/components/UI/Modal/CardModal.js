import React from "react";
import classes from "./CardModal.module.css";
import BackDrop from "../BackDrop/BackDrop";

const CardModal = (props) => {
  return (
    <>
      <BackDrop removeBack={props.removeBack} transparent={true} />
      <div className={classes.cardModal}>{props.children}</div>
    </>
  );
};

export default CardModal;
