import React from "react";
import classes from "./BackDrop.module.css";

const BackDrop = (props) => {
  let styles = [classes.BackDrop];
  props.transparent && styles.push(classes.Transparent);

  return <div className={styles.join(" ")} onClick={props.removeBack}></div>;
};

export default BackDrop;
