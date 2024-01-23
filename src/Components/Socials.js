import React, { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

import automattic from '../assets/images/Automattic svg.png';
import coinbase from '../assets/images/Coinbase svg.png';
import dropbox from '../assets/images/Dropbox svg.png';
import intercom from '../assets/images/Intercom svg.png';
import marvel from '../assets/images/Marvel svg.png';
import shopify from '../assets/images/Shopify.com svg.png';

const Socials = () => {
  useEffect(() => {
    ScrollReveal().reveal(".socials-container", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "center",
      reset: false
    });
  });


  return (
    <>
      <div className="w-full py-[96px] lg:px-10 max-sm:px-5 md:px-0 bg-[#ffffff]">
        <div className="flex flex-col items-center content-center w-full gap-12 lg:px-8 md:px-8 max-sm:px-0 py-0 ">
          <p className="w-full text-center font-medium max-sm:text-xs text-base leading-[30px] text-[#475467]">
            Join 1,500+ companies already video conferencing the ClearLink way
          </p>
          <div className="lg:flex md:grid md:grid-cols-3 max-sm:grid max-sm:grid-cols-3 lg:gap-5 max-sm:gap-8 md:gap-8 items-center content-center justify-between w-full socials-container">
            <img className=" w-[130px] h-[35px]" src={shopify} alt=""></img>
            <img className=" w-[140px] h-[30px]" src={coinbase} alt=""></img>
            <img className=" w-[130px] h-[30px]" src={dropbox} alt=""></img>
            <img className=" w-[130px] h-[30px]" src={intercom} alt=""></img>
            <img className=" w-[130px] h-[40px]" src={marvel} alt=""></img>
            <img className=" w-[160px] h-[15px]" src={automattic} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Socials