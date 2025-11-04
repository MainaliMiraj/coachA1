import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          size="icon"
          className="p-2 cursor-pointer absolute top-4 right-4  hover:scale-110 transition"
        >
          <X className="w-4 h-4 text-black " />
        </Button>

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
