import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Element } from "react-scroll";

const TypewriterEffect = () => {
  const text = "Fresher";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex(0);
        }
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, displayedText, text]);

  return (
    <Element
      name="experience"
      className="h-screen  flex flex-col justify-center items-center text-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6">Experience</h2>

      {/* Typewriter Effect */}
      <motion.h1
        className="text-6xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {displayedText}
        <span className="animate-blink">|</span>
      </motion.h1>
    </Element>
  );
};

export default TypewriterEffect;
