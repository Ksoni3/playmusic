import React from "react";
import { AiFillApple } from "react-icons/ai";
import { IoPlaySharp } from "react-icons/io5";
import { recommend } from "@/app/assets/data/data";
import SmallCard from "../shared/SmallCard";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar hero py-5 ">
        <h1 className="  text-lg font-semibold text-gray-600 ml-2 ">5 Likes</h1>
        {recommend.slice(0, 5).map((item, i) => (
          <div className="mb-3">
            <SmallCard
              cover={item.cover}
              name={item.name}
              tag={item.tag}
              i={i}
            />
          </div>
        ))}
        <h1 className="mb-5 text-lg font-semibold text-gray-600 mt-5 ml-2">
          Go Mobile
        </h1>

        <div className="flex justify-between w-[95%] mx-auto">
          <div className="bg-secondary text-white flex center px-2 py-0.5 rounded-md">
            <div>
              <AiFillApple size={30} />
            </div>
            <div className="">
              <span className="text-gray-300 text-[12px]">Download on the</span>
              <h1 className="text-md font-semibold">App Store</h1>
            </div>
          </div>
          <div className="bg-secondary text-white flex center px-2 py-1.5 rounded-md">
            <div>
              <IoPlaySharp size={30} />
            </div>
            <div>
              <span className="text-gray-300 text-[12px]">Download on the</span>
              <h1 className="text-md font-semibold">Google Play</h1>
            </div>
          </div>
        </div>

        <p className="text-sm mt-3 ml-2">About Contact Legal Policy</p>
        <span className="text-gray-500 text-[12px] ml-2 pb-8 mb-4">
          © Copyright 2022
        </span>
      </section>
    </>
  );
};

export default Sidebar;
