import HeaderComponent from "./HomePageComponents/header";
import HeroComponent from "./HomePageComponents/HeroSection";
import FooterComponent from "./HomePageComponents/FooterComponent";
import FitnessOnboarding from "./OnBoarding/FitnessOnBoarding";

import { useState } from "react";

export default function LandingPage() {
  const [startJourney, setStartJourney] = useState(false);
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-blue-50 to-purple-50 flex flex-col">
      <HeaderComponent />
      {startJourney ? (
        <FitnessOnboarding />
      ) : (
        <HeroComponent onStart={() => setStartJourney(true)} />
      )}
      <FooterComponent />
    </div>
  );
}
