import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg z-50"
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={sidebarVariants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          className="text-red-500 hover:text-red-700"
          onClick={onClose}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Options */}
      <nav className="p-4 space-y-4">
        <Link to="/" className="block hover:text-red-500" onClick={onClose}>
          Home
        </Link>
        <Link to="/comic" className="block hover:text-red-500" onClick={onClose}>
          Comics
        </Link>
        <Link to="/game" className="block hover:text-red-500" onClick={onClose}>
          Game
        </Link>
        <Link to="/movies" className="block hover:text-red-500" onClick={onClose}>
          Movies
        </Link>
        <Link to="/subscription" className="block hover:text-red-500" onClick={onClose}>
          Subscription
        </Link>
        <Link to="/about-us" className="block hover:text-red-500" onClick={onClose}>
          About Us
        </Link>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
