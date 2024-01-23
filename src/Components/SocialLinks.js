import React from 'react';

const SocialLinks = () => {
  return (
    <>
      <div className="w-full px-10 max-sm:px-5 py-[30px] font-inter bg-[#f9fafb] flex items-center content-center justify-between">
        <div className="text-sm max-sm:text-[11px] font-normal text-[#667085] ">
          © 2023 ClearLink. All rights reserved.
        </div>
        <div className="flex items-center content-center max-sm:gap-2 gap-6">
          <i class="fa-brands fa-linkedin" style={{ color: "#98a2b3" }}></i>
          <i class="fa-brands fa-twitter" style={{ color: "#98a2b3" }}></i>
          <i class="fa-brands fa-facebook" style={{ color: "#98a2b3" }}></i>
          <i class="fa-brands fa-instagram" style={{ color: "#98a2b3" }}></i>
          <i class="fa-brands fa-github" style={{ color: "#98a2b3" }}></i>
          <i class="fa-brands fa-youtube" style={{ color: "#98a2b3" }}></i>
        </div>
      </div>
    </>
  );
}

export default SocialLinks