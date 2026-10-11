import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaCompass } from "react-icons/fa";

export default function Hero() {
  const rotatingLines = [
    "MCA Student at Kongu Engineering College",
    "Aspiring Customer Support Professional",
    "Interested in Technical Support",
    "Computer Science Graduate",
    "Always Learning and Improving",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingLines.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [rotatingLines.length]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-navy-900 bg-radial-gradient bg-grid-pattern"
    >
      {/* Decorative ambient gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-accent-cyan/20 text-accent-cyan text-xs font-semibold tracking-wide shadow-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span>Kongu Engineering College • 1st Year MCA</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-light leading-[1.15]"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-cyan-300 to-accent-cyan">Nivetha P K</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-xl sm:text-2xl font-semibold text-slate-300 tracking-tight"
        >
          MCA Student | Aspiring Customer Support Professional
        </motion.h2>

        {/* Rotating Animated Text Banner */}
        <div className="h-10 mt-3 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm md:text-base font-medium text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20"
            >
              <FaCompass className="text-xs text-accent-cyan" />
              <span>{rotatingLines[currentIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Introduction Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-slate-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
        >
          "I'm currently pursuing my Master of Computer Applications at Kongu Engineering College. 
          With a background in Computer Science, I am interested in customer support and technical support 
          opportunities where I can use my problem-solving abilities, technical knowledge, and willingness 
          to learn to help people and provide a positive customer experience."
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-cyan-500 text-navy-950 font-bold text-sm tracking-wide shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>View My Profile</span>
            <FaArrowRight className="text-xs" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-panel text-slate-light font-semibold text-sm hover:border-accent-cyan/40 hover:text-accent-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
          >
            <FaEnvelope className="text-xs" />
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
