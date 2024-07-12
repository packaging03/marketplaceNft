import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Identicon from "react-identicons";
import { setGlobalState, truncate, useGlobalState } from "../store";

const imgHero =
  "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";

const ShowNFT = () => {
  const [modal] = useGlobalState("showModal");
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [nft] = useGlobalState("nft");

  const closeModal = () => {
    setGlobalState("showModal", "scale-0");
  };

  const onChangePrice = () => {
    setGlobalState("showModal", "scale-0");
    setGlobalState("updateModal", "scale-100");
    setGlobalState("nft", nft);
  };

  return (
    <div
      className={`fixed top-0 left-0  w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex flex-col">
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
                src={nft?.metadataURI}
                alt={nft?.title}
              />
            </div>
          </div>

          <div className="flex flex-col justify-start rounded-xl mt-5">
            <h4 className="text-white font-semibold">{nft?.title}</h4>
            <p className="text-gray-400 text-xs my-1 ">{nft?.description}</p>
            <div className="flex justify-between items-center mt-3 text-white">
              <div className="flex justify-start items-center">
                <Identicon
                  string={nft?.owner}
                  size={50}
                  className="h-10 object-contain rounded-full mr-3"
                />
                <div className="flex flex-col justify-center items-start">
                  <small className="text-white font-bold">@Owner</small>
                  <small className="text-pink-800 font-semibold">
                    {truncate(nft?.owner, 4, 4, 11)}
                  </small>
                </div>
              </div>

              <div className="flex flex-col text-white">
                <small className="text-xs">Current Price</small>
                <p className="text-sm font-semibold">{nft?.cost} ETH</p>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-between items-center space-x-2"> */}
          {connectedAccount == nft?.owner ? (
            <button
              className="flex justify-center items-center p-2 mt-5 w-full
             shadow-lg shadow-black text-white 
             bg-[#e32970] hover:bg-[#bd255f] rounded-full"
              onClick={onChangePrice}
            >
              Change Price
            </button>
          ) : (
            <button className="flex justify-center items-center p-2 mt-5 w-full shadow-lg shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full">
              View Purchase
            </button>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ShowNFT;
