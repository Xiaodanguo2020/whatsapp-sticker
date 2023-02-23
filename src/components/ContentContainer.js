import React from "react";
import "./ContentContainer.css";

export default function ContentContainer({ children, imageURL }) {
  return (
    <div className="content-container">
      <img className="img-monster" src={imageURL} alt=""></img>
      {children}
    </div>
  );
}
