import React from "react";
import NrInput from "../components/NrInput";
import ContentContainer from "../components/ContentContainer";
import InfoText from "../components/InfoText";
import "./Mission.css";
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Mission() {
  const { name } = useParams();

  const [phoneNr, setPhoneNr] = useState("");
  const [isValid, setIsValid] = useState(true);

  const regexPattern = /^06\d{8}$/; //Regex check for Dutch mobile number

  const navigate = useNavigate();

  const url = "https://75j6v3-8080.preview.csb.app/api/v1/trigger-pin";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!regexPattern.test(phoneNr)) {
      setIsValid(false);
    } else {
      const response = await axios.get(url, {
        params: {
          msisdn: phoneNr,
          user_id: "anything",
        },
      });
      console.log("this is response", response.data);
      navigate("/pin");
    }
  };

  return (
    <div>
      <ContentContainer
        imageURL={
          name === "funny" ? "/cute_monster5.png" : "/cute_monster8.png"
        }
      >
        <h2 className="title">
          {name === "funny"
            ? "You've got good sense of humor"
            : "You're so Romantic"}
        </h2>
        <p className="margin-vertical font-md">
          Enter your number to get all the sticker packs
        </p>
        <div className="input-container">
          <NrInput
            onSubmit={handleSubmit}
            phoneNr={phoneNr}
            setPhoneNr={setPhoneNr}
          />
        </div>
        <p className="error-text">
          {isValid ? "" : "number entered not valid"}
        </p>
      </ContentContainer>
      <img src="/MORE.png" alt=""></img>
      <InfoText />
    </div>
  );
}
