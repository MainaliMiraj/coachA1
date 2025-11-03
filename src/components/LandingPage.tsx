import HeroComponent from "./HomePageComponents/HeroSection";

import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-blue-50 to-purple-50 flex flex-col">
      <HeroComponent onStart={() => navigate("/onboarding")} />
    </div>
  );
}
