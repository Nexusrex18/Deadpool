const express = require("express");
const { sendMessageToGemini } = require("../controllers/chatbotController");

const router = express.Router();

// POST route for sending messages to Gemini AI
router.post("/", sendMessageToGemini);

module.exports = router;
