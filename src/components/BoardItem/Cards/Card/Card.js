import React, { useState } from "react";
import CardModal from "../../../UI/Modal/CardModal";
import CardDetail from "../../CardDetail/CardDetail";
import classes from "./Card.module.css";
const Card = (props) => {
  // const [show, setShow] = useState(false);

  const cardDetail = props.detailShow ? (
    <CardModal
      removeBack={() => props.toggleDetail(props.inputDetailShow, props.cardId)}
    >
      <CardDetail
        name={props.name}
        removeBack={props.toggleDetail}
        onInputChange={props.onInputChange}
        onItemCreate={props.onItemCreate}
        cardDetailVal={props.cardDetailVal}
        cardId={props.cardId}
        cardInfo={props.cardInfo}
        inputDetailShow={props.inputDetailShow}
        inputToggle={props.inputToggle}
      />
    </CardModal>
  ) : null;
  return (
    <>
      <li
        className={classes.Card}
        onClick={() => props.toggleDetail(props.inputDetailShow, props.cardId)}
      >
        <p>{props.name}</p>
      </li>
      {cardDetail}
    </>
  );
};

export default Card;
