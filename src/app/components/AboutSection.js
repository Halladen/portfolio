"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton.js";
import aboutImage from "../../../puplic/images/about.jpg";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Django</li>
        <li>Node JS</li>
        <li>SQL</li>
        <li>Mongodb</li>
        <li>FastAPI</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>BootStrap</li>
        <li>TailWind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Sulaimanyah</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>CodeSpace - Software Development</li>
        <li>Scientific Computing with Python</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-black mt-10 mx-5 md:mx-10 lg:mx-20" id="projects">
      <div className="md:grid md:grid-cols-2 gap-10 mt-8 ">
        <div className=" flex justify-center md:justify-end">
          <Image
            src={aboutImage}
            alt="About Me"
            width={600}
            className="rounded-lg "
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold  mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Enthusiastic Full-Stack Web Developer with experience in building
            full-stack web applications and software solutions. Proficient in
            Python, JavaScript. Passionate about creating efficient,
            user-friendly applications that solve real-world problems. Eager to
            work in dynamic, collaborative teams. Keen on problem solving and
            constantly seeking opportunities to learn and adopt new skills.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id == tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
