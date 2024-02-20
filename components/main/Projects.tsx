// Projects.tsx

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projectsData = [
  {
    src: "/Locanjeamos.JPG",
    title: "Lo Canjeamos",
    description: "Lo Canjeamos 🔄 is a user-friendly web platform and mobile app that tackles the challenge of prices on e-commerce platforms in Latin America.",
    repoUrl: "https://github.com/SantinoMantineo/Lo-Canjeamos",
    webUrl: "https://locanjeamos.com.ar",
  },
  {
    src: "/Lamp.JPG",
    title: "Ligth-Web",
    description: "The place to discover the latest trends in lighting and transform your spaces with style. Elevate your spaces with sophistication.",
    repoUrl: "https://github.com/SantinoMantineo/Light-Web",
    webUrl: "https://smt-lamp-website.netlify.app",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2 mb-[25px]">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-20 px-10 items-center justify-center">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
