import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import shopeasy from "../assets/shopeasy.png";
import chatspace from "../assets/chatspace.png";
const projects = [
  {
    title: "ShopEasy",
    description:
      "A full stack multi vendor Ecommerce website with admin panel, charts and advanced user features",
    techStack: [
      "REST API",
      "Node.js",
      "jwt",
      "Recharts",
      "React",
      "Redux",
      "Cloudinary",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: shopeasy,
    liveLink: "https://shopeasy-client-v2.onrender.com/",
    githubLink: "https://github.com/thesumitkpandey/shopeasy",
  },
  {
    title: "ChatSpace",
    description: "A real time chat app where users can chat with each other",
    techStack: [
      "Socket.io",
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
    ],
    image: chatspace,
    liveLink: "https://chatspace-ycbx.onrender.com/",
    githubLink: "https://github.com/thesumitkpandey/chatspace",
  },
];

export default function Projects() {
  return (
    <Element
      name="projects"
      className=" text-white min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h1>

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-10 w-full max-w-4xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
            }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />

            {/* Project Details */}
            <div className="mt-6 space-y-3">
              <h2 className="text-2xl font-semibold text-blue-400">
                {project.title}
              </h2>
              <p className="text-neutral-300">{project.description}</p>
              <div className="flex flex-wrap justify-center mt-2 gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-black px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-6">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 flex items-center justify-center gap-2 text-black text-lg px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 hover:bg-green-600"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 flex items-center justify-center gap-2 text-black text-lg px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 hover:bg-blue-600"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Element>
  );
}
