import { useNavigate } from "react-router-dom";
import { Brain } from "lucide-react";

export default function HeaderComponent() {
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-between items-center px-8 py-4">
      {/* Logo section — navigates to home */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <Brain className="w-8 h-8" />
        <h1
          className="text-2xl font-extrabold tracking-tight"
          onClick={() => navigate("/")}
        >
          CoachA1
        </h1>
      </div>

      {/* Navigation links */}
      <nav className="hidden md:flex space-x-8 font-medium">
        <a className="hover:text-blue-600 transition" href="#features">
          Features
        </a>
        <a className="hover:text-blue-600 transition" href="#why">
          Why CoachA1
        </a>
        <a className="hover:text-blue-600 transition" href="#contact">
          Contact
        </a>
      </nav>

      {/* Login button */}
      <button
        onClick={() => navigate("/login")}
        className="px-6 py-2 border border-black font-medium hover:bg-blue-800 hover:text-white transition md:ml-6"
      >
        Login
      </button>
    </header>
  );
}
