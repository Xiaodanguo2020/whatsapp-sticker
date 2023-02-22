import React from "react";
import "./NrInput.css";

export default function NrInput() {
  return (
    <div>
      <input className="number-input" type="tel" name="phone" required />
      <i className="fas fa-mobile-screen-button"></i>
    </div>
  );
}
