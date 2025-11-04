import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/workout-plan", async (req, res) => {
  const { userData } = req.body;

  const prompt = `
You are an expert fitness coach. Based on the user's profile below, create a weekly workout program.

Generate workout plan JSON ONLY:
${JSON.stringify(userData, null, 2)}

Return output in valid JSON only with keys:
- summary
- daily_workout_plan
- recommended_exercises
- diet_tips
- injury_considerations
`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json(JSON.parse(text));
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "AI error" });
  }
});

app.listen(3001, () => console.log("Server running on 3001 ✅"));
