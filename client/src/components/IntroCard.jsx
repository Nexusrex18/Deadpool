import React, { useRef } from "react";
import { useAnimate, useInView } from "framer-motion";
import DeadpoolImage from "../assets/deaddoggy.jpeg"; // Replace with your Deadpool image

const IntroCard = () => {
  const ref = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(ref, { once: true });

  // Trigger animation when the card is in view
  React.useEffect(() => {
    if (isInView) {
      animate(scope.current, {
        opacity: [0, 1],
        x: [-100, 0],
      }, {
        duration: 1.5,
        ease: "easeInOut",
      });
    }
  }, [isInView, animate, scope]);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center bg-red-700 text-white rounded-2xl shadow-2xl p-12 mt-12 mx-auto max-w-6xl"
    >
      {/* Image Section */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
        <img
          src={DeadpoolImage}
          alt="Deadpool Funny Pose"
          className="rounded-lg shadow-lg w-56 md:w-72"
        />
      </div>

      {/* Text Section */}
      <div ref={scope} className="flex flex-col justify-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
          Who am I?
        </h2>
        <p className="text-lg md:text-2xl leading-relaxed">
          Hi, I'm Deadpool, your favorite anti-hero with a mouth as sharp as my swords. 
          I break the fourth wall, make you laugh, and save the day – sometimes all at once! 
          If you're here for hero clichés, I'm not your guy. If you're here for chaos, chimichangas, and cheeky charm – welcome!
        </p>
        <p className="text-lg md:text-2xl leading-relaxed">
        My name’s Deadpool, but you can call me 'Hey You'.
        </p>
      </div>
    </div>
  );
};

export default IntroCard;
