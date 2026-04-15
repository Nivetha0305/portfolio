import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wzf7a07",
        "template_shls4lu",
        form.current,
        "bVCcD9JpmTBe3xucH",
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message");
        },
      );
  };

  return (
    <section id="contact" className="px-8 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Contact</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 max-w-md mx-auto
         text-black"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-2 rounded"
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="p-2 rounded"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          className="p-2 rounded"
        ></textarea>

        <button className="bg-blue-500 text-white py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
