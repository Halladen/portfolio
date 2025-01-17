import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ProjectTag = ({ name, isSelected, onClick }) => {
  const { theme } = useTheme();
  const buttonStyles = isSelected
    ? "border-slate-600 dark:border-slate-100"
    : "border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-400 ";
  return (
    <button
      className={`${buttonStyles} dark:text-white text-black shadow-sm shadow-slate-400 rounded-full border-2 px-6 py-2 text-base cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {" "}
      {name}
    </button>
  );
};

export default ProjectTag;
