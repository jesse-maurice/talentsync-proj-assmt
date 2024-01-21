import React, { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

import avatar5 from '../assets/images/animoji-1.png';
import avatar3 from '../assets/images/animoji-2.png';
import avatar2 from '../assets/images/animoji-3.png';
import avatar from '../assets/images/animoji-4.png';
import avatar6 from '../assets/images/animoji-6.png';
import avatar4 from '../assets/images/animoji.png';
import profile4 from '../assets/images/Avatar-1.png';
import profile5 from '../assets/images/Avatar-2.png';
import profile from '../assets/images/Avatar-3.png';
import profile2 from '../assets/images/Avatar-4.png';
import profile3 from '../assets/images/Avatar.png';
import emoji from '../assets/images/face-smile.png';
import droid from '../assets/images/Frame 10.png';
import chat from '../assets/images/message-text-circle-02.png';
import mic from '../assets/images/microphone-01.png';
import tele from '../assets/images/monitor-01.png';
import settings from '../assets/images/settings-01.png';
import star from '../assets/images/Star.png';
import vid from '../assets/images/video-recorder.png';
import Navbar from './Navbar';

const Hero = () => {
  useEffect(() => {
    ScrollReveal().reveal('.image-grid-container', {
      distance: '60px',
      duration: 3000,
      easing: 'ease-in',
      origin: 'right',
      reset: false
    });
  })


  return (
    <>
      <div className="w-full font-inter pt-[40px] px-10 pb-[96px] relative">
        <div className=" opacity-15 custom-bg absolute inset-0"></div>
        <div className=" relative z-10 ">
          <Navbar />
          <div className=" mt-[150px] w-full mx-auto flex items-center content-center justify-between gap-[44px]">
            <div className="w-full">
              <h1 className=" font-semibold text-[50px] leading-[60px] text-[#1d2939] tracking-[-2%]">
                Uniting the world, <br></br> one video call at a time
              </h1>
              <p className=" font-normal w-[550px] mt-4 text-xl leading-8 text-[#667085]">
                Experience the future of communication with ClearLink - where
                crystal-clear video conferencing meets unparalleled simplicity.
              </p>
              <div className="flex mt-12 items-center content-center gap-5">
                <button className=" rounded-[100px] py-4 px-7 bg-[#175cd3] text-[#ffffff] font-semibold text-base leading-[28px] shadow-sm">
                  Start your free trial
                </button>
                <div className="flex text-base font-semibold text-[#175cd3] items-center content-center gap-3">
                  {" "}
                  <img src={droid} alt=""></img>
                  Discover AI assistant
                </div>
              </div>
              <div className="flex mt-12 items-center content-center gap-4">
                <div className="profiles flex items-center content-center">
                  <div className=" w-10 h-10 rounded-[200px] border-[0.75px] border-[#175cd3] ">
                    <img src={profile} alt=""></img>
                  </div>
                  <div className=" w-10 h-10 -ml-3 rounded-[200px] border-[0.75px] border-[#175cd3] ">
                    <img src={profile2} alt=""></img>
                  </div>
                  <div className=" w-10 h-10 -ml-3 rounded-[200px] border-[0.75px] border-[#175cd3] ">
                    <img src={profile3} alt=""></img>
                  </div>
                  <div className=" w-10 h-10 -ml-3 rounded-[200px] border-[0.75px] border-[#175cd3] ">
                    <img src={profile4} alt=""></img>
                  </div>
                  <div className=" w-10 h-10 -ml-3 rounded-[200px] border-[0.75px] border-[#175cd3] ">
                    <img src={profile5} alt=""></img>
                  </div>
                </div>
                <div className="ratings flex flex-col items-center content-center">
                  <div className="stars flex items-center content-center gap-1">
                    <img src={star} alt=""></img>
                    <img src={star} alt=""></img>
                    <img src={star} alt=""></img>
                    <img src={star} alt=""></img>
                    <img src={star} alt=""></img>
                    <span className=" font-semibold ml-2 text-base leading-[24px] text-[#344054]">
                      5.0
                    </span>
                  </div>
                  <div className="flex">
                    <p className=" font-medium text-base leading-[24px] text-[#475467]">
                      from 3000+ reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-grid-container w-full border-[1px] border-[#b2ddff] bg-[#eff8ff] rounded-2xl p-5 shadow-2xl">
              <div className="w-full flex flex-col items-center content-center">
                <div className="flex items-center content-center gap-5">
                  <div className="w-[160px] h-[160px] rounded-xl">
                    <img src={avatar} alt=""></img>
                  </div>
                  <div className="w-[160px] h-[160px] rounded-xl">
                    <img src={avatar2} alt=""></img>
                  </div>
                  <div className="w-[160px] h-[160px] rounded-xl">
                    <img src={avatar3} alt=""></img>
                  </div>
                </div>
                <div className="flex items-center content-center gap-5 mt-[20px]">
                  <div className="w-[160px] h-[160px] rounded-xl">
                    <img src={avatar4} alt=""></img>
                  </div>
                  <div className="w-[160px] h-[160px] rounded-xl">
                    <img src={avatar5} alt=""></img>
                  </div>
                  <div className="w-[160px] h-[160px] rounded-xl">
                    <img src={avatar6} alt=""></img>
                  </div>
                </div>
              </div>

              <div className="controls w-full flex items-center content-center justify-center gap-4 mt-10">
                <div className=" w-11 h-11 rounded-[100px] bg-white border-[1px] border-[#d1e9ff] shadow-sm p-3">
                  <img src={mic} alt=""></img>
                </div>
                <div className=" w-11 h-11 rounded-[100px] bg-white border-[1px] border-[#d1e9ff] shadow-sm p-3">
                  <img src={vid} alt=""></img>
                </div>
                <div className=" w-11 h-11 rounded-[100px] bg-white border-[1px] border-[#d1e9ff] shadow-sm p-3">
                  <img src={tele} alt=""></img>
                </div>
                <div className=" w-11 h-11 rounded-[100px] bg-white border-[1px] border-[#d1e9ff] shadow-sm p-3">
                  <img src={emoji} alt=""></img>
                </div>
                <div className=" w-11 h-11 rounded-[100px] bg-white border-[1px] border-[#d1e9ff] shadow-sm p-3">
                  <img src={chat} alt=""></img>
                </div>
                <div className=" w-11 h-11 rounded-[100px] bg-white border-[1px] border-[#d1e9ff] shadow-sm p-3">
                  <img src={settings} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero