import React, { useEffect, useState } from "react";
import { FaBars, FaDownload, FaTimes } from "react-icons/fa";
import { PROFILE, RESUME_FILENAME, RESUME_HREF } from "../data";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
      active === id ? "text-cyan-300" : "text-slate-300 hover:text-white"
    }`;

  const resumeBtn =
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-4 text-sm font-semibold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-white/10 bg-[#050A14]/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-base font-bold tracking-tight text-slate-50"
        >
          {PROFILE.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={linkClass(l.id)}
                aria-current={active === l.id ? "page" : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={RESUME_HREF}
            download={RESUME_FILENAME}
            className={resumeBtn}
          >
            <FaDownload aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050A14]/95 px-4 pb-5 pt-3 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block ${linkClass(l.id)}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={RESUME_HREF}
            download={RESUME_FILENAME}
            onClick={() => setOpen(false)}
            className={`${resumeBtn} mt-4 w-full`}
          >
            <FaDownload aria-hidden="true" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
