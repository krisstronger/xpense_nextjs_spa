import React from "react";
import { copyright } from "@data/index";
import Image from "next/image";

const Copyright = () => {
  const { link1, link2, copyText, social } = copyright;
  return (
    <div
      className="flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="200"
    >
      <div className="flex gap-x-6">
        <a className="hover:text-accent transition" href={link1.href}>
          {link1.name}
        </a>
        <a className="hover:text-accent transition" href={link2.href}>
          {link2.name}
        </a>
      </div>
      <div className="">{copyText}</div>
      {/* social icons */}

      <ul className="flex gap-x-[12px]">
        {social.map((item, index) => {
          const { href, icon } = item;
          return (
            <li key={index}>
              <a href={href}>
                <Image src={icon}></Image>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Copyright;
