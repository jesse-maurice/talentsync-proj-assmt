import React, { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

import avatar from '../assets/images/Avatar shopify.png';
import image1 from '../assets/images/Image-1.png';
import image2 from '../assets/images/Image-2.png';
import image3 from '../assets/images/Image-3.png';
import image4 from '../assets/images/Image-4.png';
import image from '../assets/images/Image.png';
import shopify from '../assets/images/Shopify.com svg.png';
import star from '../assets/images/Star.png';

const Shopify = () => {
  useEffect(() => {
    ScrollReveal().reveal(".glasses", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "right",
      reset: false,
    });

    ScrollReveal().reveal(".study", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "left",
      reset: false,
    });

    ScrollReveal().reveal(".people", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "left",
      reset: false,
    });

    ScrollReveal().reveal(".laptop", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "right",
      reset: false,
    });

    ScrollReveal().reveal(".smile", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "bottom",
      reset: false,
    });
  });



  return (
    <>
      <div className="w-full px-10 py-[46px] bg-[#f9fafb] font-inter">
        <div className="flex items-center content-center justify-between w-full gap-16 px-8 py-0">
          <div className="flex flex-col content-center w-full gap-9">
            <img className="w-[130px] h-[35px]" src={shopify} alt=""></img>
            <div className="flex content-center gap-1">
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
            </div>
            <p className=" font-medium text-[38px] leading-[55px] text-[#101828]">
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, and top-notch security make it essential for our
              team.
            </p>
            <div className="flex items-center content-center gap-4">
              <div className="">
                <img src={avatar} alt=""></img>
              </div>
              <div className="w-[412px] flex flex-col content-center gap-[2px]">
                <h3 className=" font-semibold text-lg text-[#101828]">
                  Sarah Thompson
                </h3>
                <p className="text-base font-normal text-[#475467] ">
                  Project Manager, Shopify
                </p>
              </div>
              <div className="flex items-center content-center gap-8 ">
                <div className="flex items-center justify-center w-11 h-11 rounded-[28px] border-[1px] border-[#d1e9ff] bg=[#ffffff] bg-opacity-90">
                  <i
                    class="fa-solid fa-arrow-left"
                    style={{ color: "#175cd3" }}
                  ></i>
                </div>
                <div className="flex items-center justify-center w-11 h-11 rounded-[28px] border-[1px] border-[#d1e9ff] bg=[#ffffff] bg-opacity-90">
                  <i
                    class="fa-solid fa-arrow-right"
                    style={{ color: "#175cd3" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center content-center justify-between gap-4 my-[30px] px-8">
            <div className="flex items-center content-center justify-center w-full gap-4 mx-auto">
              <img
                className="study w-[140px] h-[140px] mt-[83px]"
                src={image4}
                alt=""
              ></img>
              <img className="glasses w-[140px] h-[220px]" src={image} alt=""></img>
            </div>
            <div className="flex content-center justify-between w-full gap-4">
              <img className="people w-[172px] h-[108px]" src={image2} alt=""></img>
              <img className="smile w-[140px] h-[220px]" src={image3} alt=""></img>
              <img className="laptop w-[172px] h-[108px]" src={image1} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopify