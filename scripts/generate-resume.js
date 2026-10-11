const fs = require("fs");
const path = require("path");

function escapePdf(text) {
  return String(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

const ops = [];
const fill = (r, g, b) => ops.push(`${r} ${g} ${b} rg`);
const stroke = (r, g, b) => ops.push(`${r} ${g} ${b} RG`);
const rect = (x, y, w, h) => ops.push(`${x} ${y} ${w} ${h} re`, "f");
const line = (x1, y1, x2, y2) => {
  ops.push("1.2 w", `${x1} ${y1} m ${x2} ${y2} l S`);
};
const text = (font, size, x, y, value) => {
  ops.push("BT", `/${font} ${size} Tf`, `${x} ${y} Td`, `(${escapePdf(value)}) Tj`, "ET");
};

fill(0.027, 0.047, 0.086);
rect(0, 772, 595, 70);

fill(1, 1, 1);
text("F2", 22, 48, 808, "Nivetha P K");
fill(0.13, 0.83, 0.93);
text("F1", 11, 48, 788, "Web Developer  |  MCA Student, Kongu Engineering College");

fill(0.2, 0.25, 0.32);
text(
  "F1",
  9,
  48,
  752,
  "nivethapk531@gmail.com   |   github.com/Nivetha0305   |   linkedin.com/in/nivetha0305"
);

stroke(0.13, 0.83, 0.93);
line(48, 738, 547, 738);

const section = (y, title) => {
  fill(0.05, 0.07, 0.1);
  text("F2", 12, 48, y, title);
  stroke(0.13, 0.83, 0.93);
  line(48, y - 6, 200, y - 6);
};

section(716, "SUMMARY");
fill(0.2, 0.25, 0.32);
text("F1", 10, 48, 696, "Web developer and current MCA student at Kongu Engineering College. I build responsive,");
text("F1", 10, 48, 682, "accessible websites with React, JavaScript, and modern CSS. Strong Computer Science");
text("F1", 10, 48, 668, "foundation with live project work focused on clean UI, performance, and user experience.");

section(642, "SKILLS");
fill(0.05, 0.07, 0.1);
text("F2", 10, 48, 622, "Frontend");
fill(0.2, 0.25, 0.32);
text("F1", 10, 110, 622, "HTML5, CSS3, JavaScript, React, Tailwind CSS");
fill(0.05, 0.07, 0.1);
text("F2", 10, 48, 606, "Backend");
fill(0.2, 0.25, 0.32);
text("F1", 10, 110, 606, "Node.js, Express.js");
fill(0.05, 0.07, 0.1);
text("F2", 10, 48, 590, "Database");
fill(0.2, 0.25, 0.32);
text("F1", 10, 110, 590, "MySQL, MongoDB, SQL");
fill(0.05, 0.07, 0.1);
text("F2", 10, 48, 574, "Tools");
fill(0.2, 0.25, 0.32);
text("F1", 10, 110, 574, "Git, GitHub, VS Code, Vercel");

section(548, "PROJECTS");
fill(0.05, 0.07, 0.1);
text("F2", 11, 48, 528, "Deconstruct Clone Website");
fill(0.2, 0.25, 0.32);
text("F1", 10, 48, 512, "Responsive React clone of the Deconstruct brand site with catalog navigation and polished UI.");
text("F1", 9, 48, 498, "Tech: React, Tailwind CSS   |   Live: deconstruct-clone.vercel.app");

fill(0.05, 0.07, 0.1);
text("F2", 11, 48, 474, "Tamil Nadu Tourism Website");
fill(0.2, 0.25, 0.32);
text("F1", 10, 48, 458, "Travel information portal showcasing destinations and heritage across Tamil Nadu.");
text("F1", 9, 48, 444, "Tech: JavaScript, CSS Grid, API   |   Live: nivetha0305.github.io/Tamilnadu-tourism");

section(418, "EDUCATION");
fill(0.05, 0.07, 0.1);
text("F2", 11, 48, 398, "MCA - Master of Computer Applications");
fill(0.13, 0.83, 0.93);
text("F1", 10, 400, 398, "2025 - Present");
fill(0.2, 0.25, 0.32);
text("F1", 10, 48, 382, "Kongu Engineering College  |  Pursuing");

fill(0.05, 0.07, 0.1);
text("F2", 11, 48, 358, "B.Sc. Computer Science");
fill(0.13, 0.83, 0.93);
text("F1", 10, 400, 358, "Completed 2025");
fill(0.2, 0.25, 0.32);
text("F1", 10, 48, 342, "Vellalar College for Women, Erode  |  CGPA 8.32 / 10");

fill(0.05, 0.07, 0.1);
text("F2", 11, 48, 318, "Higher Secondary Education (HSC)");
fill(0.13, 0.83, 0.93);
text("F1", 10, 400, 318, "2021 - 2022");
fill(0.2, 0.25, 0.32);
text("F1", 10, 48, 302, "Kongu Vellalar Matric Higher Secondary School  |  84.1%");

section(276, "CONTACT");
fill(0.2, 0.25, 0.32);
text("F1", 10, 48, 256, "Email: nivethapk531@gmail.com");
text("F1", 10, 48, 240, "GitHub: https://github.com/Nivetha0305");
text("F1", 10, 48, 224, "LinkedIn: https://www.linkedin.com/in/nivetha0305/");

const stream = ops.join("\n") + "\n";
const streamObj = `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}endstream`;
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>",
  streamObj,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((obj, i) => {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
});
const xref = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
offsets.slice(1).forEach((off) => {
  pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
});
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;

const out = path.join(__dirname, "..", "public", "Nivetha_PK_Resume.pdf");
fs.writeFileSync(out, pdf);
console.log("Wrote", out);
