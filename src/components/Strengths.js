import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaSearchPlus,
  FaSyncAlt,
  FaUsers,
  FaTasks,
} from "react-icons/fa";

export default function Strengths() {
  const strengths = [
    {
      icon: <FaLaptopCode className="text-accent-cyan text-2xl" />,
      title: "Computer Science Foundation",
      description:
        "Strong academic grounding in computer science concepts, web systems, database logic, and technical terminology that allows me to quickly grasp software workflows and error messages.",
    },
    {
      icon: <FaSearchPlus className="text-accent-blue text-2xl" />,
      title: "Interest in Understanding & Solving Problems",
      description:
        "A structured, analytical mindset aimed at breaking down issues into manageable steps, asking clarifying questions, and finding the right troubleshooting solution.",
    },
    {
      icon: <FaSyncAlt className="text-accent-cyan text-2xl" />,
      title: "Willingness to Learn New Tools & Processes",
      description:
        "Enthusiasm for mastering company helpdesk tools, standard operating procedures, ticketing workflows, and changing technology stacks with speed and curiosity.",
    },
    {
      icon: <FaUsers className="text-accent-blue text-2xl" />,
      title: "Collaborative Teamwork Approach",
      description:
        "Open communication and respect for team members, coordinating effectively across peers and supervisors to ensure customer issues are escalated and solved reliably.",
    },
    {
      icon: <FaTasks className="text-accent-cyan text-2xl" />,
      title: "Attention to Detail & Task Responsibility",
      description:
        "High degree of ownership when documenting user issues, following up on open items, and ensuring every task is completed thoroughly and conscientiously.",
    },
  ];

  return (
    <section id="strengths" className="py-24 relative bg-navy-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold tracking-wider uppercase mb-4"
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
            What I Bring to a Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-muted mt-4 text-base leading-relaxed"
          >
            Values, academic strengths, and personal qualities that enable me to contribute effectively to support teams and campus placement opportunities.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`glass-panel p-7 rounded-2xl flex flex-col justify-between hover:border-accent-blue/40 transition-all duration-300 shadow-lg ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-white/10 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-light mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
