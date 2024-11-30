import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Deadimg from "../assets/dead.png";
import { AuthContext } from "../App"; // Import AuthContext

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext); // Use AuthContext
  const [darkMode, setDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate(); // React Router hook for navigation

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true); // Update context state if token exists
    }
  }, [setIsLoggedIn]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Logout logic
      localStorage.removeItem("authToken"); // Clear token
      setIsLoggedIn(false); // Update context state
      navigate("/"); // Redirect to home page
    } else {
      navigate("/login"); // Redirect to login page
    }
  };

  return (
    <div
      className={darkMode ? "bg-black text-white" : "bg-gray-100 text-black"}
    >
      <header className="w-full px-6 py-4 flex justify-between items-center shadow-md">
        {/* Sidebar Toggle */}
        <motion.button
          className="text-red-500 hover:text-red-700"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          whileHover={{ scale: 1.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </motion.button>

        {/* Deadpool Name */}
        <motion.h1
          className="text-3xl font-bold text-red-500"
          whileHover={{ scale: 1.5 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {hovered ? (
            <img
              src={Deadimg}
              alt="Deadpool"
              className="w-9 h-9"
            />
          ) : (
            "Deadpool"
          )}
        </motion.h1>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <motion.div
            onClick={toggleDarkMode}
            className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
              darkMode ? "justify-end" : "justify-start"
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`w-4 h-4 rounded-full transition-all ${
                darkMode ? "bg-yellow-600" : "bg-black"
              }`}
            ></div>
          </motion.div>

          {/* Login/Logout Button */}
          <motion.button
            onClick={handleLoginLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition"
            whileHover={{ scale: 1.1 }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </motion.button>
        </div>
      </header>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
};

export default Navbar;
