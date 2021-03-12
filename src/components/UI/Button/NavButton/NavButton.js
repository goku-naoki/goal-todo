import React from "react";
import classes from "./NavButton.module.css";

const NavButton = (props) => {
  let styles = [classes.btn];

  switch (props.type) {
    case "icon":
      styles.push(classes.icon);
      break;
    case "string":
      styles.push(classes.string);
      break;
    case "picture":
      styles.push(classes.disable);
  }

  return (
    <button
      className={styles.join(" ")}
      style={props.style}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default NavButton;
