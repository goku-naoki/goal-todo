import "./App.css";
import Auth from "./containers/Auth/Auth";
import Layout from "./components/Layout/Layout/Layout";
import Home from "./components/Layout/Home/Home";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import * as actions from "./store/actions/index";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import MainBoard from "./containers/MainBoard/MainBoard";

const App = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        props.onAuthSuccess(authUser.email, authUser.uid);
      } else {
      }
    });
  });

  const authRedirect = <Redirect to="/auth" />;

  return (
    <>
      {!props.isAuth ? (
        <Route path="/auth" component={Auth} />
      ) : // <Redirect to="/home" />
      null}
      {!props.isAuth ? null : (
        <Layout>
          <Switch>
            <Route path="/boards" component={MainBoard} />
            <Route path="/home" component={Home} />
          </Switch>
        </Layout>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthSuccess: (email, uid) => dispatch(actions.authSuccess(email, uid)),
  };
};

//withRouterで子要素にもpropsを与える
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
