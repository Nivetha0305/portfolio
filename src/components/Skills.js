import React from "react";
import { motion } from "framer-motion";
// import SplitText from '../components/Splittext';
export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "BOOTSTRAP",
    "REACT",
    "TAILWIND",
  ];
  return (
    <section id="skills" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">SKILLS</h2>

      <div className="flex justify-center flex-wrap gap-6">
        {skills.map((skill, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
            whileHover={{
              scale: 1.1,
              y: -8,
              boxShadow: "0px 0px 25px rgb(136, 173, 226)",
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold cursor-pointer"
          >
            {skill}
          </motion.button>
        ))}
      </div>
    </section>
  );
}
