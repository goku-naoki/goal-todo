import React from "react";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Auth from "../../../containers/Auth/Auth";
import { Route, Switch, withRouter } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default withRouter(Layout);
