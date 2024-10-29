import React from "react";

const ProjectTag = ({ name, isSelected, onClick }) => {
  const buttonStyles = isSelected
    ? "  border-slate-600"
    : "text-[#181818] border-primary-500  hover:border-black";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {" "}
      {name}
    </button>
  );
};

export default ProjectTag;
