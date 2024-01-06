// Experience.tsx

import React from "react";
import ExperienceCard from "../sub/ExperienceCard";

const projectsData = [
  {
    src: "/tiendasLocales.JPG",
    title: "Tiendas Locales",
    description: "Tiendas Locales is a paid freelance project based on the idea of ​​E-Commerce. The web platform offers a way to connect a city of more than 15,000 inhabitants, improve the economy and facilitate the buying and selling of products between neighbors.",
    repoUrl: "https://github.com/maxivalli/TiendasLocales",
    webUrl: "https://tiendaslocales.com.ar",
  }
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="experience">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2 mb-[25px] text-center">
        My Professional Experience
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projectsData.map((project, index) => (
          <ExperienceCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
