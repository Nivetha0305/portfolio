import React from "react";
import Deconstruct from "../assets/deconstruct.png";
import Tamilnadu from "../assets/tamilnadu tourism.png";
import Restuarant from "../assets/restuarant.png";

import { FaGithub } from "react-icons/fa";
import link from "../assets/link.png"

export default function Projects() {
  const projects = [
    {
      title: "Deconstruct Clone",
      image: Deconstruct,
      desc: "A responsive clone of the Deconstruct website built using modern UI design and animations.",
      tech: ["React", "Tailwind"],
      live: "https://deconstruct-clone.vercel.app/",
      github: "https://github.com/Nivetha0305/deconstruct-clone.git"
    },
    {
      title: "Restaurant Website",
      image: Restuarant,
      desc: "A responsive restaurant website displaying menu items, food categories, and contact information.",
      tech: ["JavaScript", "LocalStorage"],
      live: "https://nivetha0305.github.io/restuarant/",
      github: "https://github.com/your-repo-link",
    },
    {
      title: "Tamil Nadu Tourism",
      image: Tamilnadu,
      desc: "A tourism website showcasing famous destinations and travel information in Tamil Nadu.",
      tech: ["API", "CSS Grid"],
      live: "https://nivetha0305.github.io/Tamilnadu-tourism/",
      github: "https://github.com/your-repo-link",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0b0f2a] to-[#050816] text-white"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 flex justify-between items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">FEATURED PROJECTS</h2>
          <p className="text-orange-400 text-xs mt-2 tracking-widest">
            SELECTED WORK FROM MY DEV JOURNEY
          </p>
        </div>

        <a
          href="projects"
          className="text-sm text-orange-400 hover:underline hidden md:block"
        >
          VIEW ALL REPOSITORIES →
        </a>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-md border border-white/10 
                       rounded-xl overflow-hidden 
                       hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(241,74,0,0.4)]
                       transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay with icons */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">
                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
                >
                  <FaGithub size={18} />
                </a>

                {/* Live Link */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <img
                    src={link}
                    alt="link icon"
                    className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Tech Tags */}
              <div className="flex gap-2 mb-3 flex-wrap">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-1 
                               bg-purple-600/30 text-purple-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
