import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-12 py-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-70"></div>

      {/* Left Side Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center md:text-left md:w-1/2"
      >
        {/* Heading */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-extrabold mb-6"
        >
          Hi, I'm <span className="text-blue-400">Sumit Kumar Pandey</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl text-gray-300 mb-6"
        >
          A Passionate{" "}
          <span className="text-green-400">Full Stack Developer</span>
        </motion.p>

        {/* Download Resume Button */}
        <motion.a
          href="resume.pdf"
          download
          className="mt-6 inline-block bg-blue-500 px-8 py-4 text-2xl rounded-lg text-white font-semibold hover:bg-blue-600 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Download Resume
        </motion.a>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 flex space-x-8 text-4xl"
        >
          <a
            href="https://github.com/thesumitkpandey"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/thesumitkpandey"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 mt-12 md:mt-0 md:w-1/2 flex justify-center"
      >
        <motion.img
          src={profile}
          alt="Profile"
          className="w-80 h-80 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </section>
  );
}
