import React from "react";
import classes from "./SideNavItem.module.css";
import { NavLink } from "react-router-dom";

const SideNavItem = (props) => {
  return (
    <li className={classes.NavLink}>
      <NavLink to={props.link}>{props.children}</NavLink>
    </li>
  );
};

export default SideNavItem;
