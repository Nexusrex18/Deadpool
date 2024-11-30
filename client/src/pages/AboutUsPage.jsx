import React from "react";
import deadpoolBg from "../assets/deadcht.jpg"; 
import deadpoolImage from "../assets/deadprof.png"; 

const AboutUsPage = () => {
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
        className="p-8 rounded-lg shadow-lg max-w-3xl"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
          backdropFilter: "blur(5px)",
        }}
      >
        {/* Deadpool Image */}
        <img
          src={deadpoolImage}
          alt="Deadpool"
          className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-red-600 shadow-lg"
        />

        {/* About Us Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          About Us
        </h1>

        {/* Fun Tagline */}
        <p className="text-lg md:text-xl text-gray-300 font-semibold mb-6">
          “Breaking the fourth wall? That’s amateur work. I break it, rebuild it, 
          and then break it again!” – Deadpool
        </p>

        {/* About the Creator */}
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-lg">
          <h2 className="text-2xl text-red-500 font-bold mb-2">Meet the Creator</h2>
          <p className="text-gray-300 text-lg">
            Welcome to the Deadpool-inspired web universe crafted by none other 
            than <span className="text-red-600 font-bold">NexusRex18</span>. 
            A coding vigilante, chimichanga enthusiast, and your friendly neighborhood
            web creator.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-800 p-4 rounded-lg mt-6 border border-gray-700 shadow-lg">
          <h2 className="text-2xl text-red-500 font-bold mb-2">Our Mission</h2>
          <p className="text-gray-300 text-lg">
            To bring Deadpool's chaotic charm to your screen and create a 
            user experience that’s fun, bold, and ridiculously awesome.
          </p>
        </div>

        {/* Contact/Closing Section */}
        <p className="mt-6 text-lg md:text-xl text-gray-400">
          Wanna share a chimichanga or give feedback? 
          <span className="text-red-500 font-bold"> Reach out anytime!</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
