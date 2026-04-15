import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md sticky top-0">
        <h1 className="text-xl font-bold text-blue-400">Nivetha</h1>

        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
