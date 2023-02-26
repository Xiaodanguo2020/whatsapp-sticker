import React from "react";
import "./ContentContainer.css";

export default function ContentContainer({ children, imageURL, imgBehind }) {
  return (
    <div className="content-container">
      <img
        className={`img-monster ${imgBehind ? "img-behind" : ""}`}
        src={imageURL}
        alt=""
      ></img>
      {children}
    </div>
  );
}
