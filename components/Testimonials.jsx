import React from "react";
import { testimonials } from "@data/index";
import ClientSlider from "@components/ClientSlider";

const Testimonials = () => {
  const { clients, title } = testimonials;

  return (
    <section className=" section">
      <div className="container mx-auto">
        <h2
          className="title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h2>
        {/* slider */}
        <div data-aos="fade-up" data-aos-delay="200">
          <ClientSlider clients={clients}></ClientSlider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
