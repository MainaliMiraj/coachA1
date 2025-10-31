import { motion } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-blue-50 to-purple-50 flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8" />
          <h1 className="text-2xl font-extrabold tracking-tight">CoachA1</h1>
        </div>
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
        <button className="px-6 py-2 border border-black font-medium hover:bg-blue-800 hover:text-white transition md:ml-6 cursor-pointer">
          Login
        </button>
      </header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-center flex-1 px-8 py-10 gap-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Become the Best Version of You with{" "}
            <span className="text-blue-600">CoachA1</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-lg">
            Your personal AI mentor for fitness, productivity, learning,
            trading, and life. Smarter conversations, real growth.
          </p>
          <button className="flex items-center space-x-2 px-8 py-3 text-lg bg-blue-600 text-white rounded-2xl shadow-lg hover:scale-105 transition w-fit">
            <span>Start Your Journey</span>
            <ArrowRight />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md space-y-4 border border-gray-200"
        >
          <div className="bg-gray-100 p-4 rounded-xl w-fit max-w-[80%] shadow">
            👋 Hey! I'm CoachA1 — here to push you to greatness.
          </div>
          <div className="bg-blue-600 text-white p-4 rounded-xl w-fit self-end max-w-[80%] shadow">
            Help me build discipline.
          </div>
          <div className="bg-gray-100 p-4 rounded-xl w-fit max-w-[80%] shadow">
            Discipline is not motivation — it's structure. Let's build your
            daily system ✅
          </div>
          <div className="bg-blue-600 text-white p-4 rounded-xl w-fit self-end max-w-[80%] shadow">
            Create a habit plan for me.
          </div>
        </motion.div>
      </section>
      {/* Footer */}
      <footer className="w-full text-center p-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} CoachA1 — Unlock Your Potential
      </footer>
    </div>
  );
}
