import { useEffect } from "react";
import { Link } from "react-router-dom";
const NavLink = ({ path, title, handleScroll, handleNavbar }) => {
  return (
    <Link
      onClick={() => {
        handleScroll(title);
        handleNavbar(false);
      }}
      to={path}
      className="block py-2 pl-3 pr-4 hover:text-slate-500 sm:text-xl rounded md:p-0 "
    >
      {title}
    </Link>
  );
};

export default NavLink;
