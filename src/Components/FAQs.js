import React, { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

const FAQs = () => {
  useEffect(() => {
    ScrollReveal().reveal(".one", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "top",
      reset: false,
    });

    ScrollReveal().reveal(".two", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "top",
      reset: false,
    });

    ScrollReveal().reveal(".three", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "top",
      reset: false,
    });

    ScrollReveal().reveal(".four", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "top",
      reset: false,
    });

    ScrollReveal().reveal(".five", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "top",
      reset: false,
    });

    ScrollReveal().reveal(".six", {
      distance: "60px",
      duration: 2000,
      easing: "ease-in",
      origin: "top",
      reset: false,
    });
  });



  return (
    <>
      <div className="w-full px-10 py-[46px] font-inter">
        <div className="flex content-center justify-between w-full gap-[46px]">
          <div className="flex flex-col content-center w-full">
            <h3 className=" font-semibold text-base text-[#175cd3]">Support</h3>
            <h1 className="mt-3 mb-5 text-4xl text-[#1d2939] font-semibold ">
              FAQs
            </h1>
            <p className="text-lg font-normal text-[#667085]">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please chat to our friendly
              team.
            </p>
          </div>
          <div className="flex flex-col w-full">
            <div className="one w-full flex flex-col shadow-sm rounded-2xl border-[1px] border-[#eaecf0] bg-[#f9fafb] content-center p-6 ">
              <div className="w-full ">
                <div className="flex items-center content-center justify-between w-full mb-2">
                  <h2 className=" text-sm font-semibold text-[#101828] ">
                    How many participants can join a ClearLink video conference?{" "}
                  </h2>
                  <div className="flex items-center border-[1px] border-[#98a2b3] rounded-full justify-center w-4 h-4 ">
                    <i
                      class="fa-solid fa-minus fa-2xs"
                      style={{ color: "#98a2b3" }}
                    ></i>
                  </div>
                </div>
                <p className="text-xs pr-12 leading-[18px] font-normal text-[#475467] ">
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </p>
              </div>
            </div>
            <div className="two flex items-center content-center justify-between w-full p-6 mt-1 border-b-[1px] border-[#eaecf0] shadow-sm">
              <div className=" text-sm font-semibold text-[#101828]">
                Can I use ClearLink on multiple devices?
              </div>
              <div className="flex items-center border-[1px] border-[#98a2b3] rounded-full justify-center w-4 h-4 ">
                <i
                  class="fa-solid fa-plus fa-2xs"
                  style={{ color: "#98a2b3" }}
                ></i>
              </div>
            </div>
            <div className="three flex items-center content-center justify-between w-full p-6 mt-1 border-b-[1px] border-[#eaecf0] shadow-sm">
              <div className=" text-sm font-semibold text-[#101828]">
                Is ClearLink compatible with other video conferencing platforms?
              </div>
              <div className="flex items-center border-[1px] border-[#98a2b3] rounded-full justify-center w-4 h-4 ">
                <i
                  class="fa-solid fa-plus fa-2xs"
                  style={{ color: "#98a2b3" }}
                ></i>
              </div>
            </div>
            <div className="four flex items-center content-center justify-between w-full p-6 mt-1 border-b-[1px] border-[#eaecf0] shadow-sm">
              <div className=" text-sm font-semibold text-[#101828]">
                How does ClearLink ensure the security of my video conferences?
              </div>
              <div className="flex items-center border-[1px] border-[#98a2b3] rounded-full justify-center w-4 h-4 ">
                <i
                  class="fa-solid fa-plus fa-2xs"
                  style={{ color: "#98a2b3" }}
                ></i>
              </div>
            </div>
            <div className="five flex items-center content-center justify-between w-full p-6 mt-1 border-b-[1px] border-[#eaecf0] shadow-sm">
              <div className=" text-sm font-semibold text-[#101828]">
                Do I need to download any software to use ClearLink?
              </div>
              <div className="flex items-center border-[1px] border-[#98a2b3] rounded-full justify-center w-4 h-4 ">
                <i
                  class="fa-solid fa-plus fa-2xs"
                  style={{ color: "#98a2b3" }}
                ></i>
              </div>
            </div>
            <div className="six flex items-center content-center justify-between w-full p-6 mt-1 border-b-[1px] border-[#eaecf0] shadow-sm">
              <div className=" text-sm font-semibold text-[#101828]">
                What kind of customer support does ClearLink provide?
              </div>
              <div className="flex items-center border-[1px] border-[#98a2b3] rounded-full justify-center w-4 h-4 ">
                <i
                  class="fa-solid fa-plus fa-2xs"
                  style={{ color: "#98a2b3" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs