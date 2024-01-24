import React, { useState } from 'react';

import logo from '../assets/images/Group.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <>
      <div className="w-full font-inter border-[1px] border-[#d0d5dd] flex content-center items-center justify-between py-3 px-8 rounded-[100px] custom-gradient">
        <div className="flex items-center content-center justify-center gap-2">
          <img src={logo} alt="clearlink-logo"></img>
          <h1 className=" font-semibold text-xl leading-[29.05px] text-[#101828]">
            ClearLink<span className="text-[#528bff]">.</span>{" "}
          </h1>
        </div>
        <div className="hidden lg:inline-flex">
          <ul className="flex font-semibold text-sm leading-7 text-[#667085] gap-10">
            <li className="flex items-center content-center justify-center gap-[6px]">
              Products <i class="fa-solid fa-angle-down"></i>
            </li>
            <li className="flex items-center content-center justify-center gap-[6px]">
              Solutions <i class="fa-solid fa-angle-down"></i>
            </li>
            <li className="flex items-center content-center justify-center gap-[6px]">
              Resources <i class="fa-solid fa-angle-down"></i>
            </li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center content-center justify-center gap-2">
          <button className=" rounded-[100px] border-[1px] border-[#98a2b3] bg-[#ffffff] py-[10px] px-6 shadow-sm text-xs font-semibold leading-6 text-[#101828]">
            Talk to sales
          </button>
          <button className="py-[10px] px-6 shadow-sm text-xs rounded-[100px] font-semibold leading-6 text-[#ffffff] bg-[#175cd3]">
            Sign up for free
          </button>
        </div>
        <i
          onClick={toggleMobileMenu}
          className={`fa-lg lg:hidden max-sm:inline-flex md:inline-flex ${
            isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
          }`}
          style={{ color: "#101828", cursor: "pointer" }}
        ></i>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden z-50 rounded-xl absolute custom-gradient p-2 border-[0.5px] shadow-2xl border-[#98a2b3] mt-1 w-full">
          {/* Mobile menu content */}
          <ul className="flex font-semibold text-sm leading-7 text-[#667085] flex-col justify-center gap-1 items-center content-center">
            <li className=" hover:underline hover:underline-offset-8">
              Products
            </li>
            <li className=" hover:underline hover:underline-offset-8">
              Solutions
            </li>
            <li className=" hover:underline hover:underline-offset-8">
              Resources
            </li>
            <li className=" hover:underline hover:underline-offset-8">
              Pricing
            </li>
          </ul>
          <div className=" lg:flex md:flex max-sm:flex md:flex-col max-sm:flex-col md:items-center md:mt-2 max-sm:mt-2 items-center content-center justify-center gap-2">
            <button className=" rounded-[100px] border-[1px] border-[#98a2b3] bg-[#ffffff] py-[10px] px-6 shadow-sm text-xs font-semibold leading-6 text-[#101828]">
              Talk to sales
            </button>
            <button className="py-[10px] px-6 shadow-sm text-xs rounded-[100px] font-semibold leading-6 text-[#ffffff] bg-[#175cd3]">
              Sign up for free
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar