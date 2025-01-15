import React, { useEffect, useRef } from "react";
import NavLink from "./NavLink";
const MenuOverlay = ({ links, handleScroll, handleNavbar, isNavOpen }) => {
  const linkRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (linkRef.current && !linkRef.current.contains(event.target)) {
        handleNavbar(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <ul ref={linkRef} className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            path={link.path}
            title={link.title}
            handleScroll={handleScroll}
            handleNavbar={handleNavbar}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
