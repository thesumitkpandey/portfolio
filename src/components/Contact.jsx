import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
export default function Contact() {
  return (
    <Element
      name="contact"
      className="min-h-screen bg-gradient-to-r  text-white flex flex-col items-center justify-center p-8"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Contact Me
      </motion.h1>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Email Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4 border border-white/20"
        >
          <h2 className="text-2xl font-semibold text-green-400">Email</h2>
          <p className="text-lg text-neutral-200">
            officialsumitpandey@gmail.com
          </p>
          <a
            href="mailto:officialsumitpandey@gmail.com"
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Send Email
          </a>
        </motion.div>

        {/* Phone Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4 border border-white/20"
        >
          <h2 className="text-2xl font-semibold text-green-400">Phone</h2>
          <p className="text-lg text-neutral-200"> +91 8076608801</p>
          <a
            href="tel:8076608801"
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Call Now
          </a>
        </motion.div>
      </div>
    </Element>
  );
}
