"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Ruta del archivo
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-4 sm:px-23 mt-40 w-full z-[20] lg:ml-20" // Ajuste de margen para pantallas grandes
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>
            Crafting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              code{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              designing{" "}
            </span>experiences
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Developer with experience in responsibe Websites,
          and Software development. Check out my projects and skills.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 w-auto">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg min-w-[220px] pl-[10px] pr-[10px]"
            onClick={handleDownload}
          >
            Download CV
          </motion.a>

          {/* Botón de LinkedIn */}
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg min-w-[220px] pl-[10px] pr-[10px]"
            href="https://www.linkedin.com/in/santino-mantineo-318231201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </motion.a>
        </div>
      </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
    </motion.div>
  );
};

export default HeroContent;
