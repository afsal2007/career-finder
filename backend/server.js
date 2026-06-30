
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 3000;

// Allow frontend (index.html) to call this server
app.use(cors());

// Allow server to read JSON sent from frontend
app.use(express.json());

// Connect to Gemini using key from .env file
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// ============================================================
// MAIN ROUTE: POST /career-result
// Frontend sends: { category, trail, scores }
// Server returns: { title, explanation, jobs }
// ============================================================
app.post("/career-result", async function (req, res) {

  const { category, trail, scores } = req.body;

  // Safety check — if frontend sends nothing, return an error
  if (!category) {
    return res.status(400).json({ error: "No category provided" });
  }

  // Build the prompt we send to Gemini
  const prompt = `
You are a friendly and encouraging career counselor.

A user just completed a 16-question career discovery quiz.
Their result is: ${category}
Their path through the quiz was: ${trail.join(" → ")}
Their category scores were: Tech=${scores.tech}, Creative=${scores.creative}, Trade=${scores.trade}, Business=${scores.business}

Based on this, write a response in this exact JSON format with no extra text, no markdown, no code blocks:
{
  "title": "a specific career title for this person (not just the broad category)",
  "explanation": "3-4 sentences. Explain why this career fits them based on their specific path and answers. Be warm, encouraging, and specific. Mention that no degree is required for this path.",
  "jobs": ["Job Title 1", "Job Title 2", "Job Title 3", "Job Title 4", "Job Title 5"]
}

The jobs should be real, specific job titles relevant to their exact niche path, not generic ones.
Keep the explanation under 100 words.
Return only valid JSON, nothing else.
`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Clean up response in case Gemini adds markdown code fences
    const cleaned = text.replace(/```json|```/g, "").trim();

    // Parse the JSON Gemini returns
    const parsed = JSON.parse(cleaned);

    // Send it back to the frontend
    res.json(parsed);

  } catch (error) {
    console.error("Gemini API error:", error.message);

    // If Gemini fails for any reason, send back static fallback text
    // so the quiz still works even without AI
    res.json({
      title: category,
      explanation: "Based on your answers, this career path aligns well with your interests and work style. Many people enter this field without a formal degree — skills, portfolio, and hands-on experience matter most here.",
      jobs: ["Entry Level Role", "Junior Specialist", "Freelancer", "Apprentice", "Trainee"]
    });
  }
});

// Simple health check — open localhost:3000 in browser to confirm server is running
app.get("/", function (req, res) {
  res.send("Pathfinder backend is running.");
});

// Start the server
app.listen(PORT, function () {
  console.log("Pathfinder backend running at http://localhost:" + PORT);
});