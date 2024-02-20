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
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-[600px]">
      <Image
        src={src}
        alt={title}
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />

      <div className="relative p-4 z-40">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className={`mt-2 text-gray-300 ${webUrl ? 'mb-[20px]' : 'mb-[35px]'}`}>{description}</p>

        <div className={`flex flex-col items-center ${webUrl ? 'mb-[20px]' : 'mb-[35px]'}`}>
          {webUrl && (
            <a
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg pl-[10px] pr-[10px] whitespace-nowrap"
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              See Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
