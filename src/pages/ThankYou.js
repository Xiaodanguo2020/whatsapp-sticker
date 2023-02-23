import React from "react";
import ContentContainer from "../components/ContentContainer";
import InfoText from "../components/InfoText";

export default function ThankYou() {
  return (
    <div>
      <ContentContainer imageURL={"./cute_monster7.png"}>
        <h2 className="title">Thank you!</h2>
        <p className="margin-vertical font-md">
          Now you can express yourself with amazing stickers, Have Fun!
        </p>
      </ContentContainer>
      <InfoText />
    </div>
  );
}
