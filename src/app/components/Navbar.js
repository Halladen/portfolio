"use client";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../../../puplic/hero.webp";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 px-10 z-50  bg-slate-100">
      <div className="flex justify-between items-center ">
        <Link href={"#"} className="font-bold text-2xl ">
          <Image
            src={heroImg}
            alt="logo image"
            width={40}
            className="rounded-full border-2 border-red-900 md:my-2"
          />
        </Link>
        <div className="icons block md:hidden my-3">
          {isNavbarOpen ? (
            <button onClick={() => setIsNavbarOpen(false)}>
              <XMarkIcon className="w-8 h-8" />
            </button>
          ) : (
            <button onClick={() => setIsNavbarOpen(true)}>
              <Bars3Icon className="w-8 h-8" />
            </button>
          )}
        </div>
        <div className="menu hidden md:flex items-center gap-5 my-3">
          <Link
            href={"#about"}
            className="hover:border-b-2 borde-red-900 text-xl"
          >
            About
          </Link>
          <Link
            href={"#projects"}
            className="hover:border-b-2 borde-red-900 text-xl"
          >
            Projects
          </Link>
          <Link
            href={"#contact"}
            className="hover:border-b-2 borde-red-900 text-xl"
          >
            Contact
          </Link>
        </div>
      </div>
      {isNavbarOpen ? (
        <div className="mobile-menu flex flex-col justify-center items-center gap-4 md:hidden mt-2 mb-4">
          <Link href={"#about"} className="hover:border-b-2 borde-red-900">
            About
          </Link>
          <Link href={"#projects"} className="hover:border-b-2 borde-red-900">
            Projects
          </Link>
          <Link href={"#contact"} className="hover:border-b-2 borde-red-900">
            Contact
          </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
