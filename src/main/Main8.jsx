import React from "react";
import arrow from "../kitchen/arrow 2.png";

const Main8 = () => {
  return (
    <>
      {/* main8 section */}
      <div className="px-4">
        <div className="bg-[#292F36] w-full max-w-[1150px] rounded-[70px] h-auto mx-auto py-12 px-6 sm:px-12 lg:px-16 mt-[5rem] mb-[5rem]">
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-[#FFFFFF] font-dm font-normal text-center">
            Wanna join the interno?
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFF] font-jost text-center mt-4">
            It is a long established fact that a reader will be distracted.
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-[#CDA274] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFF] font-jost flex items-center gap-2 px-6 py-3 rounded-[18px] hover:bg-[#b58b5f] transition duration-300">
              Contact With Us <img src={arrow} alt="Arrow Icon" />
            </button>
          </div>
        </div>
      </div>
      {/* end of main8 section */}
    </>
  );
};

export default Main8;
