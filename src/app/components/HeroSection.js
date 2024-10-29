"use client";
import React from "react";
import Image from "next/image";
import heroImg from "../../../puplic/hero.webp";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const HeroSection = () => {
  return (
    <section className="mt-20 pt-10">
      <div className="grid grid-cols-12 gap-5 mx-5">
        <div className="col-span-12 md:col-span-6   ">
          <div>
            <Image
              src={heroImg}
              alt="hero image"
              width={300}
              height={300}
              className="rounded-full border-2 border-black mx-auto md:mr-4 md:ml-auto"
            />
          </div>
        </div>
        <div className="text-black col-span-12 md:col-span-6 text-center md:text-left md:px-4 ">
          <h5 className="text-xl md:text-2xl font-extrabold my-4 text-transparent bg-clip-text  bg-gradient-to-r from-blue-600 to-yellow-600">
            Hello, I'm
          </h5>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 whitespace-pre-line">
            <TypeAnimation
              sequence={["Riaz", 1000, "Full-Stack Developer", 1000]}
              cursor={false}
              repeat={Infinity}
              style={{ display: "block", height: "100px" }}
            />
          </h1>
          <div className="flex flex-col md:flex-row gap-5 mb-4 justify-center md:justify-start">
            <Link
              href={"#"}
              className="text-white border-2 border-black rounded-full px-6 py-3 bg-gradient-to-br from-purple-600 to-pink-600"
            >
              Hire me
            </Link>
            <Link
              href={"#"}
              className="border-2 border-red-500 rounded-full px-1 py-1  bg-blue-600"
            >
              <span className="bg-[#121212] hover:bg-slate-800 text-white     block px-5 py-2 rounded-full">
                Download CV
              </span>
            </Link>
          </div>
          <div className="flex flex-nowrap gap-3 justify-center md:justify-start md:pl-2">
            <Link href={"#"}>
              <VscGithub size={30} color="purple" />
            </Link>
            <Link href={"#"}>
              <FaLinkedin size={30} color="blue" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
