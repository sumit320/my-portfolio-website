import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className=" min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-blue-600 inline-block">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        <div className="flex gap-3 text-3xl mt-5">
          <a
            href="https://github.com/sumit320"
            target="_blank"
            className="hover:text-blue-600 hover:-translate-y-1 transition-transform duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sumitkr001/"
            target="_blank"
            className="hover:text-blue-600 hover:-translate-y-1 transition-transform duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
