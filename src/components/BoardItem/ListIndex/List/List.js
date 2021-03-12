import React, { useState } from "react";
import Cards from "../../Cards/Cards";
import ListInput from "../../ListInput/ListInput";
import classes from "./List.module.css";
const List = (props) => {
  return (
    <div className={classes.listWrapper}>
      <div className={classes.list}>
        <p className={classes.listName}>{props.name}</p>
        <Cards
          cards={props.cards}
          onInputChange={props.onInputChange}
          onItemCreate={props.onItemCreate}
          cardDetailVal={props.cardDetailVal}
          inputDetailShow={props.inputDetailShow}
          inputToggle={props.inputToggle}
          detailShow={props.detailShow}
          toggleDetail={props.toggleDetail}
        />
        <ListInput
          target="task"
          text="カードを追加"
          placeholder="このカードにタイトルを入力"
          value={props.cardVal}
          onInputChange={props.onInputChange}
          listId={props.listId}
          cardId={null}
          onItemCreate={props.onItemCreate}
          show={props.show}
          inputToggle={props.inputToggle}
        />
      </div>
    </div>
  );
};

export default List;
