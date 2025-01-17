"use client";
import React from "react";
import myPic from "../images/mypic.png";
import heroPic from "../images/hero.webp";
import { TypeAnimation } from "react-type-animation";
import { useScroll } from "../contexts/ScrollContext";
import { useTheme } from "../contexts/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();
  const { heroSectionRef } = useScroll();
  const scrollToSection = () => {
    // navbar height
    const navbarHeight = document.getElementById("navbar").offsetHeight;
    const contactElement = document.getElementById("contact");
    window.scrollTo({
      // subtract navbar height from contact element offset
      top: contactElement.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  };
  return (
    <section ref={heroSectionRef} className=" py-10">
      <div className="h-full flex flex-col md:flex-row justify-center items-center gap-20  text-black dark:text-white">
        {/* image comtainer */}
        <div className="relative flex-shrink-0 w-[300px] h-[300px] md:ml-auto">
          {/* spinning border */}

          <div
            className="conic-container w-full h-full rounded-full motion-safe:animate-spin-slow"
            style={{
              background:
                "conic-gradient(green 0% 5%,transparent 5% 10%,green 10% 15%,transparent 15% 20%,green 20% 25%,transparent 25% 30%,green 30% 35%,transparent 35% 40%,green 40% 45%,transparent 45% 50%,green 50% 55%,transparent 55% 60%,green 60% 65%,transparent 65% 70%,green 70% 75%,transparent 75% 80%,green 80% 85%,transparent 85% 90%,green 90% 95%,transparent 95% 100%)",
            }}
          ></div>

          {/* static image */}
          <div className="absolute top-0 p-1 rounded-full  w-full h-full flex justify-center items-center">
            <img
              className=" rounded-full inset-0 bg-white dark:bg-black"
              // src={theme == "light" ? devPic : devPicDark}
              src={heroPic}
              alt="Developer image"
              loading="lazy"
              // width={300}
              // height={300}
            />
          </div>
        </div>

        {/* hero container */}
        <div className="w-full md:w-1/2  min-h-full text-center md:text-left ">
          <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello I'm
          </div>

          <div className="my-5">
            <TypeAnimation
              sequence={["Riyadh", 1000, "A Software Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            />
          </div>

          {/* buttons */}
          <div>
            <button
              onClick={scrollToSection}
              className="px-6 w-full sm:w-fit py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>
            <a href="/cv.pdf" download="cv.pdf">
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
