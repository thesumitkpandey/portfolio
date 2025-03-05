import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import js from "../assets/js.svg";
import html from "../assets/html.svg";
import ts from "../assets/ts.svg";
import sql from "../assets/sql.svg";
import css from "../assets/css.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import git from "../assets/git.svg";
import linux from "../assets/linux.svg";
import tailwind from "../assets/tailwind.svg";
import socket from "../assets/socket.svg";
import rest from "../assets/rest.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import zustand from "../assets/zustand.svg";
import mongo from "../assets/mongodb.svg";

const skillsOptions = [
  { image: rest, title: "REST API" },
  { image: linux, title: "Linux" },
  { image: react, title: "React.js" },
  { image: node, title: "Node.js" },
  { image: js, title: "JavaScript" },
  { image: ts, title: "TypeScript" },
  { image: redux, title: "Redux" },
  { image: zustand, title: "Zustand" },
  { image: sql, title: "SQL" },
  { image: socket, title: "Socket.io" },
  { image: express, title: "Express.js" },
  { image: git, title: "Git" },
  { image: tailwind, title: "Tailwind CSS" },
  { image: mongo, title: "MongoDB" },
  { image: html, title: "HTML" },
  { image: css, title: "CSS" },
];

export default function Skills() {
  return (
    <Element name="skills" className="bg-[#212121] text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-16">
          {skillsOptions.map((skill, index) => (
            <motion.div
              key={index}
              className="w-24 h-24 bg-[#333] rounded-lg flex flex-col items-center justify-center shadow-lg"
              whileHover={{
                scale: [null, 1.1, 1.2],
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
            >
              <img src={skill.image} alt={skill.title} className="w-10 h-10" />
              <p className="text-sm mt-2 text-center">{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  );
}
