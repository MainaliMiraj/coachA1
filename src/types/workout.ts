export type WorkoutForm = {
  gender?: string;
  age_range?: string;
  experience?: string;
  goal?: string;
  body_type?: string;
  workout_days?: string;
  workout_time?: string;
  workout_style?: string;
  equipment?: string;
  injury?: string;
};

export type WorkoutPlanResponse = {
  summary: string;
  daily_workout_plan: {
    day: string;
    workout: string[];
  }[];
  recommended_exercises: string[];
  diet_tips: string[];
  injury_considerations?: string[];
};
