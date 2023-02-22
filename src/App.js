import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import NrInput from "./components/NrInput";
import PinInput from "./components/PinInput";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <div className="App">
      <ContentContainer>
        <Button label="Click me" />
        <NrInput />
        <PinInput />
      </ContentContainer>
    </div>
  );
}

export default App;
