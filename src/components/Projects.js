import React from "react";
import Deconstruct from "../assets/deconstruct.png"

import Tamilnadu from "../assets/tamilnadu tourism.png"

import Restuarant from "../assets/restuarant.png"
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 text-white min-h-screen"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 ">
        {/* Deconstruct Project */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition  ">
          <img
            src={Deconstruct}
            alt="Deconstruct Project"
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Deconstruct Clone</h3>

            <p className="text-gray-400 mb-4">
              A responsive clone of the Deconstruct website built using modern
              UI design and animations.
            </p>

            <a
              href="https://deconstruct-clone.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Restaurant Project */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition ">
          <img
            src={Restuarant}
            alt="Restaurant Project"
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Restaurant Website</h3>

            <p className="text-gray-400 mb-4">
              A responsive restaurant website displaying menu items, food
              categories, and contact information.
            </p>

            <a
              href="https://nivetha0305.github.io/restuarant/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Tamil Nadu Tourism Project */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition ">
          <img
            src={Tamilnadu}
            alt="Tourism Project"
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Tamil Nadu Tourism</h3>

            <p className="text-gray-400 mb-4">
              A tourism website showcasing famous destinations and travel
              information in Tamil Nadu.
            </p>
            <a
              href="https://nivetha0305.github.io/Tamilnadu-tourism/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Form Validation Project */}
        {/* <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
          <img
            src="/images/form.png"
            alt="Form Validation"
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Form Validation</h3>

            <p className="text-gray-400 mb-4">
              A JavaScript form validation project that checks user inputs
              before submission.
            </p>

          
          </div>
        </div> */}
      </div>
    </section>
  );
}