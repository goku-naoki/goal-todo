import React from "react";
import classes from "./NewOptions.module.css";
import ModalHeader from "../../UI/Modal/ModalHeader/ModalHeader";
const NewOptions = (props) => {
  return (
    <div className={classes.NewOptions}>
      <ModalHeader onToggle={props.onToggle} />
      <ul>
        <li onClick={(e) => props.onOpen(e)} data-back={true}>
          <h4>ボードを作成</h4>
          <p>
            Trelloのボードは、作成したさまざまなリストに必要な項目を記載したカードを順に並べて使用します。プロジェクト管理や情報の進捗管理など、あらゆることを整理、管理することができます。
          </p>
        </li>
        <li>
          <h4>テンプレートを使用する</h4>
          <p>ボードテンプレートを使用すれば簡単です</p>
        </li>
        <li>
          <h4>チームを作成する</h4>
          <p>
            チームとは、メンバーとボードをグループにまとめたものです。会社や趣味の情報整理や、家族や友人との情報共有に役立ちます。
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NewOptions;
