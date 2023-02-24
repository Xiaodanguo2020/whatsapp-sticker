import React from "react";
import "./NrInput.css";
import Button from "./Button";
import mobile from "./mobile.svg";

export default function NrInput({ phoneNr, setPhoneNr, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit} className="form-container">
        <div className="input-container">
          <img src={mobile} className="mobile-icon" alt="" />
          <input
            className="number-input"
            type="tel"
            name="phone"
            value={phoneNr}
            patter="[0-9]{10}"
            onChange={(e) => {
              setPhoneNr(e.target.value);
            }}
            required
          />
        </div>
        <Button type="submit" label="Submit to Subscribe" />
      </form>
    </div>
  );
}
