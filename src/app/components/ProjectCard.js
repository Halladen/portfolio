import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/16/solid";
// import { motion } from "framer-motion";
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="">
      <div className="h-52 md:h-72 rounded-t-xl relative group">
        <Image
          fill
          src={imgUrl}
          alt={title}
          style={{ backgroundSize: "cover", objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-xl"
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#181818] hover:border-black group/link"
          >
            <CodeBracketIcon className="h-10 w-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#181818] hover:border-black group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#181818] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className=" rounded-b-xl mt-3 text-white bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
