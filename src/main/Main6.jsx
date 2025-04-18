import React from "react";

const Main6 = () => {
  const seconds = [
    {
      time: 12,
      topic: "Years Of Experiance",
    },
    {
      time: 85,
      topic: "Success Project",
    },
    {
      time: 15,
      topic: "Active Project",
    },
    {
      time: 95,
      topic: "Happy Customers",
    },
  ];
  return (
    <>
      {/* main6-section */}
      <div className="bg-[#F4F0EC] max-h-[1000px] h-auto">
        {/* time */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:flex items-center justify-center gap-[20px] sm:gap-[30px] md:gap-[65px] lg:gap-[70px] w-full">
          {seconds.map((sec, index) => (
            <div key={index}>
              <h1 className="text-[60px] sm:text-[65px] md:text-[70px] lg:text-[75px] font-dm  font-normal text-[#CDA274] text-center mt-[10rem] ">
                {sec.time}
              </h1>
              <p className="text-16px sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#4D5053] text-normal text-center mb-[7rem]">
                {sec.topic}
              </p>
            </div>
          ))}
        </div>
        {/*end of  time */}
      </div>
      {/* end of main6-section */}
    </>
  );
};

export default Main6;
