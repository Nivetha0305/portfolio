import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validate = () => {
    let newErrors = {};
    const nameRegex = /^[A-Za-z\s.'-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Please enter a valid name (letters and spaces only)";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@domain.com)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ state: "sending", message: "Sending your message..." });

    // Send using verified EmailJS service config
    emailjs
      .sendForm(
        "service_wzf7a07",
        "template_shls4lu",
        form.current,
        "bVCcD9JpmTBe3xucH"
      )
      .then(() => {
        setStatus({
          state: "success",
          message: "Thank you! Your message was sent successfully. I will get back to you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      })
      .catch((error) => {
        console.error("Email send failed:", error);
        setStatus({
          state: "error",
          message:
            "Unable to deliver message right now. Please reach out directly to nivethapk531@gmail.com.",
        });
      });
  };

  return (
    <section id="contact" className="py-24 bg-navy-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold tracking-wider uppercase mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-light tracking-tight">
                Let's Connect for Opportunities
              </h2>
              <p className="mt-4 text-slate-muted text-base leading-relaxed">
                "I'm open to exploring entry-level customer support, technical support, 
                and IT fresher opportunities where I can learn, contribute, and grow professionally."
              </p>
            </div>

            <div className="space-y-4">
              {/* Direct Email Card */}
              <a
                href="mailto:nivethapk531@gmail.com"
                className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:border-accent-cyan/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-blue text-lg group-hover:scale-110 group-hover:bg-accent-blue group-hover:text-navy-950 transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Direct Email
                  </p>
                  <p className="text-slate-light font-medium text-sm group-hover:text-accent-cyan transition-colors">
                    nivethapk531@gmail.com
                  </p>
                </div>
              </a>

              {/* Institution / Location */}
              <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 border-white/5">
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-white/10 flex items-center justify-center text-accent-cyan text-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Location & Campus
                  </p>
                  <p className="text-slate-light font-medium text-sm">
                    Kongu Engineering College, Perundurai, Erode, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Profiles */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Verified Online Profiles
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Nivetha0305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-accent-cyan/40 text-xs font-semibold transition-all duration-200"
                >
                  <FaGithub size={16} />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/nivetha0305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-accent-blue hover:border-accent-blue/40 text-xs font-semibold transition-all duration-200"
                >
                  <FaLinkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-7 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-slate-light mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Recruiters and hiring managers can reach out directly via this form or by emailing me directly.
              </p>

              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name <span className="text-accent-cyan">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900 text-slate-light text-sm outline-none transition-colors border ${
                      errors.name
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-white/10 focus:border-accent-cyan/60"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <FaExclamationCircle className="text-[11px]" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email Address <span className="text-accent-cyan">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="e.g. recruiter@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900 text-slate-light text-sm outline-none transition-colors border ${
                      errors.email
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-white/10 focus:border-accent-cyan/60"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <FaExclamationCircle className="text-[11px]" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject / Opportunity (Optional)
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="e.g. Customer Support Associate Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-navy-900 text-slate-light text-sm outline-none transition-colors border border-white/10 focus:border-accent-cyan/60"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-accent-cyan">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    name="message"
                    placeholder="Share role details, requirements, or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900 text-slate-light text-sm outline-none transition-colors resize-none border ${
                      errors.message
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-white/10 focus:border-accent-cyan/60"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <FaExclamationCircle className="text-[11px]" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Form Notification Messages */}
                {status.state === "success" && (
                  <div className="p-3.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-xs flex items-start gap-2">
                    <FaCheckCircle className="text-sm mt-0.5 flex-shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {status.state === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2">
                    <FaExclamationCircle className="text-sm mt-0.5 flex-shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.state === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-navy-950 font-bold text-sm hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-accent-blue/20"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>
                    {status.state === "sending" ? "Transmitting..." : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
