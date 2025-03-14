import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { topic, gradeLevel, duration, learningObjectives } = req.body;

    const prompt = `Generate a detailed curriculum for the following:
    Topic: ${topic},
    Grade Level: ${gradeLevel},
    Duration: ${duration} weeks,
    Learning Objectives: ${learningObjectives}.
    
    Structure the output with sections for each week (e.g., Week 1, Week 2, etc.). Use bullet points for key activities and objectives. Ensure each week's content is concise and actionable.`;

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/completions",
        {
          model: "google/gemini-2.0-flash-lite-001", // Specify the Gemini 2.0 Flash-Lite model
          prompt: prompt,
          max_tokens: 1500,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const curriculumContent = response.data.choices[0].text.trim();

      res.status(200).json({ description: curriculumContent });
    } catch (error) {
      console.error("Error generating curriculum:", error.message);
      res.status(500).json({ error: "Failed to generate curriculum" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
