// Experience.tsx

import React from "react";
import ExperienceCard from "../sub/ExperienceCard";

const projectsData = [
  {
    src: "/tiendasLocales.JPG",
    title: "Tiendas Locales",
    description: "Tiendas Locales is a paid freelance project based on the idea of E-Commerce, which offers a way to connect a city of more than 15,000 people. I implemented secure cross-user payments, efficient databases, and real-time notifications. Additionally, I developed a post system and the full logic in payments, dashboard, posts, reviews, login, register, etc.",
    webUrl: "https://www.tiendaslocales.com.ar",
  },
  {
    src: "/vetli.JPG",
    title: "Vetli",
    description: 
    "Vetli is a startup operating in Hong Kong and soon Europe, where I serve as a Software Engineer. Currently my role involves developing an admin dashboard focusing on scalability. Some of the tools I applied in this project are Firebase Auth and Firebase Realtime Database, using Javascript as the main programming language.",
    webUrl: "https://wearevetli.com",
  }
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="experience">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2 mb-[25px] text-center">
        Professional Experience
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-20 px-10 items-center justify-center">
        {projectsData.map((project, index) => (
          <ExperienceCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
