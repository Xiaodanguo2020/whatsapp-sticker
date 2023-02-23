import React from "react";
import "./NrInput.css";
import Button from "./Button";

export default function NrInput({ phoneNr, setPhoneNr, onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit} className="form-container">
        <input
          className="number-input"
          type="tel"
          name="phone"
          value={phoneNr}
          onChange={(e) => {
            setPhoneNr(e.target.value);
          }}
          required
        />
        <Button type="submit" label="Submit to Subscribe" />
        <i className="fas fa-mobile-screen-button"></i>
      </form>
    </div>
  );
}
