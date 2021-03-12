import React, { useEffect } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  useEffect(() => {});
  let input = "";
  switch (props.form) {
    case "input":
      input = (
        <input
          className={classes.input}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          style={
            props.transparent && {
              border: "none",
              backgroundColor: "rgba(0,0,0,0.13)",
            }
          }
          onChange={(e) => props.changed(props.name, e)}
        />
      );
      break;
    case "textarea":
      input = (
        <textarea
          className={classes.input}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          style={
            props.transparent && {
              border: "none",
              backgroundColor: "rgba(0,0,0,0.13)",
            }
          }
          onChange={(e) => props.changed(props.name, e)}
        />
      );
      break;
    case "submit":
      input = (
        <input
          className={props.disabled ? classes.disabled : classes.submit}
          type="submit"
          value={props.value}
          disabled={props.disabled}
        />
      );
  }
  return input;
};

export default Input;
