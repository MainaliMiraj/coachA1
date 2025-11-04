import { Dumbbell, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChoosePath({
  onSelect,
}: {
  onSelect: (v: "workout" | "diet") => void;
}) {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        What do you want to start with?
      </h1>

      <div className="space-y-4">
        <Button
          className="w-full text-lg py-6 flex items-center justify-center gap-3 
            bg-white hover:bg-black hover:text-white transition-all duration-100
          hover:scale-[1.01] cursor-pointer"
          variant="outline"
          onClick={() => onSelect("workout")}
        >
          <Dumbbell className="w-5 h-5" /> Workout Plan
        </Button>

        <Button
          className="w-full text-lg py-6 flex items-center justify-center gap-3 
           bg-white hover:bg-black transition-all duration-150
          hover:scale-[1.01] hover:text-white cursor-pointer"
          variant="outline"
          onClick={() => onSelect("diet")}
        >
          <Apple className="w-5 h-5" /> Diet Plan
        </Button>
      </div>
    </div>
  );
}
