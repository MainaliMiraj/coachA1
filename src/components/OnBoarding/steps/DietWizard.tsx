import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function DietWizard({
  onBack,
}: Readonly<{ onBack: () => void }>) {
  const [goal, setGoal] = useState("");
  const [food, setFood] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="space-y-4 text-center animate-fadeIn">
        <h2 className="text-xl font-bold">Your Diet Summary</h2>
        <p className="text-sm opacity-80">
          (AI will analyze these inputs soon)
        </p>
        <pre className="bg-gray-100 p-4 rounded-xl text-left text-sm">
          {JSON.stringify({ goal, food }, null, 2)}
        </pre>
        <Button onClick={onBack}>Back</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Diet Questions</h2>

      <div className="space-y-2">
        <div className="font-semibold">Primary Goal</div>
        <div className="grid grid-cols-2 gap-2">
          {["Body Recomposition", "Lose Fat", "Build Muscle"].map((opt) => (
            <Button
              key={opt}
              variant={goal === opt ? "default" : "outline"}
              onClick={() => setGoal(opt)}
            >
              {opt}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-semibold">What do you currently eat in a day?</div>
        <textarea
          className="w-full border p-3 min-h-[120px] focus:outline-none"
          placeholder="List your daily meals..."
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
      </div>

      <Button
        className="w-full"
        disabled={!goal || !food.trim()}
        onClick={() => setSubmitted(true)}
      >
        Submit Diet Info
      </Button>
    </div>
  );
}
