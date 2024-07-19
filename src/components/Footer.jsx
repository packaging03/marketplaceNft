import React from "react";
import timelessLogo from "../assets/timeless.png";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="w-full flex  justify-between items-center md:justify-center gradient-bg-footer p-4">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.25] justify-center items-center">
          <img className="w-32" src={timelessLogo} alt="logo" />
        </div>

        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-ful text-white text-base text-center">
          <p className="cursor-pointer mx-2">Market</p>
          <p className="cursor-pointer mx-2">Artist</p>
          <p className="cursor-pointer mx-2">Features</p>
          <p className="cursor-pointer mx-2">Community</p>
        </div>

        <div className="flex flex-[0.25] justify-center items-center">
          <p className="text-white text-right text-sm">
            &copy; {year}. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
