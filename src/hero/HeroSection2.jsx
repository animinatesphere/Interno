import React from "react";
import hero2 from "../assets/hero2.jpg";
import call from "../assets/Call Icon.png";
import arrow from "../assets/arrow.png";

const HeroSection2 = () => {
  return (
    <>
      {/* hero2-container */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-16 mx-auto mt-16 px-4">
        {/* hero2-children */}
        <div className="text-center lg:text-left max-w-[500px]">
          <h1 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-dm text-[#292F36] leading-tight">
            We Create The Art Of Stylish Living Stylishly
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] text-[#4D5053] font-jost mt-4 mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          {/* call section */}
          <div className="flex items-center gap-4 mt-6">
            <img
              src={call}
              alt="Call Icon"
              className="w-[70px] h-[70px] sm:w-[93px] sm:h-[93px]"
            />
            <div>
              <h1 className="text-[18px] sm:text-[20px] md:text-[24px] font-jost font-bold">
                012345678
              </h1>
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-jost font-normal">
                Call Us Anytime
              </p>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-jost font-semibold text-white bg-[#292F36] px-6 py-3 md:px-8 md:py-4 rounded-[18px] hover:bg-[#6e767e] cursor-pointer mt-6">
            Get Free Estimate <img src={arrow} alt="Arrow Icon" />
          </button>
          {/* end of call section */}
        </div>
        {/* end of hero2-children */}

        {/* hero2 image */}
        <div className="w-full max-w-[500px]">
          <img
            className="w-full h-auto rounded-tl-[20rem] rounded-br-[20rem]"
            src={hero2}
            alt="Hero Section Image"
          />
        </div>
        {/* end of hero2 image */}
      </div>
      {/* end of hero2-container */}
    </>
  );
};

export default HeroSection2;
