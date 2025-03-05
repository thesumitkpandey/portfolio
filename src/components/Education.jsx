import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const educationData = [
  {
    institution: "Manipal University",
    degree: "Master of Computer Applications",
    year: "2023 - 2025",
  },
  {
    institution:
      "National Institute of Electronics and Information Technology (NIELIT)",
    degree: "IT A Level (Full Stack Development)",
  },
  {
    institution: "University of Delhi",
    degree: "Bachelor of Arts",
    year: "2019-2022",
  },
];

export default function Education() {
  return (
    <Element name="education">
      <div className="min-h-screen text-white flex flex-col items-center justify-center p-8 pt-32">
        {/* Header */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Education
        </motion.h1>

        {/* Education Cards */}
        <div className="flex flex-col space-y-8 w-full max-w-3xl">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ rotate: 2 }}
              className="bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col space-y-4"
            >
              <h2 className="text-2xl font-semibold text-green-500">
                {edu.institution}
              </h2>
              <p className="text-lg font-medium">{edu.degree}</p>
              {edu.year && (
                <p className="text-sm text-neutral-400">{edu.year}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  );
}
