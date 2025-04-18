import React from "react";
import kitchen1 from "../kitchen/kitchen1.png";
import kitchen2 from "../kitchen/kitchen2.png";
import kitchen3 from "../kitchen/kitchen3.png";
import kitchen4 from "../kitchen/kitchen4.png";
import arr from "../kitchen/_.png";

const kitchen = [
  {
    image: kitchen1,
    name: "Modern Kitchen",
    type: "Decor / Architecture",
    arrow: arr,
  },
  {
    image: kitchen2,
    name: "Modern Kitchen",
    type: "Decor / Architecture",
    arrow: arr,
  },
  {
    image: kitchen3,
    name: "Modern Kitchen",
    type: "Decor / Architecture",
    arrow: arr,
  },
  {
    image: kitchen4,
    name: "Modern Kitchen",
    type: "Decor / Architecture",
    arrow: arr,
  },
];

const Main5 = () => {
  return (
    <div className="px-4">
      {/* main5-section */}
      <div className="max-w-[1200px] mx-auto mt-[5rem]">
        {/* main5-header */}
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] text-[#4D5053] font-dm text-center font-normal">
          Follow Our Projects
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#4D5053] font-jost text-center mt-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        {/* end of main5-header */}

        {/* kitchen grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {kitchen.map((kits, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-[20px] overflow-hidden"
            >
              <img
                src={kits.image}
                alt={kits.name}
                className="w-full h-auto hover:opacity-70 cursor-pointer"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#292F36] font-jost font-normal">
                      {kits.name}
                    </h1>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#4D5053] font-jost font-normal">
                      {kits.type}
                    </p>
                  </div>
                  <img
                    src={kits.arrow}
                    alt="Arrow Icon"
                    className="w-[30px] sm:w-[40px] md:w-[50px] lg:w-[60px] cursor-pointer hover:opacity-50"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* end of kitchen grid */}
      </div>
      {/* end of main5-section */}
    </div>
  );
};

export default Main5;
