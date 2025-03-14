import axios from "axios";

const openai = {
  async createCompletion(prompt, options) {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/completions",
      {
        model: "text-davinci-003", // Check if this model is supported by OpenRouter
        prompt: prompt,
        max_tokens: options.maxTokens,
        temperature: options.temperature,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  },
};

export default openai;
