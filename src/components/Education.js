import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaCheckCircle,
} from "react-icons/fa";

export default function Education() {
  const educationList = [
    {
      title: "Master of Computer Applications (MCA)",
      institution: "Kongu Engineering College",
      status: "Currently Pursuing — First Year",
      yearBadge: "2025 - Present",
      isCurrent: true,
      score: "First Year in Progress",
      description:
        "Deepening computer applications knowledge, software system concepts, database management, and professional problem-solving to prepare for technical support and IT industry opportunities.",
      highlights: [
        "Advanced Computer Applications",
        "System Architecture & Databases",
        "Problem-Solving & Professional Communication",
      ],
      icon: <FaGraduationCap className="text-accent-cyan text-xl" />,
    },
    {
      title: "Bachelor of Science in Computer Science (B.Sc. CS)",
      institution: "Vellalar College for Women, Erode",
      status: "Completed in 2025",
      yearBadge: "Completed 2025",
      isCurrent: false,
      score: "CGPA: 8.32 / 10",
      description:
        "Built a thorough undergraduate foundation in programming languages, web fundamentals, database management systems, and computational principles with consistent academic excellence.",
      highlights: [
        "CGPA: 8.32 / 10",
        "Web Technologies & DBMS",
        "Algorithms & Logical Thinking",
      ],
      icon: <FaUniversity className="text-accent-blue text-lg" />,
    },
    {
      title: "Higher Secondary Education (HSC)",
      institution: "Kongu Vellalar Matric Higher Secondary School",
      status: "Completed",
      yearBadge: "2021 - 2022",
      isCurrent: false,
      score: "Percentage: 84.1%",
      description:
        "Completed Higher Secondary Certificate studies with an emphasis on Mathematics and Computer Science, establishing analytical discipline and quantitative reasoning.",
      highlights: [
        "Percentage: 84.1%",
        "Mathematics & Computer Science",
        "Analytical Foundation",
      ],
      icon: <FaSchool className="text-slate-muted text-lg" />,
    },
  ];

  return (
    <section id="education" className="py-24 bg-navy-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Academic Foundation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-light tracking-tight"
          >
            Education & Qualifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-muted mt-4 text-base leading-relaxed"
          >
            A consistent academic progression in Computer Science, highlighting current MCA studies at Kongu Engineering College.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track Line */}
          <div className="absolute left-4 md:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-blue to-navy-700" />

          <div className="space-y-12">
            {educationList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-20 group"
              >
                {/* Node Indicator */}
                <div
                  className={`absolute left-2 md:left-6 -translate-x-1/2 top-4 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    item.isCurrent
                      ? "bg-navy-950 border-accent-cyan shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                      : "bg-navy-900 border-white/20 group-hover:border-accent-blue"
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      item.isCurrent ? "bg-accent-cyan animate-ping" : "bg-white/40"
                    }`}
                  />
                </div>

                {/* Card Container */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 ${
                    item.isCurrent
                      ? "glass-panel-glow border-accent-cyan/40 bg-navy-900/90"
                      : "glass-panel border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-navy-800 border border-white/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-accent-cyan uppercase tracking-wider">
                          {item.status}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-light">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
                        {item.yearBadge}
                      </span>
                      {item.score && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.isCurrent
                              ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                              : "bg-accent-blue/15 text-accent-blue border border-accent-blue/30"
                          }`}
                        >
                          {item.score}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                    <FaUniversity className="text-xs text-accent-blue" />
                    <span>{item.institution}</span>
                  </p>

                  <p className="text-slate-muted text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-navy-800/80 px-2.5 py-1 rounded-md border border-white/5"
                      >
                        <FaCheckCircle className="text-[10px] text-accent-cyan" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
