import React from "react";
import image1 from "../assets/Image (1).png";
import image2 from "../assets/Image (2).png";
import image3 from "../assets/Image (3).png";
const Main3 = () => {
  const people = [
    {
      image: image3,
      name: "Nattasha Mith",
      location: "Sydney,USA",
      desc: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
    {
      image: image1,
      name: "Raymond Galario",
      location: "Sydney, Australia",
      desc: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
    },
    {
      image: image2,
      name: "Benny Roll",
      location: "Sydney, New York",
      desc: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
  ];
  return (
    <>
      {/* main3 section */}
      <div className="flex justify-center bg-[#F4F0EC] w-full max-w-[1200px] mx-auto  max-h-[1000px] h-auto mt-[5rem] rounded-[76px]">
        {/* main3-child */}
        <div>
          <h1 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-dm text-[#292F36] text-center mb-[5rem] mt-[2rem]">
            What the People Thinks <br /> About Us
          </h1>
          <div className=" flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3   items-center gap-[18px] sm:gap-[20px] md:gap-[22px] lg:gap-[24px]  text-center mb-[5rem]">
            {people.map((pes, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF]   max-w-[300px] sm:max-w-[370px] max-h-[339px] p-8 rounded-3xl"
              >
                {/* people profile */}
                <div className="flex items-center gap-[10px]">
                  <div>
                    <img src={pes.image} alt="" />
                  </div>
                  <div>
                    <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-dm text-[#292F36]">
                      {pes.name}
                    </p>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-jost text-[#292F36]">
                      {pes.location}
                    </p>
                  </div>
                </div>
                {/* end of people profile */}
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#292F36]">
                  {pes.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/*end of  main3-child */}
      </div>
      {/* end of main3 section */}
    </>
  );
};

export default Main3;
