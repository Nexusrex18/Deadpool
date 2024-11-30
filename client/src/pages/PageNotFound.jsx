import React from "react";
import Pagenot from "../assets/pagenot.jpeg";

const PageNotFound = () => {
  return (
    <div className="bg-[#2d3740] min-h-screen flex justify-center items-center text-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <img
          src={Pagenot}
          alt="Page Not Found"
          className="w-80 h-80 md:w-[400px] md:h-[400px] object-contain"
        />

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-300">
            Sorry, the page you’re looking for doesn’t exist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
