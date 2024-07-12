import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Identicon from "react-identicons";
import { setGlobalState, useGlobalState } from "../store";

const imgHero =
  "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";

const ShowNFT = () => {
  const [modal] = useGlobalState("showModal");

  const closeModal = () => {
    setGlobalState("showModal", "scale-0");
  };

  return (
    <div
      className={`fixed top-0 left-0  w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Buy NFT</p>
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 h-40 w-40 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={imgHero}
                alt="NFT Logo"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start rounded-xl mt-5">
            <h4 className="text-white font-semibold">Title</h4>
            <p className="text-gray-400 text-xs my-1 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex justify-between items-center mt-3 text-white">
              <div className="flex justify-start items-center">
                <Identicon
                  string={"fjdj"}
                  size={50}
                  className="h-10 object-contain rounded-full mr-3"
                />
                <div className="flex flex-col justify-center items-start">
                  <small className="text-white font-bold">@Owner</small>
                  <small className="text-pink-800 font-semibold">
                    0x31...0372
                  </small>
                </div>
              </div>

              <div className="flex flex-col text-white">
                <small className="text-xs">Current Price</small>
                <p className="text-sm font-semibold">0.34 ETH</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center space-x-2">
            <button className="flex justify-center items-center p-2 mt-5 w-full shadow-lg shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full">
              View Purchase
            </button>
            {/* <button className="flex justify-center items-center p-2 mt-5 w-full shadow-lg shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full">
              Change Price
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShowNFT;
