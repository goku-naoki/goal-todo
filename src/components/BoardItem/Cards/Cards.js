import React from "react";
import classes from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = (props) => {
  const cards = props.cards
    ? props.cards.map((card) => (
        <Card
          name={card.name}
          key={card.id}
          cardId={card.id}
          cardInfo={card.info ? card.info : ""}
          onInputChange={props.onInputChange}
          onItemCreate={props.onItemCreate}
          cardDetailVal={props.cardDetailVal}
          inputDetailShow={props.inputDetailShow}
          inputToggle={props.inputToggle}
          detailShow={card.show}
          toggleDetail={props.toggleDetail}
        />
      ))
    : null;

  return <ul className={classes.Cards}>{cards}</ul>;
};

export default Cards;
