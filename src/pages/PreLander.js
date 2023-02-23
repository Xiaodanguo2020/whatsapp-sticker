import React from "react";
import Button from "../components/Button";
import ContentContainer from "../components/ContentContainer";
import "./PreLander.css";
// import { useHistory } from "react-router-dom";

export default function PreLander() {
  // const history = useHistory();

  // const handleClick = (lable) => {
  //   history.push(`/mission/:${lable}`);
  // };

  return (
    <div>
      <img src="./cute_monster6.png" alt="monster_pic"></img>
      <ContentContainer>
        <h2 className="title">
          Express your self with <br />
          <span className="bold">New</span>{" "}
          <span className="highlight">WhatsApp Stickers</span>
        </h2>
        <p className="choose-text font-md">choose your sticker type</p>
        <div className="buttons-container">
          <Button label="Funny" />
          <Button label="Romance" />
        </div>
      </ContentContainer>
    </div>
  );
}
