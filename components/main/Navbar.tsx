import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center hidden md:flex" // Muestra en pantallas medianas y más grandes
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin mr-[15px]"
          />

          <span className="font-bold ml-[25px] text-gray-300">
            Santino Mantineo
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.to}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block" // Oculta en pantallas más pequeñas que md
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
