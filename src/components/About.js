import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaComments,
  FaSearch,
  FaSync,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaComments className="text-accent-cyan" />,
      title: "Customer Communication",
      desc: "Keen to listen attentively, interpret questions accurately, and provide courteous, easily understandable responses.",
    },
    {
      icon: <FaSearch className="text-accent-blue" />,
      title: "Understanding & Resolving Problems",
      desc: "Approaching user difficulties step-by-step with patience, curiosity, and structured troubleshooting.",
    },
    {
      icon: <FaSync className="text-accent-cyan" />,
      title: "Learning Software Systems",
      desc: "Quick to understand technical documentation, internal platforms, support workflows, and product tools.",
    },
    {
      icon: <FaUsers className="text-accent-blue" />,
      title: "Teamwork & Growth",
      desc: "Collaborative mindset focused on continuous learning, team communication, and delivering a dependable user experience.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-navy-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Natural Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold tracking-wider uppercase">
              About Nivetha
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-light tracking-tight">
              A Computer Science Graduate Preparing for Support Excellence
            </h2>

            <div className="space-y-4 text-slate-muted leading-relaxed text-base">
              <p>
                I am a first-year Master of Computer Applications (MCA) student at Kongu Engineering College. 
                I graduated with a Bachelor of Science in Computer Science from Vellalar College for Women, Erode, in 2025, 
                building a solid academic grounding in programming, software fundamentals, database systems, and web architecture.
              </p>

              <p>
                Rather than working strictly behind code, I discovered a genuine enthusiasm for how technology interfaces with people. 
                I am keen to build my career around customer support, technical assistance, and IT service roles—environments where 
                clear communication, empathetic problem-solving, and a reliable attitude create a tangible difference in the user's experience.
              </p>

              <p>
                As an aspiring fresher, I bring a strong willingness to learn standard helpdesk procedures, ticketing systems, and organizational workflows. 
                I pride myself on being responsible, eager to absorb feedback, and dedicated to supporting users and colleagues alike.
              </p>
            </div>

            {/* Quick Key Attributes */}
            <div className="pt-2 grid sm:grid-cols-2 gap-3">
              {[
                "First-Year MCA Student",
                "B.Sc. Computer Science (8.32 CGPA)",
                "Clear & Courteous Communicator",
                "Fast Technology Learner",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <FaCheckCircle className="text-accent-cyan text-xs flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Decorative Profile Card & Focus Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="glass-panel p-6 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-blue">
                  <FaUserGraduate size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-light">Academic & Support Profile</h3>
                  <p className="text-xs text-accent-cyan font-medium">Kongu Engineering College • MCA</p>
                </div>
              </div>

              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-navy-900/60 border border-white/5 hover:border-white/15 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-sm">{item.icon}</span>
                      <h4 className="text-sm font-semibold text-slate-200">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
