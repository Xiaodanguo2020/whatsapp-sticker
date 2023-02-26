import React from "react";
import PinInput from "../components/PinInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import InfoText from "../components/InfoText";
import axios from "axios";
import "./Pin.css";
import Testmonial from "../components/Testmonial";

export default function Pin() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [isCorrect, setIsCorrect] = useState(true);
  const url = "https://75j6v3-8080.preview.csb.app/api/v1/verify-pin";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const fullPin = pin.join("");
      const response = await axios.get(url, {
        params: {
          pin: fullPin,
          user_id: "anything",
        },
      });
      console.log("this is my response", response.data);

      if (response.data.success) {
        navigate("/thank-you");
      }
    } catch (e) {
      setIsCorrect(false);
      console.log(e.data);
    }
  };

  return (
    <div>
      <ContentContainer imageURL={"./cute_monster6.png"} imgBehind={true}>
        <h2 className="title">The sticker packs is ready!</h2>
        <p className="margin-vertical font-md">
          We have send you a 4 digit code <br /> please enter below to confirm
          subscription!
        </p>
        <div className="input-container">
          <PinInput handleSubmit={handleSubmit} pin={pin} setPin={setPin} />
        </div>
        <p className="error-text">
          {isCorrect ? "" : "pin entered not correct, please retry"}
        </p>
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
