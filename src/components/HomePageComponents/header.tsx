import { Link, useNavigate } from "react-router-dom";
import { Brain } from "lucide-react";

export default function HeaderComponent() {
  const navigate = useNavigate();
  const buttons = [
    { label: "Login", path: "/login" },
    { label: "Signup", path: "/signup" },
  ];

  return (
    <header className="w-full flex justify-between items-center px-8 py-4">
      {/* Logo section — navigates to home */}

      <Link
        to="/"
        className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition"
      >
        <Brain className="w-8 h-8" />
        <h1 className="text-2xl font-extrabold tracking-tight">CoachA1</h1>
      </Link>

      {/* Navigation links */}
      <nav className="hidden md:flex space-x-8 font-medium">
        <a className="hover:scale-105 transition px-2" href="#features">
          Features
        </a>
        <a className="hover:scale-105 transition px-2" href="#why">
          Why CoachA1
        </a>
        <a className="hover:scale-105 transition px-2 " href="#contact">
          Contact
        </a>
      </nav>

      {/* Login button */}
      <div>
        {buttons.map((btn) => (
          <button
            key={btn.path}
            onClick={() => navigate(btn.path)}
            className="px-6 py-2  font-medium hover:scale-105 hover:bg-black transition md:ml-1 cursor-pointerrounded cursor-pointer hover:text-white rounded"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </header>
  );
}
