import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import email from '../assets/email.png'
import emailHover from '../assets/emailhover.png'

import user from '../assets/user.png'
import userhover from '../assets/userhover.png'

export default function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    const nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-z]{2,}$/;
                const emailRegex = /^[a-zA-Z]*\d*@[a-zA-Z]*\.[a-z]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Only alphabets allowed";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm(
        "service_wzf7a07",
        "template_shls4lu",
        form.current,
        "bVCcD9JpmTBe3xucH",
      )
      .then(() => {
        alert("Message Sent Successfully!");
        setFormData({
          name: "",
          email: "",

          message: "",
        });
        setErrors({});
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <section id="contact" className="bg-[#0B1324] text-white py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold leading-snug">
            LET'S BUILD SOMETHING <br /> REMARKABLE
          </h2>

          <p className="text-gray-400 max-w-md">
            I'm currently seeking a full-time position or freelance
            collaborations. If you have a project in mind or just want to chat
            tech, drop me a message.
          </p>

          {/* Email */}
          <div className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#1D2332] transition-all duration-300 group-hover:bg-[#FF572A]">
              <img
                src={email}
                alt="email icon"
                className="absolute w-6 h-6 transition-opacity duration-300 group-hover:opacity-0"
              />

              <img
                src={emailHover}
                alt="email icon hover"
                className="absolute w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <div>
              <p className="text-sm text-orange-400">EMAIL ME</p>
              <p className="text-gray-300">nivethapk531@gmail.com</p>
            </div>
          </div>

          {/* Name */}
          <div className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[#1D2332] transition-all duration-300 group-hover:bg-[#FF572A]">
              <img
                src={user}
                alt="user icon"
                className="absolute w-6 h-6 transition-opacity duration-300 group-hover:opacity-0"
              />

              <img
                src={userhover}
                alt="user icon hover"
                className="absolute w-6 h-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-orange-400 tracking-wide">SOCIALS</p>

              <div className="flex gap-6 text-gray-400 text-sm">
                <a
                  href="https://github.com/Nivetha0305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-300"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/nivetha0305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-300"
                >
                  LinkedIn
                </a>

                <a
                  href="https://vercel.com/nivethas-projects-0967029d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-300"
                >
                  Vercel
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#111827] p-8 rounded-2xl shadow-xl space-y-6"
        >
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-[#070E1D] text-white outline-none
        ${errors.name ? "border-2 border-red-500" : "border border-gray-700 focus:border-orange-400"}`}
          />

          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

          <input
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-[#070E1D] text-white outline-none
        ${errors.email ? "border-2 border-red-500" : "border border-gray-700 focus:border-orange-400"}`}
          />

          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}

          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-[#070E1D] text-white outline-none resize-none
        ${errors.message ? "border-2 border-red-500" : "border border-gray-700 focus:border-orange-400"}`}
          />

          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#FF572A] hover:bg-[#ff6a3d] py-3 rounded-lg font-semibold transition"
          >
            Send Transmission
          </button>
        </form>
      </div>
    </section>
  );
}
