import { Routes, Route } from "react-router-dom";
import "./App.css";
import ChatbotLanding from "./components/LandingPage";
import FitnessOnBoarding from "./components/OnBoarding/FitnessOnBoarding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatbotLanding />} />
      <Route path="/onboarding" element={<FitnessOnBoarding />} />
    </Routes>
  );
}

export default App;
