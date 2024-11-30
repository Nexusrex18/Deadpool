import React from "react";
import deadpoolBg from "../assets/deadsub2.png"; // Import Deadpool-themed background image

const SubscriptionPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen text-center"
      style={{
        backgroundImage: `url(${deadpoolBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div
        className="p-8 rounded-lg shadow-lg"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
          backdropFilter: "blur(5px)",
        }}
      >
        {/* Deadpool Logo or Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4">
          💀 Coming Soon 💀
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl text-gray-300 font-semibold mb-6">
          Deadpool is working on something epic. <br />
          Stay tuned or he’ll break the fourth wall... again!
        </p>

        {/* Countdown placeholder or message */}
        <div className="text-xl md:text-2xl text-red-500 font-bold mb-4">
          Patience, human. Good things take time.
        </div>

        {/* Call-to-action */}
        <button
          className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-bold transition shadow-lg"
          onClick={() => alert("Go grab a chimichanga while you wait! 🌯")}
        >
          Get Notified
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPage;
