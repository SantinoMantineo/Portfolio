// Projects.tsx

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projectsData = [
  {
    src: "/Locanjeamos.JPG",
    title: "Lo Canjeamos",
    description: "Lo Canjeamos 🔄 is a user-friendly web platform and mobile app that tackles the challenge of skyrocketing prices on major e-commerce platforms in Latin America.",
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
  {
    src: "/DogsClub.JPG",
    title: "Dog's Club",
    description: "Bring your dream dogs to life with our intuitive creation feature. Customize breeds, colors, and personalities to design your perfect virtual pup.",
    repoUrl: "https://github.com/SantinoMantineo/PI-Dogs-main",
  },
  {
    src: "/rickymorty.JPG",
    title: "Rick & Morty",
    description: "A passion project born from my journey through each bootcamp's module. Create and add Favorites R&M characters!",
    repoUrl: "https://github.com/SantinoMantineo/Rick_Morty_Vite",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2 mb-[25px]">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
