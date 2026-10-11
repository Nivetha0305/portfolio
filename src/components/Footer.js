import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { PROFILE } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-slate-100">{PROFILE.name}</p>
          <p className="text-sm text-slate-500">{PROFILE.title}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <FaEnvelope />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <FaLinkedin />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-xs text-slate-500">
          © {year} {PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
