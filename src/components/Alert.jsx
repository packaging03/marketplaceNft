import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

const Alert = () => {
  return (
    <div
      className={`fixed top-0 left-0  w-screen h-screen flex items-center 
      justify-center bg-black bg-opacity-50 transform transition-transform 
      duration-300 scale-100`}
    >
      <div
        className="flex flex-col justify-center items-center bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl
      min-w-min px-10 py-3"
      >
        {/* <FaRegTimesCircle className="text-red-600 text-4xl" />
        <p className="text-white">Message...</p> */}

        <BsCheck2Circle className="text-green-600 text-4xl" />
        <p className="text-white">Message...</p>
      </div>
    </div>
  );
};

export default Alert;
