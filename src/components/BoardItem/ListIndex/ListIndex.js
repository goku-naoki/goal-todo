import React from "react";
import ListInput from "../ListInput/ListInput";
import List from "./List/List";
import classes from "./ListIndex.module.css";

const ListIndex = (props) => {
  const lists = props.lists
    ? props.lists.map((list) => (
        <List
          name={list.name}
          key={list.id}
          listId={list.id}
          show={list.show}
          cardVal={props.cardVal}
          onInputChange={props.onInputChange}
          onItemCreate={props.onItemCreate}
          cards={
            props.cards
              ? props.cards.filter((card) => card.listId == list.id)
              : null
          }
          inputToggle={props.inputToggle}
          cardDetailVal={props.cardDetailVal}
          inputDetailShow={props.inputDetailShow}
          detailShow={props.detailShow}
          toggleDetail={props.toggleDetail}
        />
      ))
    : null;
  return (
    <div className={classes.ListIndex}>
      {lists}
      <ListInput
        target="list"
        text="リストを追加"
        placeholder="リストを追加"
        value={props.listVal}
        onInputChange={props.onInputChange}
        onItemCreate={props.onItemCreate}
        show={props.showListInput}
        listId={null}
        cardId={null}
        inputToggle={props.inputToggle}
      />
    </div>
  );
};

export default ListIndex;
