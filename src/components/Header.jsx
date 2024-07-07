import React from "react";
import timelessLogo from "../assets/timeless.png";

const Header = () => {
  return (
    <div
      className="w-4/5 flex justify-between md:justify-center 
    items-center py-4 mx-auto"
    >
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img className="w-32 cursor-pointer" src={timelessLogo} alt="logo" />
      </div>
      <ul
        className="md:flex-[0.5] text-white md:flex hidden 
      list-none justify-between items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Market</li>
        <li className="mx-4 cursor-pointer">Artist</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>
    </div>
  );
};

export default Header;
