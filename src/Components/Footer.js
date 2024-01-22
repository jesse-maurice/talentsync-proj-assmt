import React from 'react';

import logo from '../assets/images/Group.png';
import android from '../assets/images/Mobile app store badge-1.png';
import apple from '../assets/images/Mobile app store badge.png';

const Footer = () => {
  return (
    <>
      <div className="w-full flex content-center justify-between gap-[100px] px-10 pt-[46px] pb-5 font-inter">
        <div className="flex flex-col content-center w-[600px] gap-6">
          <div className="flex items-center content-center gap-2">
            <img src={logo} alt="clearlink-logo"></img>
            <h1 className=" font-semibold text-xl leading-[29.05px] text-[#101828]">
              ClearLink<span className="text-[#528bff]">.</span>{" "}
            </h1>
          </div>
          <p className=" font-normal text-base leading-[25px] text-[#475467]">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className="flex content-center justify-between w-full gap-8">
          <div className="flex flex-col content-center gap-3">
            <p className="text-sm font-semibold text-[#667085]">Product</p>
            <ul className="flex flex-col content-center gap-3">
              <li className=" font-semibold text-base text-[#475467]">
                Overview
              </li>
              <li className=" font-semibold text-base text-[#475467]">
                Features
              </li>
              <li className=" font-semibold text-base text-[#475467]">
                Solutions
              </li>
              <li className=" font-semibold text-base text-[#475467]">
                Tutorials
              </li>
              <li className=" font-semibold text-base text-[#475467]">
                Pricing
              </li>
            </ul>
          </div>
          <div className="flex flex-col content-center gap-3">
            <p className="text-sm font-semibold text-[#667085]">Company</p>
            <ul className="flex flex-col content-center gap-3">
              <li className=" font-semibold text-base text-[#475467]">
                About us
              </li>
              <li className=" font-semibold text-base text-[#475467]">
                Careers
              </li>
              <li className=" font-semibold text-base text-[#475467]">Press</li>
              <li className=" font-semibold text-base text-[#475467]">News</li>
              <li className=" font-semibold text-base text-[#475467]">
                Contact
              </li>
            </ul>
          </div>
          <div className="flex flex-col content-center gap-3">
            <p className="text-sm font-semibold text-[#667085]">Resources</p>
            <ul className="flex flex-col content-center gap-3">
              <li className=" font-semibold text-base text-[#475467]">Blog</li>
              <li className=" font-semibold text-base text-[#475467]">
                Events
              </li>
              <li className=" font-semibold text-base text-[#475467]">
                Help centre
              </li>
              <li className=" font-semibold text-base text-[#475467]">
                Tutorials
              </li>
              <li className=" font-semibold text-base text-[#475467]">
                Support
              </li>
            </ul>
          </div>
          <div className="flex flex-col content-center gap-3">
            <p className="text-sm font-semibold text-[#667085]">Legal</p>
            <ul className="flex flex-col content-center gap-3">
              <li className=" font-semibold text-base text-[#475467]">Terms</li>
              <li className=" font-semibold text-base text-[#475467]">
                Privacy
              </li>
              <li className=" font-semibold text-base text-[#475467]">
                Cookies
              </li>
              <li className=" font-semibold text-base text-[#475467]">
                Licenses
              </li>
              <li className=" font-semibold text-base text-[#475467]">
                Contact
              </li>
            </ul>
          </div>
          <div className="flex flex-col content-center gap-3">
            <p className=" font-semibold text-sm text-[#004eeb]">Get the app</p>
            <ul className="flex flex-col content-center gap-3">
              <li>
                <img src={apple} alt=""></img>
              </li>
              <li>
                <img src={android} alt=""></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer