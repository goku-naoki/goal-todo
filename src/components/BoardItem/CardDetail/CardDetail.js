import React, { useState } from "react";
import ModalHeader from "../../UI/Modal/ModalHeader/ModalHeader";
import ListInput from "../ListInput/ListInput";
import classes from "./CardDetail.module.css";

const CardDetail = (props) => {
  // const [inputShow, setInputShow] = useState(false);

  // const cardInfo = props.card  Info ? <p>{props.cardInfo}</p> : null;
  return (
    <div className={classes.CardDetail}>
      <div className={classes.header}>
        <h4>{props.name}</h4>
        <p onClick={props.removeBack}>X</p>
      </div>
      <div className={classes.info}>
        <h4>説明</h4>
        {/* {cardInfo} */}
        <ListInput
          target="cardDetail"
          text="詳しい説明を入力して下さい"
          placeholder="詳しい説明を入力してください"
          show={props.inputDetailShow}
          inputToggle={props.inputToggle}
          // inputToggle={() => setInputShow((prevState) => !prevState)}
          onInputChange={props.onInputChange}
          onItemCreate={props.onItemCreate}
          value={props.cardDetailVal}
          cardId={props.cardId}
          listId={null}
          cardInfo={props.cardInfo}
        />
      </div>
    </div>
  );
};

export default CardDetail;
