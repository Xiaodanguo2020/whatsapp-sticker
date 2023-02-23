import React from "react";
import NrInput from "../components/NrInput";
import ContentContainer from "../components/ContentContainer";
import "./Mission.css";
import { useState } from "react";
import axios from "axios";

export default function Mission() {
  const [phoneNr, setPhoneNr] = useState(null);
  const url = "https://75j6v3-8080.preview.csb.app/api/v1/trigger-pin";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(url, {
      params: {
        msisdn: phoneNr,
        user_id: "anything",
      },
    });

    console.log("this is response", response.data);
  };

  return (
    <div>
      <img src="./cute_monster5.png" alt="monster_pic"></img>
      <ContentContainer>
        <h2 className="title">You've got good sense of humor</h2>
        <p className="enter-nr font-md">
          Enter your phone number to get all sticker packs
        </p>
        <div className="input-container">
          <NrInput
            onSubmit={handleSubmit}
            phoneNr={phoneNr}
            setPhoneNr={setPhoneNr}
          />
        </div>
      </ContentContainer>
    </div>
  );
}
