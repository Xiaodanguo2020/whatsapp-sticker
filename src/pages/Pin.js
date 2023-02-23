import React from "react";
import PinInput from "../components/PinInput";
import { useState } from "react";
import ContentContainer from "../components/ContentContainer";
import "./Pin.css";

export default function Pin() {
  const [pin, setPin] = useState(["", "", "", ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPin = pin.join("");
    console.log(fullPin);
  };

  return (
    <div>
      <ContentContainer>
        <PinInput handleSubmit={handleSubmit} pin={pin} setPin={setPin} />
      </ContentContainer>
    </div>
  );
}
