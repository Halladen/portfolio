import React from "react";
import { Link } from "react-router-dom";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/16/solid";
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div className="h-72 w-72 shadow-lg shadow-slate-500 dark:shadow-slate-400 rounded-xl">
        <img
          src={imgUrl}
          alt={title}
          className="w-full rounded-xl h-full object-fill"
          loading="lazy"
        />
      </div>
      <div
        className="hidden group h-72 w-72   rounded-2xl relative  bg-cover object-cover  border-2"
        style={{
          background: `url(${imgUrl}) no-repeat center `,
        }}
      >
        {/* overlay */}
        <div className="overlay rounded-t-xl  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            target="_blank"
            to={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            target="_blank"
            to={previewUrl || "#"}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="dark:text-white rounded-b-xl py-6 text-center">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <div className="flex flex-nowrap justify-between items-center my-5">
          <Link
            className="inline-block w-[45%] h-full"
            target="_blank"
            to={gitUrl}
            rel="noopener noreferrer"
          >
            <div className="text-white py-3 rounded-full  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-700 ">
              GitHub
            </div>
          </Link>

          <Link
            className={`inline-block w-[45%] h-full ${
              !previewUrl ? "pointer-events-none opacity-80" : ""
            }`}
            target={previewUrl ? "_blank" : undefined}
            to={previewUrl || "#"}
            rel={previewUrl ? "noopener noreferrer" : undefined}
          >
            <button
              title={!previewUrl ? "Demo not available for this project" : ""}
              className="px-1 py-1 w-full  rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {previewUrl ? "Live Demo" : "No Demo"}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
