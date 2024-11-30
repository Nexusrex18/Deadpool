import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IntroCard , DraggableImages } from "../components";
import Deady from "../assets/deady.png"; // First Image
import DeadyAlt from "../assets/dead.png"; // Second Image (the one it fades into)

const MainPage = () => {
  const { scrollYProgress } = useScroll();
  
  // Use scroll progress to transition the image opacity
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageAltOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // Text reveal animations
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center py-12 px-4 overflow-hidden">
      {/* Main Content */}
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            duration: 0.8,
          }}
        >
          Get ready for a wild ride!
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl font-semibold mb-8"
          variants={textVariants}
          transition={{ delay: 1.9 }}
        >
          {/* Forget what you know about traditional heroes. Deadpool’s here to do
          things his way — full of wit, charm, and all the action-packed moments
          you could ever want. Who needs perfection when you have Deadpool's
          delightful chaos? */}
          I’m not just a mercenary. I’m an expert in fine art... of sarcasm.
        </motion.p>
      </motion.div>

      {/* Image Transition */}
      <motion.div className="mt-8 flex justify-center items-center relative">
        {/* First Image (Deady) */}
        <motion.img
          src={Deady}
          alt="Deadpool"
          className="rounded-lg shadow-2xl w-4/5 md:w-2/3"
          style={{
            opacity: imageOpacity,
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2.5 }}
        />

        {/* Second Image (Deady Alt) */}
        <motion.img
          src={DeadyAlt}
          alt="Deadpool Alternate"
          className="rounded-lg shadow-2xl w-2/5 md:w-1/3 absolute"  // Reduce size to 50%
          style={{
            opacity: imageAltOpacity,
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Adjust to center the image
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.2, // This makes sure the second image fades in slightly after the first image starts fading out
          }}
        />
      </motion.div>

      <div className="my-12" />

      <IntroCard />

      <div className="my-12" />

      <DraggableImages />
    </div>
  );
};

export default MainPage;
