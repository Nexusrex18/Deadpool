import React, { useState } from "react";
import { chatWithBot } from "../services/api";
import deadpoolBg from "../assets/deadcht.jpg"; // Import Deadpool-themed background image

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls chat window state
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you, human?" },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Toggle chat window visibility
  const toggleChat = () => setIsOpen(!isOpen);

  // Handle input field changes
  const handleInputChange = (e) => setUserMessage(e.target.value);

  // Handle sending a message
 const handleSendMessage = async () => {
  if (!userMessage.trim()) return;

  // Add user's message to chat
  const updatedMessages = [
    ...messages,
    { sender: "user", text: userMessage },
  ];
  setMessages(updatedMessages);
  setUserMessage("");
  setIsLoading(true);

  try {
    // Append a string to make Deadpool-style response
    const deadpoolPrompt = `${userMessage} (Respond in Deadpool's humorous and sarcastic tone)`;

    // Send message to backend and get bot's reply
    const { data } = await chatWithBot(deadpoolPrompt);

    // The bot's response is now inside 'data.reply' from your backend
    const botMessage = data.reply || "Oops! Deadpool's busy saving the day.";
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: botMessage },
    ]);
  } catch (error) {
    console.error("Error in chatbot interaction:", error);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: "Deadpool's brain just had a glitch!" },
    ]);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 bg-red-700 text-white rounded-full p-4 shadow-lg hover:bg-red-800 transition font-bold border-2 border-black"
        >
          💬 Talk to Deadpool
        </button>
      )}
      {isOpen && (
        <div
          className="fixed bottom-4 right-4 w-80 shadow-lg rounded-lg border border-black overflow-hidden"
          style={{
            backgroundImage: `url(${deadpoolBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backdropFilter: "blur(5px)", // Blur effect for the background
          }}
        >
          {/* Chat Header */}
          <div className="bg-red-800 text-white px-4 py-2 flex justify-between items-center font-bold">
            <h3 className="text-lg">DeadBot</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300 transition"
            >
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div
            className="p-4 h-64 overflow-y-auto"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  msg.sender === "bot" ? "text-left" : "text-right"
                }`}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${
                    msg.sender === "bot"
                      ? "bg-red-100 text-red-800 font-semibold"
                      : "bg-red-700 text-white font-semibold"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left text-gray-300 font-semibold">
                Deadpool's typing...
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-2 border-t border-gray-800" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="flex items-center">
              <input
                type="text"
                value={userMessage}
                onChange={handleInputChange}
                className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-600"
                placeholder="Type your message here..."
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  color: "black",
                }}
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition font-bold border-2 border-black"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
