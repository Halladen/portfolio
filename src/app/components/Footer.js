import React from "react";
import heroImg from "../../../puplic/hero.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent">
      <div className="container px-12 py-8 flex justify-around items-center">
        <Link href={"#"} className="font-bold text-2xl ">
          <Image
            src={heroImg}
            alt="logo image"
            width={40}
            className="rounded-full border-2 border-red-900 md:my-2"
          />
        </Link>
        <p className="">&copy; 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
