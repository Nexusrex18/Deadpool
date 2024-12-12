import React, { useRef } from "react";
import { motion } from "framer-motion";
import DeadpoolImage1 from "../assets/deadpool1.png";
import DeadpoolImage2 from "../assets/deadpool2.png";
import DeadpoolImage3 from "../assets/deadpool3.png";
import DeadpoolImage4 from "../assets/deadpool4.png";
//import DeadpoolImage5 from "../assets/deadpool5.png";
import DeadpoolImage6 from "../assets/deadpool6.png";
import DeadpoolImage7 from "../assets/deadpool7.png";

const DraggableImages = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="my-16">
      {/* Section Title */}
      <h2 className="text-center text-white text-4xl font-bold mb-8">
        {/* Drag Deadpool Around! */}
        My Mood Swings!
      </h2>

      {/* Wider Container */}
      <div
        ref={constraintsRef}
        className="relative mx-auto w-[1000px] max-w-[1000px] h-[600px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Draggable Images */}
        <motion.img
          src={DeadpoolImage1}
          alt="Deadpool 1"
          className="absolute top-10 left-16 w-32 h-32 object-cover rounded-full shadow-lg"
          drag
          dragConstraints={constraintsRef}
          whileTap={{ scale: 1.2 }}
        />
        <motion.img
          src={DeadpoolImage2}
          alt="Deadpool 2"
          className="absolute top-20 right-20 w-32 h-32 object-cover rounded-full shadow-lg"
          drag
          dragConstraints={constraintsRef}
          whileTap={{ rotate: 10 }}
        />
        <motion.img
          src={DeadpoolImage3}
          alt="Deadpool 3"
          className="absolute bottom-20 left-20 w-32 h-32 object-cover rounded-full shadow-lg"
          drag
          dragConstraints={constraintsRef}
          whileTap={{ scale: 0.9 }}
        />
        <motion.img
          src={DeadpoolImage4}
          alt="Deadpool 4"
          className="absolute bottom-16 right-32 w-32 h-32 object-cover rounded-full shadow-lg"
          drag
          dragConstraints={constraintsRef}
          whileTap={{ rotate: -10 }}
        />
{/*         <motion.img
          src={DeadpoolImage5}
          alt="Deadpool 5"
          className="absolute top-1/2 left-1/4 w-32 h-32 object-cover rounded-full shadow-lg transform -translate-y-1/2"
          drag
          dragConstraints={constraintsRef}
          whileTap={{ scale: 1.1 }}
        /> */}
        <motion.img
          src={DeadpoolImage6}
          alt="Deadpool 6"
          className="absolute bottom-10 right-10 w-32 h-32 object-cover rounded-full shadow-lg"
          drag
          dragConstraints={constraintsRef}
          whileTap={{ rotate: -15 }}
        />
        <motion.img
          src={DeadpoolImage7}
          alt="Deadpool 7"
          className="absolute bottom-10 right-10 w-32 h-32 object-cover rounded-full shadow-lg"
          drag
          dragConstraints={constraintsRef}
          whileTap={{ rotate: -15 }}
        />
      </div>
    </div>
  );
};

export default DraggableImages;
