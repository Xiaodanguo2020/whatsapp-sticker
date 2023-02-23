import React from "react";
import Button from "../components/Button";
import NrInput from "../components/NrInput";
import ContentContainer from "../components/ContentContainer";
import "./Mission.css";

export default function Mission() {
  return (
    <div>
      <img src="./cute_monster6.png" alt="monster_pic"></img>
      <ContentContainer>
        <h2 className="title">You've got good sense of humor</h2>
        <p className="enter-nr font-md">
          Enter your phone number to get all sticker packs
        </p>
        <div className="input-container">
          <NrInput />
          <Button label="Funny" />
        </div>
      </ContentContainer>
    </div>
  );
}
