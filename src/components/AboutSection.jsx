import React, { useState, useTransition } from "react";
import aboutImage from "../images/about.jpg";
import TabButton from "./TabButton.jsx";
import { useScroll } from "../contexts/ScrollContext.jsx";
import { GiAchievement } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";
import { useTheme } from "../contexts/ThemeContext.jsx";
import degree from "../images/degree.webp";

const AboutSection = () => {
  const { theme } = useTheme();
  const { aboutSectionRef } = useScroll();

  return (
    <section
      ref={aboutSectionRef}
      className="text-black dark:text-white my-10 md:mx-20 "
    >
      <h2 className="text-4xl text-center font-bold my-16">About Me</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="text-center shadow-lg shadow-slate-400 p-3 flex flex-col items-center flex-shrink-0 min-w-80 h-36 border border-black dark:border-white rounded-xl">
          <PiCertificateFill
            color={`${theme == "dark" ? "white" : "black"}`}
            size={30}
          />
          <h1 className="my-auto font-bold">Bachelors Degree in English</h1>
        </div>
        <div className="text-center shadow-lg shadow-slate-400 flex flex-col items-center flex-shrink-0 p-3 min-w-80 h-36 border border-black dark:border-white rounded-xl">
          <GiAchievement
            color={`${theme == "dark" ? "white" : "black"}`}
            size={30}
          />
          <ul className="my-auto font-bold ">
            <li className="my-2">PDA Software Development</li>
            <li>CodeSpace - Software Development</li>
          </ul>
        </div>
      </div>
      <div className="p-10">
        <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-[690px] mx-auto">
          I am an enthusiastic software developer that loves to code and learn.
          I have developed many significant skills to design, build and maintain
          software programs. I am passionate, hardworking and keen about problem
          solving and enhancing my potential to be a better developer. I am
          eager to join and work in a collaborative team.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
