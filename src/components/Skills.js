import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";
import { SiTailwindcss, SiVercel } from "react-icons/si";
import Section from "./Section";

const groups = [
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    accent: "text-cyan-300",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "React JS", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#38BDF8]" />,
      },
    ],
  },
  {
    title: "Tools & Deployment",
    icon: <FaTools />,
    accent: "text-pink-300",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.07 } },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
      scale: reduceMotion ? 1 : 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <Section
      id="skills"
      ariaLabelledby="skills-heading"
      className="relative z-10 border-t border-white/5 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Skills
        </p>
        <h2
          id="skills-heading"
          className="text-center text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-tight text-slate-50"
        >
          Tools I work with
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
          A practical stack for building and shipping modern websites.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-lg shadow-black/20 backdrop-blur-sm transition-colors hover:border-cyan-400/30 sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-lg ${group.accent}`}
                  aria-hidden="true"
                >
                  {group.icon}
                </span>
                <h3 className="text-lg font-semibold text-slate-100">
                  {group.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={
                      reduceMotion ? undefined : { scale: 1.06, y: -2 }
                    }
                    className="flex cursor-default items-center gap-2.5 rounded-xl border border-white/5 bg-[#0B1220]/80 px-3 py-3 transition-colors hover:border-cyan-400/40 hover:bg-[#0B1220]"
                  >
                    <span className="text-xl" aria-hidden="true">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
