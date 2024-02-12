import React from "react";
import { cta } from "@data/index";
import { HiOutlineChevronDown } from "react-icons/hi";
import Image from "next/image";

const Cta = () => {

  const { title, subtitle, btnText, img1, img2 } = cta;

  return (
    <section className="section bg-orange-500 bg-cover bg-left-top">
      <div className="max-w-[1340px] mx-auto px-[25px]">
        <div className="max-w-[920px] mx-auto text-center">
          <h2
            className="h2 text-white mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {title}
          </h2>
          <p
            className="text-2xl lg:text-4xl text-white"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {subtitle}
          </p>
        </div>

        <div className="flex justify-between">
          <Image
            src={img1}
            alt="img1"
            className="hidden xl:flex"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <button
            className="btn btn-md btn-white mt-[40px] lg:text-[22px] gap-x-[10px] mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {btnText}
            <HiOutlineChevronDown></HiOutlineChevronDown>
          </button>
          <Image
            src={img2}
            alt="img2"
            className="hidden xl:flex"
            data-aos="zoom-out-left"
            data-aos-delay="700"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
