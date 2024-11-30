import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gif from "../assets/deadpoolg.gif"; // Import the Deadpool GIF

const AnotherGame = () => {
  const [score, setScore] = useState(0);
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const [gameActive, setGameActive] = useState(true);

  // Function to generate a random target position
  const generateRandomPosition = () => {
    const x = Math.random() * (window.innerWidth - 100); // Subtract width of the target to avoid overflow
    const y = Math.random() * (window.innerHeight - 100); // Subtract height of the target to avoid overflow
    return { x, y };
  };

  // Handle target click
  const handleTargetClick = () => {
    if (gameActive) {
      setScore(score + 1);
      setTargetPosition(generateRandomPosition()); // Move target to a new random location
    }
  };

  useEffect(() => {
    if (gameActive) {
      const interval = setInterval(() => {
        setTargetPosition(generateRandomPosition());
      }, 1000); // Change target position every second

      return () => clearInterval(interval); // Cleanup interval when component unmounts
    }
  }, [gameActive]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#242424] text-white">
      <h1 className="text-4xl font-bold mb-6">Deadpool Shooting Game</h1>

      {/* Display Score */}
      <div className="mb-6 text-xl">
        <p>Score: {score}</p>
      </div>

      {/* Game area */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ height: "80vh", position: "relative" }}
      >
        {/* Target that moves around */}
        <div
          onClick={handleTargetClick}
          style={{
            position: "absolute",
            top: `${targetPosition.y}px`,
            left: `${targetPosition.x}px`,
            width: "100px", // Size of the target
            height: "100px", // Size of the target
            cursor: "pointer",
            transition: "top 0.5s, left 0.5s", // Smooth transition for movement
          }}
        >
          {/* Deadpool GIF as the target */}
          <img
            src={gif}
            alt="Deadpool Target"
            className="w-full h-full object-contain" // Ensuring the GIF fits the target box
          />
        </div>

        {/* Game Over Message */}
        {!gameActive && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
            <p>Game Over!</p>
            <p>Final Score: {score}</p>
            <button
              onClick={() => {
                setScore(0);
                setGameActive(true);
              }}
              className="mt-4 px-4 py-2 bg-red-600 text-white font-bold rounded-lg"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      {/* Button to Start the Game */}
      {gameActive && (
        <button
          onClick={() => setGameActive(true)}
          className="mt-4 px-6 py-3 bg-red-600 text-white font-bold rounded-lg"
        >
          Start Game
        </button>
      )}
    </div>
  );
};

export default AnotherGame;
