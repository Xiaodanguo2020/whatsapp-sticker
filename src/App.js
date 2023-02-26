import "./App.css";
import { Routes, Route } from "react-router-dom";
import PreLander from "./pages/PreLander";
import Mission from "./pages/Mission";
import ThankYou from "./pages/ThankYou";
import Pin from "./pages/Pin";
import HeaderBg from "./components/HeaderBg";

function App() {
  return (
    <div className="app">
      <HeaderBg />
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
