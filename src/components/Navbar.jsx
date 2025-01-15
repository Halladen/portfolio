import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { VscColorMode } from "react-icons/vsc";
import MenuOverlay from "./MenuOverlay";
import { useScroll } from "../contexts/ScrollContext";
import { useTheme } from "../contexts/ThemeContext";

// import { CiDark, CiLight } from "react-icons/ci";
// import { MdLightMode, MdNightlight } from "react-icons/md";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const {
    heroSectionRef,
    aboutSectionRef,
    projectsSectionRef,
    contactSectionRef,
  } = useScroll();

  const { theme, toggleTheme } = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (title) => {
    let ref;
    switch (title) {
      case "About":
        ref = aboutSectionRef;
        break;
      case "Projects":
        ref = projectsSectionRef;
        break;
      case "Contact":
        ref = contactSectionRef;
        break;
      case "Hero":
        ref = heroSectionRef;
        break;
      default:
        return;
    }

    //// navbar height
    const navbarHeight = document.getElementById("navbar").offsetHeight;
    window.scrollTo({
      // subtract navbar height from contact element offset
      top: ref.current.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  };
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-10 bg-slate-100  text-black dark:bg-black dark:text-white"
    >
      <div className="min-h-16 flex flex-wrap items-center justify-between md:justify-around px-12 md:px-0 py-2 dark:text-white text-black">
        <div>
          <Link
            onClick={() => {
              scrollToSection("Hero");
              setIsNavOpen(false);
            }}
            className="text-2xl   font-extrabold hover:text-slate-500"
            to="/"
          >
            Riaz
          </Link>
        </div>

        <div className=" flex  justify-center items-center gap-10 md:gap-20 font-semibold">
          <button
            onClick={toggleTheme}
            className="hover:text-slate-500 text-xl"
          >
            <VscColorMode className="inline-block" />{" "}
            <span className="">Theme</span>
          </button>

          {/* small screen menu */}
          <div className="mobile-menu block md:hidden">
            {!isNavOpen ? (
              <button
                onClick={() => setIsNavOpen(true)}
                className="flex items-center px-3   hover:text-slate-500 "
              >
                {/* we have to define hight and width to Iconst to display */}
                <Bars3Icon className="h-7 w-7" />
              </button>
            ) : (
              <button
                onClick={() => setIsNavOpen(false)}
                className="flex items-center px-3   hover:text-slate-500 "
              >
                {/* we have to define hight and width to Iconst to display */}
                <XMarkIcon className="h-7 w-7" />
              </button>
            )}
          </div>

          {/* big screen menu */}
          <div className="menu hidden  md:block md:w-auto">
            <ul className="flex md:flex-row p-4 md:p-0 mt-0 md:space-x-8">
              {navLinks.map((link, index) => (
                <li key={index} onClick={() => scrollToSection(link.title)}>
                  <NavLink title={link.title} path={link.path} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* menu overlay for small screen */}
      {isNavOpen ? (
        <MenuOverlay
          links={navLinks}
          handleScroll={scrollToSection}
          handleNavbar={setIsNavOpen}
          isNavOpen={isNavOpen}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
