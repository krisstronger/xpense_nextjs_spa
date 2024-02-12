import React from "react";
import { product } from "@data/index";
import  Cards  from "@components/Cards";

const Product = () => {
  const { title, subtitle } = product;

  return (
    <section>
      <div className="container mx-auto">
        {/* title */}
        <div className="flex flex-col items-center lg:flex-row mb-10 lg:mb-20">
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="400"
            data-aos-deplay="300"
          >
            {title}
          </h2>
          <p
            className="lead lg:max-w-[350px]"
            data-aos="fade-up"
            data-aos-offset="400"
            data-aos-deplay="400"
          >
            {subtitle}
          </p>
        </div>
        {/* cards */}
        <Cards></Cards>
      </div>
    </section>
  );
};

export default Product;
