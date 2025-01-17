import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useScroll } from "../contexts/ScrollContext";

const projectsData = [
  {
    id: 0,
    title: "MyMovie",
    description: "",
    image: "/images/projects/mymovie.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/mymovie",
    previewUrl: "https://halladen-mymovie.netlify.app/",
  },

  {
    id: 1,
    title: "Sorting Algorithms",
    description: "",
    image: "/images/projects/sort-algorithm.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/sorting-algorithms",
    previewUrl: "https://halladed-sorting-algorithms.netlify.app/",
  },
  {
    id: 2,
    title: "E-commerce",
    description: "",
    image: "/images/projects/ecommerce.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/e_commerce",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Drag & Drop Notes",
    description: "",
    image: "/images/projects/dragdrop.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/drag-drop-notes",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Quote Machine",
    description: "",
    image: "/images/projects/quote.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/quote-machine",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Currency Converter",
    description: "",
    image: "/images/projects/converter.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Halladen/currency-converter",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Task Manager",
    description: "",
    image: "/images/projects/task.webp",
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
