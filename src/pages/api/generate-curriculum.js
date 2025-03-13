import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { topic, level, duration, goal } = req.body;

    const prompt = `Generate a detailed curriculum for the following:
    Topic: ${topic},
    Level: ${level},
    Duration: ${duration} weeks,
    Goal: ${goal}.
    
    Structure the output with bullet points for each week.`;

    try {
      const response = await axios.post(
        "https://api.perplexity.ai/chat/completions",
        {
          model: "sonar-pro",
          messages: [
            { role: "system", content: "Be precise and concise." },
            { role: "user", content: prompt },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`,
          },
        }
      );

      console.log("API Response:", response.data); // Log the response

      if (!response || !response.data || !response.data.choices) {
        throw new Error("Invalid response from Perplexity API");
      }

      const curriculumContent = response.data.choices[0].message.content;

      res.status(200).json({ description: curriculumContent });
    } catch (error) {
      console.error("Error generating curriculum:", error.message);
      res.status(500).json({ error: "Failed to generate curriculum" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
