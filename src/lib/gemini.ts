import type { WorkoutForm } from "../types/workout";
import API_BASE_URL from "../config";

export async function generateWorkoutPlan(userData: WorkoutForm) {
  const res = await fetch(`${API_BASE_URL}/api/workout-plan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userData }),
  });

  if (!res.ok) {
    throw new Error("Failed to get AI workout plan");
  }

  return res.json();
}
