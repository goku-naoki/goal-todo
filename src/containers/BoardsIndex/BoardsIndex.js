import React, { useState, useEffect } from "react";
import classes from "./BoardsIndex.module.css";
import Boards from "../../components/Boards/Boards";
import { db } from "../../firebase";
const BoardsIndex = () => {
  const [boards, setBoards] = useState([]);

  useEffect(async () => {
    let ref = db.ref("/boards");
    await ref
      .orderByChild("uid")
      .equalTo("ozRZYfahxnNJCa4bDH03vZu2DUB2")
      .on("value", (snapshot) => {
        const fetchData = snapshot.val()
          ? Object.keys(snapshot.val()).map((key) => ({
              id: key,
              ...snapshot.val()[key],
            }))
          : null;
        setBoards(fetchData);
      });
  }, []);

  return (
    <div className={classes.BoardsIndex}>
      <h3>
        <span style={{ marginRight: "10px" }}>$</span>ボード一覧
      </h3>
      <Boards boards={boards} />
    </div>
  );
};

export default BoardsIndex;
