import React, { useState } from "react";
import { useScroll } from "../contexts/ScrollContext";
import { FaPython, FaHtml5, FaCss3Alt, FaDocker } from "react-icons/fa";
import {
  RiJavascriptFill,
  RiReactjsLine,
  RiNodejsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { TbBrandDjango, TbBrandMysql, TbBrandCypress } from "react-icons/tb";
import { SiFastapi, SiExpress, SiMongodb } from "react-icons/si";
import { FaGithub, FaGitAlt } from "react-icons/fa6";
import { RiBootstrapFill } from "react-icons/ri";
import { useTheme } from "../contexts/ThemeContext";
import { FaLaptopCode } from "react-icons/fa";

const skills = {
  languages: ["Python", "JavaScript", "HTML", "CSS"],
  frameworks: ["React JS", "Django", "FastAPI", "Node JS", "Express"],

  database: ["MySQL", "Mongodb"],
  testing: ["Cypress"],
  other: ["Tailwindcss", "Bootstrap", "Docker", "Git", "GitHub", "OOP"],
};

const SkillsSection = () => {
  const { theme } = useTheme();
  const { skillsSectionRef } = useScroll();

  const getIcon = (framework) => {
    switch (framework) {
      case "Python":
        return <FaPython />;
      case "JavaScript":
        return <RiJavascriptFill />;
      case "HTML":
        return <FaHtml5 />;
      case "CSS":
        return <FaCss3Alt />;
      case "React JS":
        return <RiReactjsLine />;
      case "Django":
        return <TbBrandDjango />;
      case "FastAPI":
        return <SiFastapi />;
      case "Node JS":
        return <RiNodejsLine />;
      case "Express":
        return <SiExpress />;
      case "MySQL":
        return <TbBrandMysql />;
      case "Mongodb":
        return <SiMongodb />;
      case "Cypress":
        return <TbBrandCypress />;
      case "Docker":
        return <FaDocker />;
      case "GitHub":
        return <FaGithub />;
      case "Git":
        return <FaGitAlt />;
      case "Tailwindcss":
        return <RiTailwindCssFill />;
      case "Bootstrap":
        return <RiBootstrapFill />;
      case "OOP":
        return <FaLaptopCode />;
      default:
        return null;
    }
  };
  return (
    <section
      ref={skillsSectionRef}
      id="skills"
      className="text-black dark:text-white my-10 md:mx-20"
    >
      <h2 className="text-4xl text-center font-bold mt-16 mb-10">Skills</h2>
      <div className="flex flex-wrap justify-around  gap-5 px-10 lg:px-40">
        {Object.keys(skills).map((skill) => (
          <div key={skill} className=" rounded-lg  w-96 md:w-36 pb-5">
            <h1 className="font-bold text-xl w-36 p-3 mx-auto text-center mb-4 px-1 shadow-lg shadow-slate-500 rounded  text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600">
              {skill.charAt(0).toUpperCase() + skill.slice(1)}
            </h1>
            {skills[skill].map((teck) => (
              <div
                key={teck}
                className=" flex  items-center justify-center md:justify-start gap-1 px-2 "
              >
                <div className="">{getIcon(teck)}</div>
                <div className="">{teck}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
