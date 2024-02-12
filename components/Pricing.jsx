import React from "react";
import { pricing } from "@data/index";
import { useState } from "react";
import { HiCheck, HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";

const Pricing = () => {
  const [index, setIndex] = useState(1);
  const { title, cards } = pricing;

  return (
    <section className="section">
      <div className="container mx-auto">
        <h2 className="h2 mb-10 lg:" data-aos="fade-up" data-aos-delay="200">
          {title}
        </h2>
        {/* cards */}
        <div className="flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center">
          {cards.map((card, cardIndex) => {
            const { icon, title, services, price, userAmount, btnText, delay } =
              card;
            return (
              <div
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-delay={delay}
                key={cardIndex}
              >
                <div
                  onClick={() => setIndex(cardIndex)}
                  className={`${
                    index === cardIndex
                      ? "bg-white shadow-2xl"
                      : "border border-gray-50"
                  } 
                w-[350px] h-500px] rounded-[12px] p-[40px] cursor-pointer transition-all bg-purple-50`}
                >
                  {/* card icon */}
                  <div className="mb-8">
                    <Image src={icon} alt=""></Image>
                  </div>

                  <div className="text-[32px] font-semibold mb-8">{title}</div>
                  <div className="flex flex-col gap-y-2 mb-6">
                    {services.map((service, index) => {
                      const { name } = service;
                      return (
                        <div key={index} className="flex items-center">
                          <HiCheck className="text-light"></HiCheck>
                          <div>{name}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mb-10">
                    <div>
                      <span className="text-2xñ">{price}</span>
                      <span className="text-xl text-light font-light">
                        {" "}
                        year{" "}
                      </span>
                    </div>
                    <div className="text-base text-light">{userAmount}</div>
                  </div>
                  {/* btn */}
                  <button
                    className={`${
                      index === cardIndex
                        ? "bg-accent hover:bg-accentHover text-white"
                        : "border border-accent text-accent"
                    } btn btn-sm space-x-[14px]`}
                  >
                    <span>{btnText}</span>
                    <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
