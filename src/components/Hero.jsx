import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDownload, FaEye } from "react-icons/fa";
import profileImg from "../assets/picofme.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen  bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col items-center justify-center text-center px-4"
    >
      <img
        src={profileImg}
        alt="my-profile"
        className="w-48 h-48 mt-10 rounded-full object-cover mb-6 shadow-lg hover:shadow-gray-600 transform"
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Sumit Kumar
      </h1>
      <p className="text-xl md:text-2xl mb-6">
        Frontend Developer | React Enthusiast
      </p>
      <p className="max-w-xl text-md md:text-lg text-gray-700 dark:text-gray-300 mb-8">
        I create responsive, modern, and user-friendly web applications using
        React, JavaScript, and Tailwind CSS.
      </p>

      <div className="flex gap-4 mb-6">
        <a
          href="/projects"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-800 transition flex items-center gap-2"
        >
          <FaEye />
          View Resume
        </a>
      </div>

      <div className="flex gap-3 text-3xl">
        <a
          href="https://github.com/sumit320"
          className="hover:text-blue-600 hover:-translate-y-1 transition-transform duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sumitkr001/"
          className="hover:text-blue-600 hover:-translate-y-1 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Hero;
