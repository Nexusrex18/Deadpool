const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`;

const sendMessageToGemini = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    console.error("Message is required but not provided.");
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            { text: message },
          ],
        },
      ],
      generationConfig: {
        temperature: 1.0,
        topP: 0.95,
        candidateCount: 1,
      },
    };

    // Sending request to Gemini API
    const response = await axios.post(GEMINI_API_URL, payload, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Response received:", response.data);

    // Extracting the text from the response structure
    const content = response?.data?.candidates?.[0]?.content;
    if (content && content.parts && content.parts.length > 0) {
      const botReply = content.parts[0]?.text || "Sorry, I couldn't understand that.";
      res.status(200).json({ reply: botReply });
    } else {
      res.status(500).json({ error: "No valid content received from the model." });
    }
  } catch (error) {
    console.error("Error communicating with Gemini API:", error.message);
    res.status(500).json({ error: "Failed to communicate with Gemini AI." });
  }
};



module.exports = { sendMessageToGemini };
