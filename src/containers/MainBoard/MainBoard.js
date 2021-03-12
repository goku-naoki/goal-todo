import React, { useState, useEffect, useRef } from "react";
import classes from "./MainBoard.module.css";
import { db } from "../../firebase";
import { withRouter } from "react-router-dom";
import BoardHeader from "../../components/BoardItem/BoardHeader/BoardHeader";

import ListIndex from "../../components/BoardItem/ListIndex/ListIndex";

const MainBoard = (props) => {
  const [boardDetail, setBoardDetail] = useState(null);
  const [listInput, setListInput] = useState("");
  const [lists, setLists] = useState(null);
  const [cardInput, setCardInput] = useState("");
  const [cards, setCards] = useState(null);
  const [cardDetailInput, setCardDetailInput] = useState("");
  const [inputDetailShow, setInputDetailShow] = useState(false);

  useEffect(async () => {
    const boardId = props.history.location.pathname.split("/")[2];
    let ref = db.ref("/boards");
    await ref
      .orderByKey()
      .equalTo(boardId)
      .on("child_added", (snapshot) => {
        setBoardDetail({ ...snapshot.val(), show: false, id: snapshot.key });
      });
  }, []);

  useEffect(async () => {
    const boardId = props.history.location.pathname.split("/")[2];
    let ref = db.ref("/lists");
    await ref
      .orderByChild("boardId")
      .equalTo(boardId)
      .on("value", (snapshot) => {
        const fetchData = snapshot.val()
          ? Object.keys(snapshot.val()).map((key) => ({
              id: key,
              show: false, //cardのinput切り替え
              ...snapshot.val()[key],
            }))
          : null;
        setLists(fetchData);
      });
  }, []);

  useEffect(async () => {
    debugger;
    const boardId = props.history.location.pathname.split("/")[2];
    let ref = db.ref("/cards");
    await ref
      .orderByChild("boardId")
      .equalTo(boardId)
      .once("value", (snapshot) => {
        const fetchData = snapshot.val()
          ? Object.keys(snapshot.val()).map((key) => ({
              id: key,
              ...snapshot.val()[key],
              show: false,
            }))
          : null;

        setCards(fetchData);
      });
  }, []);

  useEffect(() => {}, [cards]);

  // const [detailShow, setDetailShow] = useState(false);
  const onInputChangeHandler = (name, e) => {
    switch (e.target.placeholder) {
      case "リストを追加":
        return setListInput(e.target.value);
      case "このカードにタイトルを入力":
        return setCardInput(e.target.value);
      case "詳しい説明を入力してください":
        return setCardDetailInput(e.target.value);
    }
  };

  const onCreateItemHandler = async (e, listId, cardId) => {
    e.preventDefault();
    if (listId) {
      let ref = db.ref("/cards");
      const data = {
        name: cardInput,
        listId: listId,
        boardId: props.history.location.pathname.split("/")[2],
      };
      const newRef = ref.push(data); //await使わなくてもいけてる
      setCards((prevState) => {
        return prevState
          ? [...prevState, { ...data, id: newRef.key }]
          : [{ ...data, id: newRef.key }];
      });
      setCardInput("");
    } else if (cardId) {
      let ref = db.ref("cards/" + cardId);
      const currentData = cards.find((card) => card.id == cardId);
      const data = {
        name: currentData.name,
        boardId: currentData.boardId,
        listId: currentData.listId,
        info: cardDetailInput,
      };

      await ref.update(data).then((res) => {
        setCardDetailInput("");
        setCards((prevState) => {
          return [
            ...[...prevState].map((card) =>
              cardId != card.id
                ? { ...card }
                : { id: cardId, ...data, show: true }
            ),
          ];
        });
        setInputDetailShow((prevState) => !prevState);
      });
    } else {
      let ref = db.ref("/lists");
      const data = {
        name: listInput,
        boardId: props.history.location.pathname.split("/")[2],
      };
      await ref.push(data).then((res) => {
        setListInput("");
      });
    }
  };

  //リストにshowを持たせないとね
  const onInputToggle = (listId, info = null) => {
    if (listId) {
      setLists((prevState) => {
        return [
          ...[...prevState].map((list) =>
            listId != list.id
              ? { ...list, show: false }
              : { ...list, show: !list.show }
          ),
        ];
      });
    } else if (info != null) {
      setInputDetailShow((prevState) => !prevState);
      info != "" && setCardDetailInput(info);
    } else {
      setBoardDetail((prevState) => ({ ...prevState, show: !prevState.show }));
    }
  };

  const toggleDetail = (showDetailInput, cardId) => {
    showDetailInput && setInputDetailShow((prevState) => !prevState);
    setCards((prevState) => {
      return [
        ...[...prevState].map((card) =>
          cardId != card.id
            ? { ...card, show: false }
            : { ...card, show: !card.show }
        ),
      ];
    });
  };

  const board = boardDetail ? (
    <div
      className={classes.board}
      style={{ backgroundColor: `${boardDetail.color}` }}
    >
      <BoardHeader board={boardDetail} />
      <ListIndex
        onInputChange={onInputChangeHandler}
        onItemCreate={onCreateItemHandler}
        listVal={listInput}
        cardVal={cardInput}
        lists={lists}
        cards={cards}
        showListInput={boardDetail.show}
        inputToggle={onInputToggle}
        inputDetailShow={inputDetailShow}
        cardDetailVal={cardDetailInput}
        // detailShow={detailShow}
        toggleDetail={toggleDetail}
      />
    </div>
  ) : null;

  return board;
};

export default withRouter(MainBoard);
