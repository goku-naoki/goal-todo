import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./ListInput.module.css";

const ListInput = (props) => {
  const [show, setShow] = useState(false);

  let inputStyle = [];
  let fieldStyle = [];
  switch (props.target) {
    case "list":
      inputStyle.push(classes.listInput);
      fieldStyle.push(classes.listField);
      break;

    case "task":
      inputStyle.push(classes.taskInput);
      fieldStyle.push(classes.taskField);
      break;

    case "cardDetail":
      inputStyle.push(classes.cardDetail);
      fieldStyle.push(classes.cardDetailField);
      break;

    default:
      inputStyle.push(classes.listInput);
      fieldStyle.push(classes.listField);
      break;
  }

  return (
    <form
      className={!props.show ? inputStyle[0] : fieldStyle[0]}
      onSubmit={(e) => props.onItemCreate(e, props.listId, props.cardId)}
    >
      {!props.show ? (
        <p
          className={classes.p}
          onClick={() => props.inputToggle(props.listId, props.cardInfo)}
        >
          <span>{props.cardInfo ? null : "+"}</span>{" "}
          {props.cardInfo ? props.cardInfo : props.text}
        </p>
      ) : (
        <>
          <div className={classes.input}>
            <Input
              form={props.target == "cardDetail" ? "textarea" : "input"}
              type="text"
              name={props.target == "cardDetail" ? "info" : "name"}
              value={props.value}
              placeholder={props.placeholder}
              changed={props.onInputChange}
            />
          </div>
          <div className={classes.submit}>
            <Input
              form="submit"
              value={props.target == "cardDetail" ? "保存" : props.text}
              disabled={false}
            />
          </div>
        </>
      )}
    </form>
  );
};

export default ListInput;
