import type { WorkoutForm } from "@/types/workout";
export type Question = {
  key: keyof WorkoutForm;
  title: string;
  options: string[];
};

export const questions: Question[] = [
  {
    key: "gender",
    title: "Your Gender",
    options: ["Male", "Female", "Other"],
  },
  {
    key: "age_range",
    title: "Your Age Range",
    options: ["Under 18", "18-24", "25-34", "35-44", "45+"],
  },
  {
    key: "experience",
    title: "Training Experience",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    key: "goal",
    title: "Your Primary Fitness Goal",
    options: [
      "Build muscle",
      "Lose fat",
      "Improve strength",
      "General fitness",
    ],
  },
  {
    key: "body_type",
    title: "What's your body type?",
    options: [
      "Ectomorph (Lean)",
      "Mesomorph (Athletic)",
      "Endomorph (Stockier)",
    ],
  },
  {
    key: "workout_days",
    title: "How many days per week can you train?",
    options: ["2", "3", "4", "5", "6", "7"],
  },
  {
    key: "workout_time",
    title: "Preferred Workout Time",
    options: ["Morning", "Afternoon", "Evening", "No preference"],
  },
  {
    key: "workout_style",
    title: "Preferred Training Style",
    options: [
      "Weights only",
      "Weights + Cardio",
      "Calisthenics / Bodyweight",
      "No preference",
    ],
  },
  {
    key: "equipment",
    title: "Available Equipment",
    options: ["Full gym access", "Limited equipment", "Home bodyweight only"],
  },
  {
    key: "injury",
    title: "Do you have any injuries?",
    options: [
      "No injuries",
      "Shoulder issues",
      "Knee issues",
      "Lower back issues",
      "Other",
    ],
  },
];
