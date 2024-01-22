import React, { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

import screen from '../assets/images/3_2 screen mockup.png';

const VideoRecord = () => {
  useEffect(() => {
    ScrollReveal().reveal(".screen-mockup", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "top",
      reset: false,
    });
  });



  return (
    <>
      <div className="w-full flex items-center content-center justify-between pl-10 py-[46px] font-inter">
        <div className="flex flex-col content-center my-[125px] ">
          <h1 className=" font-semibold text-[40px] leading-[48px] text-[#101828]">Ready to clear the path to perfect communication?</h1>
          <div className="flex flex-col content-center gap-3 pl-4 mt-6 mb-8 ">
            <div className="flex items-center content-center gap-3">
              <div className=" w-4 flex items-center justify-center h-4 rounded-full border-[1px] border-[#175cd3]">
                <i
                  class="fa-solid fa-check fa-2xs"
                  style={{ color: "#175cd3" }}
                ></i>
              </div>
              <p className="text-base font-normal text-[#475467]">
                30 days free trial
              </p>
            </div>
            <div className="flex items-center content-center gap-3">
              <div className=" w-4 flex items-center justify-center h-4 rounded-full border-[1px] border-[#175cd3]">
                <i
                  class="fa-solid fa-check fa-2xs"
                  style={{ color: "#175cd3" }}
                ></i>
              </div>
              <p className="text-base font-normal text-[#475467]">
                Cancel at any time
              </p>
            </div>
            <div className="flex items-center content-center gap-3">
              <div className=" w-4 flex items-center justify-center h-4 rounded-full border-[1px] border-[#175cd3]">
                <i
                  class="fa-solid fa-check fa-2xs"
                  style={{ color: "#175cd3" }}
                ></i>
              </div>
              <p className="text-base font-normal text-[#475467]">
                Access to all features
              </p>
            </div>
            <div className="flex items-center content-center gap-3">
              <div className=" w-4 flex items-center justify-center h-4 rounded-full border-[1px] border-[#175cd3]">
                <i
                  class="fa-solid fa-check fa-2xs"
                  style={{ color: "#175cd3" }}
                ></i>
              </div>
              <p className="text-base font-normal text-[#475467]">
                Personalized onboarding
              </p>
            </div>
          </div>
          <div className="flex items-center content-center gap-2">
            <button className=" py-[12px] px-6 bg-white border-[1px] border-[#98a2b3] font-semibold text-sm text-[#101828] rounded-[100px]" >Talk to sales</button>
            <button className=" py-[12px] px-6 bg-[#175cd3] text-[#ffffff] font-semibold text-sm rounded-[100px]" >Start your free trial</button>
          </div>
        </div>
        <div className="w-full">
          <img className="screen-mockup" src={screen} alt=""></img>
        </div>
      </div>
    </>
  );
}

export default VideoRecord