import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-4 border-blue-600 inline-block">
          About Me
        </h2>

        <p className="text-lg mt-6">
          Hello! I'm
          <span className="font-semibold text-blue-600">{" "}Sumit Kumar</span>, a
          passionate <strong>Frontend Developer</strong> based in India. I enjoy
          building clean, responsive, and functional web apps with modern tech.
        </p>

        <p className="text-lg mt-4">
          My current stack includes <strong>React</strong>,{" "}
          <strong>JavaScript</strong>, <strong>Tailwind CSS</strong>, and I'm
          actively learning <strong>Node.js</strong> to become a full-stack
          developer.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left mt-10 text-lg">
          <p>
            <span className="font-semibold">Name:</span> Sumit Kumar
          </p>
          <p>
            <span className="font-semibold">Location:</span> Ranchi (Remote
            Friendly)
          </p>
          <p>
            <span className="font-semibold">Education:</span> B.C.A (Bachelor's
            in Computer Applications)
          </p>
          <p>
            <span className="font-semibold">Languages:</span> Hindi, English
          </p>
        </div>

        <h3 className="text-2xl font-semibold mt-12 mb-4">
          Skills & Technologies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-white">
          <div className="bg-blue-600 p-3 rounded-md">React</div>
          <div className="bg-yellow-500 p-3 rounded-md">JavaScript</div>
          <div className="bg-sky-500 p-3 rounded-md">Tailwind CSS</div>
          <div className="bg-gray-800 p-3 rounded-md">Git & GitHub</div>
          <div className="bg-green-600 p-3 rounded-md">Node.js (Learning)</div>
          <div className="bg-red-500 p-3 rounded-md">HTML5</div>
          <div className="bg-indigo-600 p-3 rounded-md">CSS3</div>
          <div className="bg-purple-700 p-3 rounded-md">C++</div>
        </div>

        <h3 className="text-2xl font-semibold mt-12 mb-4">My Journey</h3>
        <ul className="text-left list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>👨‍💻 Started Learning C and C++ in 2022.</li>
          <li>👨‍💻 After that I started Learning DSA in C++ </li>
          <li>
            👨‍💻Then Started learning web development in 2024 with HTML, CSS, and
            JavaScript
          </li>
          <li>📚 Currently Making projects with React and Tailwindcss</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-12 mb-4">Fun Facts</h3>
        <ul className="text-left list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>I love solving challenges on LeetCode and HackerRank</li>
          <li>I design UIs when I get creative ideas</li>
          <li>
            I follow tech YouTubers and web dev podcasts for fun & learning
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
