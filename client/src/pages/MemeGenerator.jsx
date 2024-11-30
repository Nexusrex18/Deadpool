import React, { useState } from "react";
import { motion } from "framer-motion";
import imageData from "../assets/image.json"; // Assuming the path to your JSON is correct

const MemeGenerator = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  // Function to generate a random image
  const generateMeme = () => {
    const randomImage = imageData[Math.floor(Math.random() * imageData.length)].url;
    const img = new Image();
    img.src = randomImage;

    // Set image dimensions once the image is loaded
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };

    setSelectedImage(randomImage);
    setTopText("");
    setBottomText("");
  };

  // Function to handle meme download
  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = selectedImage;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 5;
      ctx.textAlign = "center";
      ctx.fillText(topText, canvas.width / 2, 50);
      ctx.fillText(bottomText, canvas.width / 2, canvas.height - 30);
      ctx.strokeText(topText, canvas.width / 2, 50);
      ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 30);

      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "meme.png";
      link.click();
    };
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-900 text-white">
      <motion.div
        className="w-full max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6 text-red-500 drop-shadow-xl">Deadpool Meme Generator</h1>
        <p className="text-xl mb-8 text-gray-300">
          Create your own hilarious Deadpool memes!
        </p>

        {/* Generate Meme Button */}
        <motion.button
          onClick={generateMeme}
          className="bg-red-600 text-white font-bold py-3 px-8 rounded-full mb-6 hover:bg-red-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Generate Meme
        </motion.button>

        {/* Display the meme after generation */}
        {selectedImage && (
          <motion.div
            className="relative mx-auto overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              width: "100%",
              maxWidth: `${imageDimensions.width}px`, // Max width of the image container
              height: "auto",
              aspectRatio: `${imageDimensions.width} / ${imageDimensions.height}`,
            }}
          >
            <img
              src={selectedImage}
              alt="Generated Meme"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              {/* Top Text */}
              <motion.div
                className="text-3xl font-bold text-center text-white drop-shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: topText ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {topText}
              </motion.div>

              {/* Bottom Text */}
              <motion.div
                className="text-3xl font-bold text-center text-white drop-shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: bottomText ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {bottomText}
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Text input fields */}
        {selectedImage && (
          <div className="flex flex-col items-center mt-6">
            <input
              type="text"
              className="p-3 bg-gray-700 text-white rounded-md w-80 mb-4"
              placeholder="Top Text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            />
            <input
              type="text"
              className="p-3 bg-gray-700 text-white rounded-md w-80 mb-6"
              placeholder="Bottom Text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            />

            {/* Download Button */}
            {/* <motion.button
              onClick={handleDownload}
              className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Download Meme
            </motion.button> */}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MemeGenerator;
