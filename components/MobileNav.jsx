import React from "react";
import { nav } from "@data/index";

const MobileNav = () => {
  return (
    <div className="bg-accent/95 w-full h-full">
      <ul className=" h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, index) => {
          const { href, name } = item;
          return (
            <li key={index}>
              <a href={href} className="link text-white text-xl">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
