import React from "react";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";
import Section from "./Section";

const educationList = [
  {
    title: "MCA - Master of Computer Applications",
    institution: "Kongu Engineering College",
    period: "2026 – Present",
    status: "Pursuing",
    detail: "Advanced computer applications, software systems, and web development.",
    icon: FaGraduationCap,
    current: true,
  },
  {
    title: "B.Sc. Computer Science",
    institution: "Vellalar College for Women, Erode",
    period: "Completed 2025",
    status: "CGPA 8.32 / 10",
    detail: "Programming, web technologies, databases, and software fundamentals.",
    icon: FaUniversity,
    current: false,
  },
  {
    title: "Higher Secondary Education (HSC)",
    institution: "Kongu Vellalar Matric Higher Secondary School",
    period: "2021 – 2022",
    status: "84.1%",
    detail: "Mathematics and Computer Science with a strong analytical foundation.",
    icon: FaSchool,
    current: false,
  },
];

export default function Education() {
  return (
    <Section
      id="education"
      ariaLabelledby="education-heading"
      className="relative z-10 border-t border-white/5 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Education
        </p>
        <h2
          id="education-heading"
          className="text-center text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-tight text-slate-50"
        >
          Academic path
        </h2>

        <ol className="relative mt-12 space-y-8 border-l border-cyan-400/30 pl-6 sm:pl-8">
          {educationList.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="relative">
                <span
                  className={`absolute -left-[1.7rem] top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 sm:-left-[2.15rem] ${
                    item.current
                      ? "border-cyan-400 bg-[#070c16] text-cyan-300"
                      : "border-white/20 bg-[#070c16] text-slate-400"
                  }`}
                >
                  <Icon className="text-xs" aria-hidden="true" />
                </span>
                <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-xs font-semibold text-cyan-300">
                      {item.status}
                    </span>
                    <span className="text-xs text-slate-500">{item.period}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-50">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-300">{item.institution}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
