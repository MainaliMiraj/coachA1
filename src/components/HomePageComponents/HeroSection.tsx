import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection({
  onStart,
}: Readonly<{ onStart: () => void }>) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center flex-1 px-8 py-5 gap-10">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl space-y-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Become the Best Version of You with{" "}
          <span className="text-gray-400">CoachA1</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-lg">
          Your personal AI mentor for fitness, productivity, learning, trading,
          and life. Smarter conversations, real growth.
        </p>
        <button
          onClick={onStart}
          className="flex items-center space-x-2 px-8 py-3 text-lg bg-black text-white rounded-2xl shadow-lg hover:scale-105 transition w-fit cursor-pointer"
        >
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
        <div className="bg-black text-white p-4 rounded-xl w-fit self-end max-w-[80%] shadow">
          Help me build discipline.
        </div>
        <div className="bg-gray-100 p-4 rounded-xl w-fit max-w-[80%] shadow">
          Discipline is not motivation — it's structure. Let's build your daily
          system ✅
        </div>
        <div className="bg-black text-white p-4 rounded-xl w-fit self-end max-w-[80%] shadow">
          Create a habit plan for me.
        </div>
      </motion.div>
    </section>
  );
}
