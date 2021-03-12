import React from "react";
import BoardsIndex from "../../../containers/BoardsIndex/BoardsIndex";
import SideBar from "../SideBar/SideBar";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <SideBar />
        <BoardsIndex />
      </div>
    </div>
  );
};

export default Home;
