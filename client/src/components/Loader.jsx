import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="bg-[#262f38] min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-6">
        {/* Rotating Loader */}
        <motion.div
          className="w-32 h-32 rounded-full border-8 border-t-[#FF0000] border-r-[#FF0000] border-b-[#000000] border-l-[#000000]"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        />

        {/* Text Section */}
        <motion.h1
          className="text-3xl text-[#FF0000] font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Wait a sec, I'm putting on my mask... or am I?
        </motion.h1>
      </div>
    </div>
  );
};

export default Loader;
