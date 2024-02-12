import React from "react";
import { useState, useEffect } from "react";
import { header } from "@data/index";
import MobileNav from "@components/MobileNav";
import Nav from "@components/Nav";
import Image from "next/image";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { logo, btnText } = header;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "lg:top-0 bg-white shadow-2xl" : "lg:top-[60px]"
      } py-6 lg:py-4 fixed w-full transition-all z-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" data-aos="fade-down" data-aos-delay="1000">
          <Image src={logo} alt="logo"></Image>
        </a>
        <div className="hidden lg:flex" data-aos="fade-down" data-aos-delay="1200">
          <Nav></Nav>
        </div>

        <button className="btn btn-sm btn-outline hidden lg:flex" data-aos="fade-down" data-aos-delay="1400">
          {btnText}
        </button>

        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-accent" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-accent" />
          )}
        </button>

        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w-[60vw]`}
        >
          <MobileNav></MobileNav>
        </div>
      </div>
    </header>
  );
};

export default Header;
