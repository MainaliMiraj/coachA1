import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
console.log("✅ Loaded key:", process.env.GOOGLE_API_KEY ? "YES" : "NO");

app.post("/api/workout-plan", async (req, res) => {
  const { userData } = req.body;

  const prompt = `
You are an expert fitness coach. Create a weekly workout plan based on this user:

${JSON.stringify(userData, null, 2)}

Return ONLY valid JSON.
Do NOT include code blocks, backticks or comments.
The JSON format MUST be:

{
  "summary": "",
  "daily_workout_plan": [
    { "day": "", "workout": [] }
  ],
  "recommended_exercises": [],
  "diet_tips": [],
  "injury_considerations": []
}
`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);

    let text = result.response.text();

    text = text.replace(/```json|```/g, "").trim(); // ✅ strip code fences

    const json = JSON.parse(text); // ✅ safe parsing
    res.json(json);
  } catch (e) {
    console.error("❌ Something went wrong..", e);
    res.status(500).json({ error: "Something Went wrong" });
  }
});

app.listen(3001, () => console.log("Server running on 3001 ✅"));
