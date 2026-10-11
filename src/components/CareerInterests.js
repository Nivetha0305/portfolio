import React from "react";
import { motion } from "framer-motion";
import {
  FaHeadset,
  FaHandsHelping,
  FaDesktop,
  FaNetworkWired,
  FaGraduationCap,
  FaCheckCircle,
} from "react-icons/fa";

export default function CareerInterests() {
  const roles = [
    {
      title: "Customer Support Executive",
      icon: <FaHeadset className="text-accent-cyan text-2xl" />,
      desc: "Providing empathetic, clear, and prompt resolutions to user queries via email, chat, and helpdesk systems.",
      highlights: ["Clear Query Resolution", "Active Listening", "User Empathy"],
    },
    {
      title: "Customer Service Associate",
      icon: <FaHandsHelping className="text-accent-blue text-2xl" />,
      desc: "Delivering welcoming customer interactions, active follow-ups, and a reliable, satisfying experience.",
      highlights: ["Customer Care", "Patience & Courtesy", "Relationship Building"],
    },
    {
      title: "Technical Support Associate",
      icon: <FaDesktop className="text-accent-cyan text-2xl" />,
      desc: "Assisting users with troubleshooting software, web portals, account settings, and workflow issues.",
      highlights: ["Root Cause Identification", "Step-by-Step Guidance", "System Navigation"],
    },
    {
      title: "IT Support Trainee",
      icon: <FaNetworkWired className="text-accent-blue text-2xl" />,
      desc: "Eager to learn enterprise IT systems, hardware/software setup, internal ticketing, and escalation pathways.",
      highlights: ["IT Fundamentals", "Quick Learner", "Process Discipline"],
    },
    {
      title: "Graduate Trainee",
      icon: <FaGraduationCap className="text-accent-cyan text-2xl" />,
      desc: "Adaptable fresher ready to undergo training across customer-facing or technology operations teams.",
      highlights: ["Rapid Skill Acquisition", "Team Collaboration", "Strong Work Ethic"],
    },
  ];

  return (
    <section id="career-interests" className="py-24 relative bg-navy-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Target Opportunities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-light tracking-tight"
          >
            Career Interests & Aspirations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-muted mt-4 text-base leading-relaxed"
          >
            As a Master of Computer Applications student with a B.Sc. in Computer Science, 
            I am actively targeting entry-level customer support and IT support opportunities where I can 
            listen to users, solve issues, and learn quickly.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover:border-accent-cyan/40 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-accent-cyan/30 transition-all duration-300">
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-light mb-2.5 group-hover:text-accent-cyan transition-colors">
                  {role.title}
                </h3>
                <p className="text-slate-muted text-sm leading-relaxed mb-6">
                  {role.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Core Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.highlights.map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                    >
                      <FaCheckCircle className="text-accent-blue text-[10px]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
