const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const movieRoutes = require("./routes/movieRoutes");
const authRoutes = require("./routes/authRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: "https://deadpool-six.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/movies", movieRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatbotRoutes);

// Default Route
app.get("/", (req, res) => res.send("Deadpool API is running!"));

// Error Handling Middleware (Optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: err.message,
  });
});

module.exports = app;
