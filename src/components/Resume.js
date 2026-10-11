import React from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { PROFILE, RESUME_FILENAME, RESUME_HREF } from "../data";
import ResumeLink from "./ResumeLink";
import Section from "./Section";

export default function Resume() {
  return (
    <Section
      id="resume"
      ariaLabelledby="resume-heading"
      className="relative z-10 border-t border-white/5 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Resume
        </p>
        <h2
          id="resume-heading"
          className="text-center text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-tight text-slate-50"
        >
          Resume preview
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
          View or download a copy of my resume.
        </p>

        <div className="mx-auto mt-10 hidden w-full max-w-4xl lg:block">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <div className="relative w-full" style={{ paddingTop: "129%" }}>
              <iframe
                title="Nivetha P K resume preview"
                src={`${RESUME_HREF}#view=FitH&toolbar=0`}
                className="absolute inset-0 h-full w-full border-0 bg-white"
              />
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <ResumeLink className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-6 text-sm font-semibold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">
              <FaDownload aria-hidden="true" />
              Download Resume
            </ResumeLink>
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-xl lg:hidden">
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/25 sm:p-8">
            <p className="text-[clamp(1.4rem,5vw,1.85rem)] font-bold text-slate-50">
              {PROFILE.name}
            </p>
            <p className="mt-1 text-cyan-300">{PROFILE.title}</p>
            <p className="mt-2 text-sm text-slate-400">
              MCA — Kongu Engineering College
            </p>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Web developer and current MCA student focused on React, responsive
              interfaces, and building clean, user-friendly websites. Academic
              background in Computer Science with live project work in React and
              JavaScript.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={RESUME_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-4 text-sm font-semibold text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                View Resume
              </a>
              <a
                href={RESUME_HREF}
                download={RESUME_FILENAME}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-4 text-sm font-semibold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              >
                <FaDownload aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}
