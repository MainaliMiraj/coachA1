import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import { questions } from "./WorkoutQuestions";
import { generateWorkoutPlan } from "@/lib/gemini";
import type { WorkoutForm, WorkoutPlanResponse } from "@/types/workout";

export default function WorkoutWizard({
  onBack,
}: Readonly<{ onBack: () => void }>) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Partial<WorkoutForm>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlanResponse | null>(
    null
  );

  const current = questions[step];
  const total = questions.length;
  const isLast = step === total - 1;

  async function selectOption(opt: string) {
    const key = current.key as keyof WorkoutForm;

    setForm((prev) => {
      const updated: Partial<WorkoutForm> = { ...prev, [key]: opt };
      return updated;
    });

    if (isLast) {
      setSubmitted(true);
      setLoading(true);

      const finalData = { ...form, [key]: opt } as WorkoutForm;
      console.log("SEND TO AI:", finalData);

      try {
        const aiResponse = await generateWorkoutPlan(finalData);
        console.log("AI RESULT:", aiResponse);
        setWorkoutPlan(aiResponse);
      } catch (err) {
        console.error("Something went wrong...", err);
      } finally {
        setLoading(false);
      }
    } else {
      setStep(step + 1);
    }
  }

  if (submitted) {
    if (loading) {
      return (
        <div className="text-center animate-pulse py-20">
          <h2 className="text-xl font-bold">Creating your workout plan...</h2>
          <p className="text-gray-500 mt-2">AI is thinking 🧠💪</p>
        </div>
      );
    }

    if (workoutPlan) {
      return (
        <div className="space-y-6 animate-fadeIn text-left max-w-md mx-auto">
          <h2 className="text-2xl font-bold">
            Your Personalized Training Plan
          </h2>

          <p className="text-gray-700">{workoutPlan.summary}</p>

          <div className="space-y-4">
            {workoutPlan.daily_workout_plan.map((day) => (
              <div key={day.day} className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-bold">{day.day}</h3>
                <ul className="text-sm mt-2 space-y-1 list-disc ml-4">
                  {day.workout.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Button onClick={onBack}>Back</Button>
        </div>
      );
    }
  }

  return (
    <div className="space-y-8 text-center animate-fadeIn min-h-[400px] flex flex-col justify-center">
      <div className="text-sm text-gray-500">
        {step + 1} / {total}
      </div>
      <h2 className="text-xl font-bold mb-4">{current.title}</h2>

      <div className="grid gap-3 mx-auto w-full max-w-sm">
        {current.options.map((opt) => (
          <Button
            key={opt}
            onClick={() => selectOption(opt)}
            className="cursor-pointer bg-white text-black hover:bg-black  hover:text-white border-gray-300 p-3 border"
          >
            {opt}
          </Button>
        ))}
      </div>

      {step > 0 && (
        <Button
          className="  absolute top-4 left-4 hover:scale-110 transition"
          onClick={() => setStep(step - 1)}
          variant="ghost"
          size="icon"
        >
          <ArrowLeft />
        </Button>
      )}
      {step === 0 && (
        <div className="absolute top-4 left-4 hover:scale-110 transition">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="cursor-pointer hover:scale-110 transition"
          >
            <ArrowLeft />
          </Button>
        </div>
      )}
    </div>
  );
}
