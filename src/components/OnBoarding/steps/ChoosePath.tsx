import { Dumbbell, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChoosePath({
  onSelect,
}: Readonly<{
  onSelect: (v: "workout" | "diet") => void;
}>) {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        What do you want to start with?
      </h1>

      <div className="space-y-4">
        <Button
          className="w-full text-lg py-6 flex items-center justify-center gap-3 rounded-xl 
          border border-gray-200 bg-white hover:border-blue-500 hover:bg-blue-50 transition-all duration-200
          hover:scale-[1.02]"
          variant="outline"
          onClick={() => onSelect("workout")}
        >
          <Dumbbell className="w-5 h-5" /> Workout Plan
        </Button>

        <Button
          className="w-full text-lg py-6 flex items-center justify-center gap-3 rounded-xl 
          border border-gray-200 bg-white hover:border-green-500 hover:bg-green-50 transition-all duration-200
          hover:scale-[1.02]"
          variant="outline"
          onClick={() => onSelect("diet")}
        >
          <Apple className="w-5 h-5" /> Diet Plan
        </Button>
      </div>
    </div>
  );
}
