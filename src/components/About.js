import React from "react";
import { FaCheckCircle, FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import Section from "./Section";

export default function About() {
  const facts = [
    { icon: <FaGraduationCap />, label: "MCA, Kongu Engineering College" },
    { icon: <FaLaptopCode />, label: "B.Sc. Computer Science, CGPA 8.32" },
    { icon: <FaCode />, label: "React, JavaScript, and modern CSS" },
  ];

  return (
    <Section
      id="about"
      ariaLabelledby="about-heading"
      className="relative z-10 border-t border-white/5 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            About
          </p>
          <h2
            id="about-heading"
            className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-tight text-slate-50"
          >
            Building thoughtful web experiences
          </h2>
          <p className="mt-5 max-w-2xl text-[clamp(0.95rem,2vw,1.05rem)] leading-relaxed text-slate-400">
            I am Nivetha P K, a web developer and current MCA student at Kongu
            Engineering College. I enjoy turning ideas into fast, accessible
            interfaces with React, semantic HTML, and careful visual design. My
            academic foundation in Computer Science, along with hands-on project
            work, shapes how I structure components, handle layout, and ship
            polished, responsive websites.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Current MCA student",
              "B.Sc. Computer Science (2025)",
              "Responsive UI with React",
              "Focus on clean, maintainable code",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                <FaCheckCircle className="mt-0.5 shrink-0 text-cyan-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur-sm">
            <h3 className="mb-4 text-lg font-semibold text-slate-100">At a glance</h3>
            <ul className="space-y-3">
              {facts.map((fact) => (
                <li
                  key={fact.label}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#0B1220]/70 p-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                    {fact.icon}
                  </span>
                  <span className="text-sm font-medium text-slate-200">{fact.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
