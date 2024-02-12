import React from 'react';
import { nav } from "@data/index";


const Nav = () => {
  return <nav>
   <ul className="flex gap-x-10">
        {nav.map((item, index) => {
          const { href, name } = item;
          return (
            <li key={index}>
              <a href={href} className="hover:text-accent transition">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
  </nav>;
};

export default Nav;
