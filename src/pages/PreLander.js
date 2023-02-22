import React from "react";
import Button from "../components/Button";
import ContentContainer from "../components/ContentContainer";
import "./PreLander.css";

export default function PreLander() {
  return (
    <div>
      <img src="./cute_monster6.png"></img>
      <ContentContainer>
        <h2 className="title">
          Express your self with <br />
          <span className="bold">New</span>{" "}
          <span className="highlight">WhatsApp Stickers</span>
        </h2>
        <p>choose your sticker type</p>
        <div className="buttons-container">
          <Button label="Funny" />
          <Button label="Romance" />
        </div>
      </ContentContainer>
    </div>
  );
}
