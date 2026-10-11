import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaChevronDown, FaDownload } from "react-icons/fa";
import { PROFILE } from "../data";
import ResumeLink from "./ResumeLink";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6"
    >
      {/* Animated background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 30, 0], y: [0, -20, 0], opacity: [0.35, 0.5, 0.35] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-[90%] rounded-full bg-cyan-500/20 blur-3xl sm:h-96 sm:w-96"
        />
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { x: [0, -30, 0], y: [0, 25, 0], opacity: [0.3, 0.45, 0.3] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/3 h-72 w-72 translate-x-[10%] rounded-full bg-sky-500/20 blur-3xl sm:h-96 sm:w-96"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050A14_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.p
          {...fadeUp(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          Available for web development work
        </motion.p>

        <motion.h1
          {...fadeUp(0.08)}
          className="bg-gradient-to-r from-slate-50 via-cyan-200 to-sky-300 bg-clip-text text-[clamp(2.1rem,6vw,4.5rem)] font-extrabold leading-tight tracking-tight text-transparent"
        >
          {PROFILE.name}
        </motion.h1>

        <motion.div
          {...fadeUp(0.16)}
          className="mt-3 text-[clamp(1.25rem,3.4vw,2rem)] font-semibold text-cyan-300"
        >
          <TypeAnimation
            sequence={["Web Developer", 3000]}
            wrapper="span"
            cursor
            repeat={Infinity}
            aria-label="Web Developer"
          />
        </motion.div>

        <motion.p
          {...fadeUp(0.24)}
          className="mx-auto mt-5 max-w-2xl text-[clamp(0.95rem,2.2vw,1.125rem)] leading-relaxed text-slate-400"
        >
          I design and build clean, responsive websites with React, focusing on
          performance, accessibility, and a polished user experience.
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-3 text-sm font-medium text-slate-500 sm:text-base"
        >
          MCA Student, Kongu Engineering College
        </motion.p>

        <motion.div
          {...fadeUp(0.36)}
          className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#projects"
            className="btn-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
          >
            View Projects
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </a>
          <ResumeLink className="btn-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:border-cyan-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">
            <FaDownload className="text-xs" aria-hidden="true" />
            Download Resume
          </ResumeLink>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 hover:text-cyan-300 sm:block"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="block"
        >
          <FaChevronDown aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
