import React, { useState, useEffect } from "react";
import classes from "./Auth.module.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Logo from "../../assets/images/logo.png";
import { auth, db, provider } from "../../firebase";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Redirect } from "react-router-dom";

const Auth = (props) => {
  useEffect(() => {
    props.isAuth && props.history.replace("/boards");
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const inputList = {
    email: {
      form: "input",
      type: "email",
      placeholder: "Email",
      value: email,
    },
    password: {
      form: "input",
      type: "password",
      placeholder: "Password",
      value: password,
    },
  };

  const onChangeHandler = (name, e) => {
    name == "email" ? setEmail(e.target.value) : setPassword(e.target.value);
    valid(name, e.target.value);
  };

  const valid = (name, val) => {
    if (name == "email") {
      val.length >= 10 && password.length >= 6
        ? setDisabled(false)
        : setDisabled(true);
    } else {
      val.length >= 6 && email.length >= 10
        ? setDisabled(false)
        : setDisabled(true);
    }
  };

  const onAuthHandler = (e) => {
    e.preventDefault();
    props.onAuthInit(email, password, isSignup);
  };

  const signInGoogle = async () => {
    await auth
      .signInWithPopup(provider)
      .then((res) => props.onAuthSuccess(res.email, res.uid))
      .catch((err) => alert(err.message));
  };

  const onToggleSignup = () => {
    setIsSignup((prevState) => !prevState);
  };

  const inputs = Object.keys(inputList).map((key) => (
    <div className={classes.input} key={key}>
      <Input
        form={inputList[key].form}
        name={key}
        type={inputList[key].type}
        placeholder={inputList[key].placeholder}
        value={inputList[key].value}
        changed={onChangeHandler}
      />
    </div>
  ));

  // const homeRedirect = props.isAuth && <Redirect to="/home" />;

  return (
    <>
      {/* {homeRedirect} */}
      <div className={classes.main}>
        <h2>
          <img src={Logo} />
        </h2>
        <form onSubmit={(e) => onAuthHandler(e)}>
          <div className={classes.container}>
            <h3>{isSignup ? "アカウントを作成" : "ログイン"}</h3>
            {inputs}
            {isSignup && (
              <p>
                アカウントを作成することにより、利用規約およびプライバシーポリシーを読み、これに同意するものとします。
              </p>
            )}
            <div className={classes.submit}>
              <Input
                form="submit"
                value={isSignup ? "新規投稿" : "ログイン"}
                disabled={disabled}
              />
            </div>
            <span>または</span>
            <a className={classes.google} href="#" onClick={signInGoogle}>
              Googleアカウントで続ける
            </a>
            <hr />
            <span className={classes.login} onClick={onToggleSignup}>
              {isSignup
                ? "アカウントをお持ちの場合はログイン"
                : "アカウントを作成する"}
            </span>
          </div>
        </form>
      </div>
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
    onAuthInit: (email, password, isSignup) =>
      dispatch(actions.authInit(email, password, isSignup)),
    onAuthSuccess: (email, uid) => dispatch(actions.authSuccess(email, uid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
