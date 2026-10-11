import React from "react";
import { motion } from "framer-motion";
import Deconstruct from "../assets/deconstruct.png";
import Tamilnadu from "../assets/tamilnadu tourism.png";
import { FaGithub, FaExternalLinkAlt, FaLightbulb } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Deconstruct Clone Website",
      image: Deconstruct,
      desc: "A responsive web clone replicating the user interface, component layout, and interactive catalog navigation of the Deconstruct brand portal.",
      tech: ["React", "Tailwind CSS"],
      learned:
        "Mastered component structure, responsive design across mobile/desktop, systematic layout debugging, and understanding end-user web navigation flows.",
      live: "https://deconstruct-clone.vercel.app/",
      github: "https://github.com/Nivetha0305/deconstruct-clone.git",
    },
    {
      title: "Tamil Nadu Tourism Website",
      image: Tamilnadu,
      desc: "An informative travel information portal showcasing key destinations, regional heritage spots, and navigation guides across Tamil Nadu.",
      tech: ["JavaScript", "CSS Grid", "API Integration"],
      learned:
        "Strengthened asynchronous data handling, structured content presentation, logical information grouping, and intuitive layout organization for visitors.",
      live: "https://nivetha0305.github.io/Tamilnadu-tourism/",
      github: "https://github.com/Nivetha0305/Tamilnadu-tourism",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-navy-900 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Academic Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-light tracking-tight"
          >
            Academic Projects & Learning
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-muted mt-4 text-base leading-relaxed"
          >
            Projects built during my Computer Science studies that demonstrate transferable competencies—logical thinking, 
            attention to detail, tool adaptability, and an understanding of how users interact with software interfaces.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-56 overflow-hidden bg-navy-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  
                  {/* Tech Tags Badge Overlay */}
                  <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-navy-900/90 text-accent-cyan border border-accent-cyan/30 backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-light mb-2.5 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-muted text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Transferable Skills Callout */}
                  <div className="p-3.5 rounded-xl bg-navy-950/70 border border-white/5 mb-4">
                    <div className="flex items-start gap-2.5">
                      <FaLightbulb className="text-accent-cyan text-sm flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold text-slate-200 block mb-1">
                          What I Learned & Transferable Skills:
                        </span>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {project.learned}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-accent-cyan hover:text-cyan-300 transition-colors"
                >
                  <FaExternalLinkAlt className="text-[11px]" />
                  <span>View Live Demo</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <FaGithub className="text-sm" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
