import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaComments,
  FaHeadphones,
  FaLightbulb,
  FaUsers,
  FaExchangeAlt,
  FaClock,
  FaBookOpen,
} from "react-icons/fa";

export default function Skills() {
  const professionalSkills = [
    {
      name: "Communication",
      desc: "Clear, empathetic verbal and written messaging",
      icon: <FaComments className="text-accent-blue" />,
    },
    {
      name: "Active Listening",
      desc: "Paying full attention to understand root customer issues",
      icon: <FaHeadphones className="text-accent-cyan" />,
    },
    {
      name: "Problem-Solving",
      desc: "Structured, logical breakdown of user queries and errors",
      icon: <FaLightbulb className="text-accent-blue" />,
    },
    {
      name: "Teamwork",
      desc: "Cooperative, respectful attitude across internal teams",
      icon: <FaUsers className="text-accent-cyan" />,
    },
    {
      name: "Adaptability",
      desc: "Quick adjustment to new environments and schedules",
      icon: <FaExchangeAlt className="text-accent-blue" />,
    },
    {
      name: "Time Management",
      desc: "Prioritizing tasks and following through reliably",
      icon: <FaClock className="text-accent-cyan" />,
    },
    {
      name: "Willingness to Learn",
      desc: "Eager curiosity to master new tools and operational steps",
      icon: <FaBookOpen className="text-accent-blue" />,
    },
  ];

  const technicalSkills = [
    {
      name: "HTML5",
      category: "Web Fundamentals",
      icon: <FaHtml5 className="text-[#E34F26]" />,
      detail: "Clean semantic markup & structure",
    },
    {
      name: "CSS3",
      category: "Web Fundamentals",
      icon: <FaCss3Alt className="text-[#1572B6]" />,
      detail: "Responsive styling & layouts",
    },
    {
      name: "JavaScript",
      category: "Scripting / Logic",
      icon: <FaJs className="text-[#F7DF1E]" />,
      detail: "DOM manipulation & event handling",
    },
    {
      name: "React",
      category: "Frontend UI",
      icon: <FaReact className="text-[#61DAFB]" />,
      detail: "Component lifecycle & state management",
    },
    {
      name: "Git",
      category: "Version Control",
      icon: <FaGitAlt className="text-[#F05032]" />,
      detail: "Branching, committing & history tracking",
    },
    {
      name: "GitHub",
      category: "Collaboration",
      icon: <FaGithub className="text-white" />,
      detail: "Repository management & code hosting",
    },
    {
      name: "Basic Database Concepts",
      category: "Data Fundamentals",
      icon: <FaDatabase className="text-accent-cyan" />,
      detail: "Relational data structures & queries",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-navy-900 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Core Competencies
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-light tracking-tight"
          >
            Skills & Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-muted mt-4 text-base leading-relaxed"
          >
            Organized into interpersonal support skills essential for customer and team communication, 
            paired with academic technical competencies verified in my coursework and projects.
          </motion.p>
        </div>

        {/* Category 1: Professional Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan" />
            <h3 className="text-xl font-bold text-slate-light tracking-tight">
              Professional Skills
            </h3>
            <span className="text-xs text-slate-muted font-normal">
              (Interpersonal & Customer Service Mindset)
            </span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-panel p-4 rounded-xl border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-navy-800 border border-white/10 flex items-center justify-center text-base group-hover:scale-105 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-200 group-hover:text-accent-cyan transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-1">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category 2: Technical Skills */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
            <h3 className="text-xl font-bold text-slate-light tracking-tight">
              Technical Skills
            </h3>
            <span className="text-xs text-slate-muted font-normal">
              (Academic & Project Verified Technologies)
            </span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technicalSkills.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-panel p-4 rounded-xl border border-white/5 hover:border-accent-blue/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-navy-800 border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-accent-blue transition-colors">
                      {tech.name}
                    </h4>
                    <span className="text-[10px] text-accent-cyan/80 font-medium">
                      {tech.category}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-1">
                  {tech.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
