import React from "react";
import kitch1 from "../kitchen/Kitchan Design.png";
import kitch2 from "../kitchen/Living Design.png";
import kitch3 from "../kitchen/Interior Design.png";
import arr from "../kitchen/_.png";

const Main7 = () => {
  const design = [
    {
      image: kitch1,
      buttAb: "Kitchen Design",
      desc: "Let’s Get Solution For Building Construction Work",
      date: "26 December, 2025",
      arrow: arr,
    },
    {
      image: kitch2,
      buttAb: "Living Design",
      desc: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "26 December, 2025",
      arrow: arr,
    },
    {
      image: kitch3,
      buttAb: "Interior Design",
      desc: "Best For Any Office & Business Interior Solution",
      date: "26 December, 2025",
      arrow: arr,
    },
  ];

  return (
    <>
      {/* main7-section */}
      <div className="max-w-[1200px] mx-auto mt-[5rem] px-4">
        {/* main7-header */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] text-[#292F36] font-normal font-dm text-center">
          Articles & News
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-jost font-normal text-center mt-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        {/* end of main7-header */}

        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[4rem]">
          {design.map((kit, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-[20px] overflow-hidden p-4"
            >
              <img
                src={kit.image}
                alt={kit.buttAb}
                className="hover:opacity-70 cursor-pointer w-full rounded-t-[20px]"
              />
              <button className="absolute top-4 left-4 bg-[#FFFFFF] px-4 py-2 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#4D5053] font-jost hover:bg-black hover:text-white cursor-pointer rounded-[8px]">
                {kit.buttAb}
              </button>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-dm text-[#4D5053] mt-4">
                {kit.desc}
              </p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#4D5053]">
                  {kit.date}
                </p>
                <img
                  src={kit.arrow}
                  alt="Arrow Icon"
                  className="hover:opacity-50 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
        {/* end of card section */}
      </div>
      {/* end of main7-section */}
    </>
  );
};

export default Main7;
