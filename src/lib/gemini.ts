import type { WorkoutForm } from "../types/workout";
export async function generateWorkoutPlan(userData: WorkoutForm) {
  const res = await fetch("http://localhost/3001/api/workout-plan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userData }),
  });

  return await res.json();
}
