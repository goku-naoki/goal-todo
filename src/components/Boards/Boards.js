import React, { useEffect } from "react";
import Board from "./Board/Board";
import classes from "./Boards.module.css";
const Boards = (props) => {
  useEffect(() => {});

  const boards = props.boards
    ? props.boards.map((board) => (
        <Board link={`boards/${board.id}`} key={board.id} color={board.color}>
          {board.name}
        </Board>
      ))
    : null;

  return <ul className={classes.boards}>{boards}</ul>;
};

export default Boards;
