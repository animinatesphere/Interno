import React from "react";
import brand1 from "../assets/01.svg";
import brand2 from "../assets/02.svg";
import brand3 from "../assets/03.svg";
import brand4 from "../assets/04.svg";
import brand5 from "../assets/05.svg";
const Main4 = () => {
  return (
    <>
      <div className=" mt-[5rem] grid px-[3rem] gap-[4rem]  grid-cols-2 w-full max-w-[1200px] mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
      </div>
    </>
  );
};

export default Main4;
