import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
  setAlert,
  setGlobalState,
  setLoadingMsg,
  useGlobalState,
} from "../store";
import { create } from "ipfs-http-client";
import { mintNFT } from "../Blockchain.services";
const imgHero =
  "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg";

const auth =
  "Basic " +
  Buffer.from(
    "2Gg95YqQ672apEtGQbewfwGQANc" + ":" + "b2c85789868e83772bfbc59ddd6d09bb"
    //process.env.REACT_APP_INFURIA_PID + ':' + process.env.REACT_APP_INFURIA_API,
  ).toString("base64");

const client = create({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

const CreateNFT = () => {
  const [modal] = useGlobalState("modal");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [imgBase64, setImgBase64] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !price) return;
    setGlobalState("modal", "scale-0");
    setLoadingMsg("Uploading to IPFS...");

    try {
      const created = await client.add(fileUrl);
      const metadataURI = `http://ipfs.io/ipfs/${created.path}`;
      setLoadingMsg("Uploaded!, approve transaction now...");
      const nft = { title, description, price, metadataURI };

      await mintNFT(nft);
      closeModal();
      setAlert("Minting completed successfully");
      //   window.location.reload();
    } catch (e) {
      setAlert("Minting failed...", "red");
    }
  };

  const changeImage = async (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
    reader.onload = (readerEvent) => {
      const file = readerEvent.target.result;
      setImgBase64(file);
      setFileUrl(e.target.files[0]);
    };
  };

  const closeModal = () => {
    setGlobalState("modal", "scale-0");
    resetForm();
  };

  const resetForm = () => {
    setDescription("");
    setPrice("");
    setFileUrl("");
    setPrice("");
    setImgBase64(null);
  };

  return (
    <div
      className={`fixed top-0 left-0  w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Add NFT</p>
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 h-20 w-20 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={imgBase64 || imgHero}
                alt="NFT Logo"
              />
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <label className="block">
              <span className="sr-only">Choose Profile Photo</span>
              <input
                type="file"
                accept="image/png, image/gif, image/jpg, image/jpeg image/webp"
                required
                className="block w-full text-sm text-slate-500 
                file:mr-4 file:py-2 file:px-4 file:rounded-full 
                file:border-0 file:text-sm file:font-semibold 
                hover:file:bg-[#1d2631] focus:outline-none 
                cursor-pointer focus:ring-0"
                onChange={changeImage}
              />
            </label>
          </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              type="text"
              required
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="block w-full text-sm text-slate-500 hover:file:bg-[#1d2631] focus:outline-none 
              cursor-pointer focus:ring-0 bg-transparent border-0"
            />
          </div>
          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              type="number"
              required
              name="price"
              min={0.01}
              step={0.01}
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="Price (ETH)"
              className="block w-full text-sm text-slate-500 hover:file:bg-[#1d2631] focus:outline-none 
              cursor-pointer focus:ring-0 bg-transparent border-0"
            />
          </div>
          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              type="text"
              required
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="block w-full text-sm text-slate-500 hover:file:bg-[#1d2631] focus:outline-none 
              cursor-pointer focus:ring-0 bg-transparent border-0 h-20 resize-none"
            ></textarea>
          </div>

          <button className="flex justify-center items-center p-2 mt-5 shadow-lg shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full">
            Mint Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNFT;
