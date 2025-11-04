import type { WorkoutForm } from "../types/workout";

export async function generateWorkoutPlan(userData: WorkoutForm) {
  const res = await fetch("http://localhost:3001/api/workout-plan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userData }),
  });

  if (!res.ok) {
    throw new Error("Failed to get AI workout plan");
  }

  return res.json();
}
