import React, { useState } from "react";
import classes from "./NewBoardForm.module.css";
import BackDrop from "../../components/UI/BackDrop/BackDrop";
import Input from "../../components/UI/Input/Input";
import SelectColor from "../../components/NewBoard/SelectColor/SelectColor";
import { db } from "../../firebase";
import { connect } from "react-redux";

const NewBoardForm = (props) => {
  const [name, setName] = useState("");
  const [colorState, setColorState] = useState("#b388ff");

  const onNameChangeHandler = (name, e) => {
    setName(e.target.value);
  };

  const onChangeColorHandler = (color) => {
    setColorState(color);
  };

  const createBoardHandler = async (e) => {
    e.preventDefault();
    let ref = db.ref("/boards");
    await ref
      .push({
        uid: props.uid,
        name: name,
        color: colorState,
      })
      .then((res) => {
        props.onOpen();
        props.history.push(`/boards/${res.key}`);
      });
  };
  const colors = [
    "#b388ff",
    "#1565c0",
    "#00acc1",
    "#9c27b0",
    "#ec407a",
    "#ff8a80",
    "#4db6ac",
    "#fbc02d",
    "#40c4ff",
  ];
  const selectColors = colors.map((color) => (
    <SelectColor
      key={color}
      currentColor={colorState}
      color={color}
      onChangeColor={() => onChangeColorHandler(color)}
    />
  ));

  return (
    <>
      <BackDrop transparent={true} removeBack={props.onOpen} />
      <form className={classes.form} onSubmit={(e) => createBoardHandler(e)}>
        <div className={classes.info}>
          <div
            className={classes.title}
            style={{ backgroundColor: `${colorState}` }}
          >
            <div className={classes.input}>
              <Input
                form="input"
                type="text"
                name="name"
                placeholder="ボードタイトルを追加"
                transparent={true}
                value={name}
                changed={onNameChangeHandler}
              />
            </div>
          </div>
          <div className={classes.colors}>{selectColors}</div>
        </div>
        <div className={classes.submit}>
          <Input form="submit" value="ボードを作成" disabled={!name} />
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.auth.uid,
  };
};
export default connect(mapStateToProps)(NewBoardForm);
