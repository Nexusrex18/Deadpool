import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, rotate: [0, 5, -5, 0], transition: { yoyo: Infinity } }, // Fun wiggle effect
  };

  const boxVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(255, 0, 0, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Page Title */}
      <motion.h1
        className="text-5xl font-extrabold mb-8 text-red-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Deadpool's Game Zone 🎮
      </motion.h1>

      {/* Interactive Options */}
      <motion.div
        className="flex flex-wrap gap-8 justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Meme Generator Button */}
        <motion.button
          className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition relative overflow-hidden"
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => navigate("/memegenerator")}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-red-800 opacity-10 hover:opacity-20 transition duration-300"></span>
          Meme Generator 🃏
        </motion.button>

        {/* Another Game Router Box */}
        <motion.div
          className="w-60 h-40 bg-gray-800 text-red-500 font-extrabold rounded-lg flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-800 transition relative overflow-hidden"
          variants={boxVariants}
          whileHover="hover"
          onClick={() => navigate("/anothergame")}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-red-700 opacity-10 hover:opacity-20 transition duration-300"></span>
          Another Game 🚀
        </motion.div>
      </motion.div>

      {/* Footer Message */}
      <motion.p
        className="mt-12 text-gray-400 text-sm italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        "You better have fun, or Deadpool’s coming for ya! 💀" 
      </motion.p>
    </div>
  );
};

export default GamePage;
