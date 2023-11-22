import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  repoUrl: string;
  webUrl?: string;
}

const ProjectCard = ({ src, title, description, repoUrl, webUrl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-40">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className={`mt-2 text-gray-300 ${webUrl ? 'mb-[20px]' : 'mb-[35px]'}`}>{description}</p>

        <a
          className={`py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] 
            ${webUrl ? 'ml-[15%]' : 'ml-[36%]'} pl-[10px] pr-[10px]`}
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          See Code
        </a>

        {webUrl && (
          <a
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg pl-[10px] ml-[20%] pr-[10px]"
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            See Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
