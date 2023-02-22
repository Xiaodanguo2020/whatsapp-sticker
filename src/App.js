import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PreLander from "./pages/PreLander";
import Mission from "./pages/Mission";
import ThankYou from "./pages/ThankYou";
import Pin from "./pages/Pin";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PreLander />} />
        <Route path="/mission/:name" element={<Mission />} />
        <Route path="/pin" element={<Pin />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;
