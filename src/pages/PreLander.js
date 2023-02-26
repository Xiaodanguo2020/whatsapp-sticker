import { Link } from "react-router-dom";
import Button from "../components/Button";
import ContentContainer from "../components/ContentContainer";
import InfoText from "../components/InfoText";
import Testmonial from "../components/Testmonial";

import "./PreLander.css";

export default function PreLander() {
  return (
    <div>
      <ContentContainer imageURL={"/cute_monster5.png"}>
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
      <Testmonial
        text="It's good. There are many cool stickers!"
        rating={4}
        author="Fikri Aziz"
        avatarURL="avatar_img.png"
      />
      <InfoText />
    </div>
  );
}
