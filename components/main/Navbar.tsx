import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between m-auto">
      <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center hidden md:flex" // Muestra en pantallas medianas y más grandes
        >

          <span className="font-bolder text-lg  text-gray-400 cursive">
            Santino Mantineo
          </span>
        </a>
        <div className="flex items-center justify-between w-full md:w-[500px] h-auto border border-[#7042f861] bg-[#0300145e] md:mr-0 mr-[15px] md:px-[20px] py-[10px] my-[10px] pl-[10px] pr-[10px] rounded-full text-gray-200 mb-2 md:mb-0">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#experience" className="cursor-pointer">
            Experience
          </a>
          <a href="#education" className="cursor-pointer">
            Education
          </a>
        </div>

        <div className="flex flex-row gap-2 md:gap-5 mt-2 md:mt-0">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.to}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={32}
                height={32}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
