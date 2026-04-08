import React from 'react'
// import SplitText from './Splittext';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold"
      >
        Hi, I'm <span className="text-blue-400">Nivetha</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 mt-4"
      >
        Frontend Developer | React Developer
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 px-6 py-3 rounded-lg mt-6"
      >
        Download Resume
      </motion.button>
    </section>
  );
}
