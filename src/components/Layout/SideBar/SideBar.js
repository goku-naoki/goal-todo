import React from "react";
import classes from "./SideBar.module.css";
import SideNavItem from "../../SideNavItem/SideNavItem";

const SideBar = (props) => {
  return (
    <div className={classes.SideBar}>
      <ul>
        <SideNavItem link="/">
          $ <span style={{ marginLeft: "10px" }}>ボード</span>
        </SideNavItem>
        <SideNavItem link="/">
          $ <span style={{ marginLeft: "10px" }}>テンプレート</span>
        </SideNavItem>
        <SideNavItem link="/">
          $ <span style={{ marginLeft: "10px" }}>ホーム</span>
        </SideNavItem>
      </ul>
    </div>
  );
};

export default SideBar;
