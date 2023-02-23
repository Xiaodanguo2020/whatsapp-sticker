import React from "react";
import Button from "../components/Button";
import ContentContainer from "../components/ContentContainer";
import InfoText from "../components/InfoText";
import "./PreLander.css";
import { useNavigate, Link } from "react-router-dom";

export default function PreLander() {
  const navigate = useNavigate();

  return (
    <div>
      <ContentContainer imageURL={"./cute_monster6.png"}>
        <h2 className="title">
          Express your self with <br />
          <span className="bold">New</span>{" "}
          <span className="highlight">WhatsApp Stickers</span>
        </h2>
        <p className="choose-text font-md">choose your sticker type</p>
        <div className="buttons-container">
          <Link to="/mission/funny">
            <Button label="Funny" />
          </Link>
          <Link to="/mission/romance">
            <Button label="Romance" />
          </Link>
        </div>
      </ContentContainer>
      <img src="/MORE.png" alt=""></img>
      <InfoText />
    </div>
  );
}
