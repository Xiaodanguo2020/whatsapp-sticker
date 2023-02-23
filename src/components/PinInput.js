import React from "react";
import "./PinInput.css";
import Button from "./Button";

export default function PinInput({ pin, setPin, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-container">
          {pin?.map((value, index) => {
            return (
              <input
                className="pin-input"
                type="text"
                key={index}
                value={value}
                maxLength={1}
                onChange={(e) => setPin(e.target.value)}
              />
            );
          })}
        </div>
        <Button type="Sumbit" label="Confirm" />
      </form>
    </div>
  );
}
