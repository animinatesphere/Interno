import React, { useState } from "react";
import logo from "../assets/Logo.png";
import search from "../assets/Vector (4).png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, itOpen] = useState(false);
  return (
    <div className="  flex items-center justify-between lg:max-w-[800px] p-3 xl:max-w-[1200px] mx-auto pt-[44px] ">
      {/* logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="" className="w-[34px] h-[34px]" />
        {/* logo name */}
        <p className="text-[40px] text-[#292F36] font-dm">Interno</p>
        {/*end of  logo name */}
      </div>
      {/*end of  logo */}
      {/*  link section */}
      <div className=" hidden lg:flex  items-center gap-[35px]">
        <ul className="flex items-center gap-[35px] ">
          <li>
            <Link
              to="/"
              className="text-[20px] text-[#292F36] font-normal font-jost"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/page"
              className="text-[20px] text-[#292F36] font-normal font-jost"
            >
              Page
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className="text-[20px] font-normal text-[#292F36] font-jost"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="text-[20px] font-normal text-[#292F36] font-jost"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-[20px] font-normal text-[#292F36] font-jost"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-[20px] font-normal text-[#292F36] font-jost"
            >
              Contact
            </Link>
          </li>
        </ul>
        <img src={search} alt="" />
      </div>
      {/* end of link section */}

      {/* hamburger */}
      <div
        className="flex flex-col gap-[5px] lg:hidden cursor-pointer"
        onClick={() => itOpen(!open)}
      >
        <div className="w-[30px] h-[3px] bg-black"></div>
        <div className="w-[30px] h-[3px] bg-black"></div>
        <div className="w-[30px] h-[3px] bg-black"></div>
      </div>
      {open && (
        <div className=" lg:hidden flex flex-col absolute top-0  right-0 gap-[35px] bg-[#e6d4d4] w-[300px] h-[100vh] overflow-hidden p-3 z-[1] ">
          {/* harmburger -header */}
          <div className="flex items-center justify-between ">
            <p className="text-[40px] text-[black] font-dm">Interno</p>
            <button
              onClick={() => itOpen(!open)}
              className="text-[white] text-[16px] font-jost bg-[black] w-[100px] h-[40px] cursor-pointer rounded-4xl hover:"
            >
              Close
            </button>
          </div>
          {/*end of  harmburger -header */}
          <ul className="  flex flex-col gap-[35px]  ">
            <li>
              <Link
                to="/"
                className="text-[20px] font-normal text-[black] font-jost"
              >
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link
                to="/page"
                className="text-[20px] font-normal text-[black] font-jost"
              >
                Page
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="text-[20px] text-[black] font-jost font-normal"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="text-[20px] text-[black] font-jost font-normal"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-[20px] text-[black] font-jost font-normal"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[20px] text-[black] 400 font-jost font-normal"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* end of hamburger */}
    </div>
  );
};

export default Navbar;
