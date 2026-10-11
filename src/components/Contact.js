import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaCheckCircle,
  FaEnvelope,
  FaExclamationCircle,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { PROFILE } from "../data";
import Section from "./Section";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    const nameRegex = /^[A-Za-z\s.'-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) next.name = "Please enter your name";
    else if (!nameRegex.test(formData.name.trim()))
      next.name = "Please enter a valid name";
    if (!formData.email.trim()) next.email = "Please enter your email";
    else if (!emailRegex.test(formData.email.trim()))
      next.email = "Enter a valid email address";
    if (!formData.message.trim()) next.message = "Please write a message";
    else if (formData.message.trim().length < 10)
      next.message = "Message should be at least 10 characters";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ state: "sending", message: "Sending..." });
    emailjs
      .sendForm(
        "service_wzf7a07",
        "template_shls4lu",
        form.current,
        "bVCcD9JpmTBe3xucH",
      )
      .then(() => {
        setStatus({
          state: "success",
          message: "Thank you. Your message was sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch(() => {
        setStatus({
          state: "error",
          message: `Unable to send right now. Please email ${PROFILE.email} instead.`,
        });
      });
  };

  const fieldClass = (hasError) =>
    `w-full min-h-12 rounded-xl border bg-[#0B1220] px-4 py-3 text-sm text-slate-100 outline-none transition ${
      hasError
        ? "border-red-500/80"
        : "border-white/10 focus:border-cyan-400/70"
    }`;

  return (
    <Section
      id="contact"
      ariaLabelledby="contact-heading"
      className="relative z-10 border-t border-white/5 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-tight text-slate-50"
          >
            Let’s build something together
          </h2>
          <p className="mt-4 text-slate-400">
            Have a project, collaboration, or question? Send a message or reach
            me on email, LinkedIn, or GitHub.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:border-cyan-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <FaEnvelope className="text-cyan-300" aria-hidden="true" />
              <span className="text-sm text-slate-200">{PROFILE.email}</span>
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:border-cyan-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <FaLinkedin className="text-cyan-300" aria-hidden="true" />
              <span className="text-sm text-slate-200">LinkedIn</span>
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 hover:border-cyan-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <FaGithub className="text-cyan-300" aria-hidden="true" />
              <span className="text-sm text-slate-200">GitHub</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl sm:p-8"
            noValidate
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-xs font-semibold text-slate-300"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass(errors.name)}
                />
                {errors.name && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <FaExclamationCircle aria-hidden="true" />
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-xs font-semibold text-slate-300"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass(errors.email)}
                />
                {errors.email && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <FaExclamationCircle aria-hidden="true" />
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-semibold text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${fieldClass(errors.message)} min-h-[8rem] resize-y`}
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <FaExclamationCircle aria-hidden="true" />
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {status.state === "success" && (
              <p className="mt-4 flex items-start gap-2 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-300">
                <FaCheckCircle className="mt-0.5 shrink-0" aria-hidden="true" />
                {status.message}
              </p>
            )}
            {status.state === "error" && (
              <p className="mt-4 flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                <FaExclamationCircle
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={status.state === "sending"}
              className="btn-glow mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-6 text-sm font-semibold text-slate-950 disabled:opacity-60"
            >
              <FaPaperPlane aria-hidden="true" />
              {status.state === "sending" ? "Sending..." : "Send Message"}
            </button>

            <p className="mt-4 text-center text-xs text-slate-500">
              Or email me at{" "}
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-cyan-300 underline-offset-2 hover:underline"
              >
                {PROFILE.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
