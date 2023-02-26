import "./PinInput.css";
import Button from "./Button";

export default function PinInput({ pin, setPin, handleSubmit }) {
  const changeDigit = (index, value) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    console.log("this is the pin", newPin); // newPin is ['1','2','1','1']
  };

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
                onChange={(e) => changeDigit(index, e.target.value)}
              />
            );
          })}
        </div>
        <Button type="Sumbit" label="Confirm" />
      </form>
    </div>
  );
}
