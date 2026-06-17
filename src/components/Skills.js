import React from "react";
import { motion } from "framer-motion";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiVercel } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JAVASCRIPT", icon: <FaJs /> },
    { name: "REACT", icon: <FaReact /> },
    { name: "TAILWIND", icon: <SiTailwindcss /> },
    { name: "BOOTSTRAP", icon: <FaBootstrap /> },
    { name: "GIT", icon: <FaGitAlt /> },
    { name: "GITHUB", icon: <FaGithub /> },
    { name: "VERCEL", icon: <SiVercel /> },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0b0f2a] to-[#050816] text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-white"
      >
        TECHNICAL ARSENAL
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-orange-400 mt-2 text-xs tracking-widest"
      >
        TOOLS & TECHNOLOGIES I MASTERED
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="mt-12 max-w-5xl mx-auto 
             grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 
             gap-6 px-4"
>
      
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -6,
              scale: 1.05,
              boxShadow: "0px 0px 18px rgba(241, 74, 0, 0.5)",
            }}
            className="flex flex-col items-center justify-center
                       bg-white/5 backdrop-blur-md
                       border border-white/10
                       rounded-xl p-4
                       text-white cursor-pointer
                       transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 8, scale: 1.15 }}
              className="text-3xl text-orange-400 mb-2"
            >
              {skill.icon}
            </motion.div>

            <p className="text-xs tracking-wide">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
