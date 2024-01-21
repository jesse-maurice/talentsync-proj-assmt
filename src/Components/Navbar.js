import React from 'react';

import logo from '../assets/images/Group.png';

const Navbar = () => {
  return (
    <>
      <div className="w-full font-inter border-[1px] border-[#d0d5dd] flex content-center items-center justify-between py-3 px-8 rounded-[100px] custom-gradient">
        <div className="flex items-center content-center justify-center gap-2">
          <img src={logo} alt="clearlink-logo"></img>
          <h1 className=" font-semibold text-xl leading-[29.05px] text-[#101828]">
            ClearLink<span className="text-[#528bff]">.</span>{" "}
          </h1>
        </div>
        <div>
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
        <div className="flex items-center content-center justify-center gap-2">
          <button className=" rounded-[100px] border-[1px] border-[#98a2b3] bg-[#ffffff] py-[10px] px-6 shadow-sm text-xs font-semibold leading-6 text-[#101828]">
            Talk to sales
          </button>
          <button className="py-[10px] px-6 shadow-sm text-xs rounded-[100px] font-semibold leading-6 text-[#ffffff] bg-[#175cd3]">
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar