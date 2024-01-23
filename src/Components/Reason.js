import React, { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

import calendar from '../assets/images/calendar.png';
import arrow from '../assets/images/Hand-drawn arrow.png';
import lock from '../assets/images/lock-unlocked-04.png';
import noise from '../assets/images/recording-01.png';
import user from '../assets/images/Rectangle 1.png';
import recorder from '../assets/images/video-recorder-2.png';

const Reason = () => {
  useEffect(() => {
    ScrollReveal().reveal(".arrow", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in-out",
      origin: "center",
      reset: false,
    });
    
    ScrollReveal().reveal(".link-container", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in-out",
      origin: "left",
      reset: false,
    });
  });


  return (
    <>
      <div className="w-full px-10 max-sm:px-5 relative py-[46px] font-inter">
        <div className=" w-full flex flex-col items-center content-center gap-[80px]">
          <div className="w-full">
            <h2 className=" font-semibold max-sm:text-base text-lg leading-[28px] text-[#175cd3]">
              The ClearLink Advantage
            </h2>
            <h1 className=" font-semibold max-sm:text-2xl text-[44px] leading-[60px] text-[#1d2939] mt-3">
              Why choose ClearLink?
            </h1>
            <p className=" font-normal text-xl max-sm:text-base leading-[28px] text-[#667085] w-[700px] max-sm:w-full mt-5">
              In a world where connection is everything, ClearLink takes the
              lead. Our cutting-edge video conferencing app offers:
            </p>
            <img
              className="max-sm:hidden md:hidden lg:inline-block arrow z-50 absolute top-[80.93px] right-[215.46px]"
              src={arrow}
              alt=""
            ></img>
          </div>
          <div className="w-full lg:flex lg:flex-row md:flex md:flex-col items-center content-center justify-between gap-16 ">
            <div className="link-container max-w-[800px] my-[19.5px]">
              <div className="flex max-sm:flex-col w-full items-center content-center gap-10">
                <div className=" lg:w-[260px] md:w-full max-sm:w-full h-[200px]">
                  <div className="flex items-center justify-center w-14 h-14 border-[1px] border-[#eaecf0] rounded-full bg-[#f9fafb]">
                    <img src={recorder} alt=""></img>
                  </div>
                  <h2 className=" font-semibold text-xl mt-5 mb-2 leading-[32px] text-[#101828]">
                    Crystal-clear HD video
                  </h2>
                  <p className=" font-normal text-sm leading-[22px] text-[#475467] ">
                    No more pixelation or blurriness – just stunning, lifelike
                    clarity that brings your team closer in meetings.
                  </p>
                </div>
                <div className="lg:w-[260px] md:w-full max-sm:w-full h-[200px]">
                  <div className="flex items-center justify-center w-14 h-14 border-[1px] border-[#eaecf0] rounded-full bg-[#f9fafb]">
                    <img src={noise} alt=""></img>
                  </div>
                  <h2 className=" font-semibold text-xl mt-5 mb-2 leading-[32px] text-[#101828]">
                    Noise-canceling audio
                  </h2>
                  <p className=" font-normal text-sm leading-[22px] text-[#475467] ">
                    Say goodbye to distractions with our advanced audio tech for
                    crisp, interruption-free conversations.
                  </p>
                </div>
              </div>
              <div className="flex max-sm:flex-col mt-[60px] items-center content-center gap-10">
                <div className="lg:w-[260px] md:w-full max-sm:w-full h-[200px]">
                  <div className="flex items-center justify-center w-14 h-14 border-[1px] border-[#eaecf0] rounded-full bg-[#f9fafb]">
                    <img src={calendar} alt=""></img>
                  </div>
                  <h2 className=" font-semibold text-xl mt-5 mb-2 leading-[32px] text-[#101828]">
                    Scheduling made easy
                  </h2>
                  <p className=" font-normal text-sm leading-[22px] text-[#475467] ">
                    Streamline your agenda with ClearLink's intuitive
                    scheduling. Set up meetings, send invitations, and receive
                    reminders in one place.
                  </p>
                </div>
                <div className="lg:w-[260px] md:w-full max-sm:w-full h-[200px]">
                  <div className="flex items-center justify-center w-14 h-14 border-[1px] border-[#eaecf0] rounded-full bg-[#f9fafb]">
                    <img src={lock} alt=""></img>
                  </div>
                  <h2 className=" font-semibold text-xl mt-5 mb-2 leading-[32px] text-[#101828]">
                    Bank-grade security
                  </h2>
                  <p className=" font-normal text-sm leading-[22px] text-[#475467] ">
                    Your privacy is our priority with bank-grade security
                    protocols safeguarding your meetings and data from unwanted
                    intruders.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="arrow shadow-2xl rounded-2xl w-[500px] h-[500px]  z-10"
              src={user}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reason