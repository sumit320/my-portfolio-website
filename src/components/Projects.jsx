import React from "react";
import projects from "../Data/Projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b-4 border-blue-600 inline-block">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded shadow-md  hover:scale-110 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-100 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex justify-around items-center md:text-lg font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-600 hover:text-blue-500"
                >
                  GitHub
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
