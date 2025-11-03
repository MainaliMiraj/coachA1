import { Routes, Route } from "react-router-dom";
import "./App.css";
import ChatbotLanding from "./components/LandingPage";
import FitnessOnBoarding from "./components/OnBoarding/FitnessOnBoarding";

import HeaderComponent from "./components/HomePageComponents/header";
import FooterComponent from "./components/HomePageComponents/FooterComponent";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-blue-50 to-purple-50 flex flex-col">
      {/* ✅ Always Visible */}
      <HeaderComponent />

      {/* ✅ Page Content */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<ChatbotLanding />} />
          <Route path="/onboarding" element={<FitnessOnBoarding />} />
        </Routes>
      </div>

      {/* ✅ Always Visible */}
      <FooterComponent />
    </div>
  );
}

export default App;
