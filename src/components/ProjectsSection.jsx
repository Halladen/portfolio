import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import myMovie from "../images/projects/mymovie.png";
import ecommerceImg from "../images/projects/ecommerce.png";
import sortingImg from "../images/projects/sort-algorithm.png";
import QuoteImg from "../images/projects/quote.png";
import noteImg from "../images/projects/dragdrop.png";
import converterImg from "../images/projects/converter.png";
import taskImg from "../images/projects/task.png";
import ProjectTag from "./ProjectTag";
import { useScroll } from "../contexts/ScrollContext";

const projectsData = [
  {
    id: 0,
    title: "MyMovie",
    description: "",
    image: myMovie,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/mymovie",
    previewUrl: "https://halladen-mymovie.netlify.app/",
  },

  {
    id: 1,
    title: "Sorting Algorithms",
    description: "",
    image: sortingImg,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/sorting-algorithms",
    previewUrl: "https://halladed-sorting-algorithms.netlify.app/",
  },
  {
    id: 2,
    title: "E-commerce",
    description: "",
    image: ecommerceImg,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/e_commerce",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Drag & Drop Notes",
    description: "",
    image: noteImg,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/drag-drop-notes",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Quote Machine",
    description: "",
    image: QuoteImg,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/quote-machine",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Currency Converter",
    description: "",
    image: converterImg,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/currency-converter",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Task Manager",
    description: "",
    image: taskImg,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/task-manager",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const { projectsSectionRef } = useScroll();
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <section
      ref={projectsSectionRef}
      id="projects"
      className="text-black dark:text-white my-10"
    >
      <h2 className="text-4xl text-center font-bold mt-16 mb-10">Projects</h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "All"}
          name="All"
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Web"}
          name="Web"
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
          name="Mobile"
        />
      </div>
      <ul className=" flex flex-wrap gap-10 md:gap-16 lg:px-20 justify-center items-center ">
        {filteredProjects && filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <li
              key={project.id} // Use a unique identifier
              layout="true"
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              className="list-none"
            >
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </li>
          ))
        ) : (
          <div className="text-black dark:text-white text-xl font-semibold">
            No Project to Show
          </div>
        )}
      </ul>
    </section>
  );
};

export default ProjectsSection;
