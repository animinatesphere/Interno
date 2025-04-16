import React from "react";
import hero from "../assets/herobackground.png";
import arrow from "../assets/arrow.png";

const HeroSection = () => {
  const project = [
    {
      topic: "Project plan",
      desc: "There are many variations of the passages of lorem Ipsum from available,majority.",
      more: "Read more",
    },
    {
      topic: "Interior Work",
      desc: "There are many variations of the passages of lorem Ipsum from available, majority.",
      more: "Read more",
    },
    {
      topic: "Realization",
      desc: "There are many variations of the passages of lorem Ipsum from available, majority.",
      more: "Read more",
    },
  ];

  return (
    <>
      {/* hero-section */}
      <div className="relative mx-auto max-w-[1200px] mt-[44px]">
        {/* hero background */}
        <div className="relative">
          <img src={hero} alt="Hero Background" className="w-full h-auto" />
        </div>
        {/* end of hero background */}

        {/* hero-overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="text-[22px] sm:text-[30px] md:text-[40px] lg:text-[65px] text-[#292F36] font-normal font-dm leading-tight">
            Let Your Home Be Unique
          </h1>
          <p className="text-[12px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-jost text-[#4D5053] mt-4 mb-6 max-w-[600px] mx-auto">
            There are many variations of the passages of lorem Ipsum available,
            but the majority have suffered alteration.
          </p>
          <button className="flex items-center justify-center gap-2 text-[16px] md:text-[18px] lg:text-[22px] font-jost font-semibold text-white bg-[#292F36] px-6 py-3 md:px-8 md:py-4 rounded-[18px] hover:bg-[#6e767e] cursor-pointer">
            Get Started <img src={arrow} alt="Arrow Icon" />
          </button>
        </div>
        {/* end of hero-overlay */}
      </div>
      {/* end of hero-section */}
      {/* hero2 */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto mt-[4rem] gap-8">
        {project.map((pro, index) => (
          <div key={index} className="text-center max-w-[300px]">
            <h1 className="text-[20px] sm:text-[25px] font-dm font-normal text-[#292F36]">
              {pro.topic}
            </h1>
            <p className="text-[16px] sm:text-[18px] font-jost font-normal text-[#4D5053] mt-2">
              {pro.desc}
            </p>
            <p className="flex items-center justify-center text-[14px] sm:text-[18px] font-jost gap-1.5 mt-4">
              {pro.more} <img src={arrow} alt="Arrow Icon" />
            </p>
          </div>
        ))}
      </div>
      {/* end of  hero2 */}
    </>
  );
};

export default HeroSection;
