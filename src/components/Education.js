import React from "react";

export default function Education() {
 const education = [
   {
     title: "B.Sc. Computer Science",
     school: "Vellalar College for Women, Erode",
     description:
       "Graduated with a CGPA of 8.32. Built a strong foundation in programming, data structures, web technologies, database management systems, and software development principles.",
     tags: [
       "Programming",
       "Data Structures",
       "Database Management",
       "Web Development",
     ],
     year: "2022 - 2025",
   },
   {
     title: "Higher Secondary Certificate (HSC)",
     school: "Kongu Vellalar Matric Higher Secondary School",
     description:
       "Completed Higher Secondary Education with 84.1%. Developed strong analytical, mathematical, and problem-solving skills that laid the foundation for pursuing Computer Science.",
     tags: ["Mathematics", "Computer Science", "Problem Solving"],
     year: "2021 - 2022",
   },
 ];

  return (
    <section id="education" className="bg-[#071225] text-white  px-6 md:px-16 py-20">
      <div className="grid md:grid-cols-[320px_1fr] gap-16">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-6">
            The Academic Path
          </h1>

          <p className="text-gray-300 leading-8">
            Continuous growth through formal education and self-driven
            explorations in computer science.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-10">
          {/* Vertical Line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-white/10"></div>

          {education.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row justify-between gap-8 mb-16"
            >
              {/* Dot */}
              <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full bg-orange-500 border-4 border-[#071225]" />

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-orange-400 mb-2">
                  {item.title}
                </h2>

                <h4 className="italic text-white/90 mb-4">{item.school}</h4>

                <p className="text-gray-300 leading-7 mb-4 max-w-3xl">
                  {item.description}
                </p>

                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-200 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Year Badge */}
              <div className="self-start">
                <span className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
