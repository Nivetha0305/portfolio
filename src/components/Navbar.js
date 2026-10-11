import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Roles", href: "#career-interests" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Strengths", href: "#strengths" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-accent-blue via-accent-cyan to-blue-400 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-decoration-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-blue to-accent-cyan flex items-center justify-center font-bold text-navy-950 shadow-md group-hover:scale-105 transition-transform duration-300">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-light group-hover:text-accent-cyan transition-colors">
                Nivetha P K
              </span>
              <span className="text-[11px] text-slate-muted tracking-wide font-medium">
                MCA Student
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-slate-muted hover:text-slate-light transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-accent-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}

            <a
              href="mailto:nivethapk531@gmail.com"
              className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue/10 border border-accent-blue/30 text-accent-blue hover:bg-accent-blue hover:text-navy-950 text-sm font-semibold transition-all duration-300 shadow-sm"
            >
              <FaEnvelope className="text-xs" />
              <span>Get in Touch</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 rounded-lg text-slate-muted hover:text-slate-light hover:bg-white/5 transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 shadow-2xl transition-all">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-accent-cyan hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <a
                  href="mailto:nivethapk531@gmail.com"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent-blue text-navy-950 font-bold text-sm shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  <FaEnvelope />
                  <span>Email nivethapk531@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
