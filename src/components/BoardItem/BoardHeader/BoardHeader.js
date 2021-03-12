import React from "react";
import NavButton from "../../UI/Button/NavButton/NavButton";
import classes from "./BoardHeader.module.css";

const BoardHeader = (props) => {
  const { name } = props.board;

  return (
    <div className={classes.header}>
      <NavButton type="string" style={{ marginRight: "5px" }}>
        #<span style={{ marginLeft: "8px" }}>ボードリスト</span>
      </NavButton>
      <NavButton type="string" style={{ marginRight: "5px" }}>
        {name}
      </NavButton>
    </div>
  );
};

export default BoardHeader;
