import React from "react";
import { Link } from "react-router-dom";
import classes from "./Board.module.css";
const Board = (props) => {
  return (
    <li className={classes.Board} style={{ backgroundColor: `${props.color}` }}>
      <Link to={props.link}>{props.children}</Link>
    </li>
  );
};

export default Board;
