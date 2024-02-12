"use client";
import { product } from "@data/index";
import ArrowImg from "@public/assets/img/product/cards/arrow.svg";
import { useState } from "react";
import Image from "next/image";

const Cards = () => {
  const [index, setIndex] = useState(1);
  const { cards } = product;

  return (
    <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]">
      {cards.map((card, cardIndex) => {
        const { icon, title, subtitle, delay } = card;
        return (
          <div
            key={cardIndex}
            data-aos="zoom-out"
            data-aos-offset="300"
            data-aos-delay={delay}
          >
            <div
              onClick={() => setIndex(cardIndex)}
              className={`${index === cardIndex && "bg-white shadow-2xl"} 
                w-[350px] h-[350px] flex flex-col justify-center items-center 
                mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all`}
            >
              {/* card */}
              <div className="mb-6">
                <Image src={icon} alt=""></Image>
              </div>
              {/* card title */}
              <div className="mb-3 text-[30px] font-medium">{title}</div>
              <p className="mb-6 text-light">{subtitle}</p>
              {index === cardIndex && <Image src={ArrowImg} alt=""></Image>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
