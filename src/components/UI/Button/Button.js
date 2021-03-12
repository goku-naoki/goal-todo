import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  let styles = [classes.btn];

  switch (props.style) {
    case "icon":
      styles.push(classes.success);
      break;
    case "string":
      styles.push(classes.disable);
      break;
    case "picture":
      styles.push(classes.disable);
  }

  return <button className={styles.join(" ")}>{props.children}</button>;
};

export default Button;
