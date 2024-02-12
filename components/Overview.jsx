import React from "react";
import { overview } from "@data/index";
import Image from "next/image";

const Overview = () => {
  const { productImg } = overview;

  return (
    <section className="min-h-[400px] lg:min-h-[712px] bg-orange-200 bg-cover bg-left-top pt-[30px] lg:pt-[87px]">
      <div className="container mx-auto flex justify-end overflow-hidden">
        <Image
          src={productImg}
          alt="overview"
          data-aos="fade-up"
          data-aos-offset="300"
        ></Image>
      </div>
    </section>
  );
};

export default Overview;
