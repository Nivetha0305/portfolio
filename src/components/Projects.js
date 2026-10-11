import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Deconstruct from "../assets/deconstruct.png";
import Tamilnadu from "../assets/tamilnadu tourism.png";
import Section from "./Section";

const projects = [
  {
    title: "Deconstruct Clone Website",
    image: Deconstruct,
    desc: "A responsive React clone of the Deconstruct brand site, matching layout, catalog navigation, and a polished product-focused UI.",
    tech: ["React", "Tailwind CSS"],
    live: "https://deconstruct-clone.vercel.app/",
    github: "https://github.com/Nivetha0305/deconstruct-clone.git",
  },
  {
    title: "Tamil Nadu Tourism Website",
    image: Tamilnadu,
    desc: "An informative travel portal highlighting destinations and heritage across Tamil Nadu, with structured content and destination guides.",
    tech: ["JavaScript", "CSS Grid", "API"],
    live: "https://nivetha0305.github.io/Tamilnadu-tourism/",
    github: "https://github.com/Nivetha0305/Tamilnadu-tourism",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      ariaLabelledby="projects-heading"
      className="relative z-10 border-t border-white/5 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Projects
        </p>
        <h2
          id="projects-heading"
          className="text-center text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-tight text-slate-50"
        >
          Selected work
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
          Live websites built with attention to layout, responsiveness, and user flow.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition duration-300 hover:border-cyan-400/40 hover:shadow-cyan-500/20"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900 sm:h-56">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.desc}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-4 text-sm font-semibold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                  >
                    <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 text-sm font-semibold text-slate-100 hover:border-cyan-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
