import React, { useState } from "react";
import classes from "./Header.module.css";
import NavButton from "../../UI/Button/NavButton/NavButton";
import Logo from "../../../assets/images/logo-grey.png";
import Modal from "../../UI/Modal/Modal";
import NewOptions from "../../NewBoard/NewOptions/NewOptions";
import NewBoardForm from "../../../containers/NewBoardForm/NewBoardForm";
import { Route, Switch, withRouter } from "react-router-dom";

const Header = (props) => {
  const [isSelect, setIsSelect] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const [currentModal, setCurrentModal] = useState(null);
  const [currentForm, setCurrentForm] = useState(null);

  const onToggleHandler = () => {
    setIsSelect((prevState) => !prevState);
  };

  const onOpenFormHandler = () => {
    setIsSelect(false);
    setIsOpenForm((prevState) => !prevState);
  };
  const onBackHomeHandler = () => {
    props.history.push("/home");
  };

  let modal = isSelect ? (
    <Modal removeBack={onToggleHandler}>
      <NewOptions onToggle={onToggleHandler} onOpen={onOpenFormHandler} />
    </Modal>
  ) : null;

  let form = isOpenForm ? (
    <NewBoardForm onOpen={onOpenFormHandler} history={props.history} />
  ) : null;

  return (
    <div className={classes.header}>
      <div className={classes.header_left}>
        <NavButton type="icon" style={{ marginRight: "5px" }}>
          #
        </NavButton>
        <NavButton
          type="icon"
          style={{ marginRight: "5px" }}
          clicked={onBackHomeHandler}
        >
          $
        </NavButton>
        <NavButton type="string" style={null}>
          #<span style={{ marginLeft: "8px" }}>ボードリスト</span>
        </NavButton>
      </div>
      <h2>
        <img src={Logo} />
      </h2>
      <div className={classes.header_rigth}>
        <NavButton
          type="icon"
          style={{ marginRight: "5px" }}
          clicked={onToggleHandler}
        >
          +
        </NavButton>
        <NavButton type="icon" style={null}>
          #
        </NavButton>
      </div>
      {modal}
      {form}
    </div>
  );
};

export default withRouter(Header);
