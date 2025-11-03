import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

import ChoosePath from "./steps/ChoosePath";
import WorkoutWizard from "./steps/WorkoutWizard";
import DietWizard from "./steps/DietWizard";

export default function FitnessOnboarding() {
  const [step, setStep] = useState<"choose" | "workout" | "diet">("choose");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50 relative">
      <Card className="w-full max-w-xl shadow-xl relative">
        {/* Close button */}
        <button
          onClick={() => navigate("/")}
          className="absolute right-3 top-3 bg-white/80 backdrop-blur-md rounded-full p-2 shadow hover:scale-110 active:scale-95 transition-all duration-200 hover:bg-blue-600 cursor-pointer "
        >
          <X className="w-4 h-4 text-black hover:text-white" />
        </button>

        <CardContent className="p-8 space-y-6">
          {step === "choose" && <ChoosePath onSelect={setStep} />}
          {step === "workout" && (
            <WorkoutWizard onBack={() => setStep("choose")} />
          )}
          {step === "diet" && <DietWizard onBack={() => setStep("choose")} />}
        </CardContent>
      </Card>
    </div>
  );
}
