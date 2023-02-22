import React from "react";
import "./PinInput.css";

export default function PinInput() {
  return (
    <div>
      <input
        className="pin-input"
        type="text"
        id="pin1"
        name="pin1"
        inputMode="numeric"
        pattern="[0-9]"
        maxLength="1"
        required
      />

      <input
        className="pin-input"
        type="text"
        id="pin2"
        name="pin2"
        inputMode="numeric"
        pattern="[0-9]"
        maxLength="1"
        required
      />
      <input
        className="pin-input"
        type="text"
        id="pin3"
        name="pin3"
        inputMode="numeric"
        pattern="[0-9]"
        maxLength="1"
        required
      />
      <input
        className="pin-input"
        type="text"
        id="pin4"
        name="pin4"
        inputMode="numeric"
        pattern="[0-9]"
        maxLength="1"
        required
      />
    </div>
  );
}
