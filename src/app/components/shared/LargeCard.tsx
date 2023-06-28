import React from "react";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import Image from "next/image";

interface CardProps {
  cover: any; // Update the type to the appropriate type, e.g., string or StaticImageData
  name: string;
  tag: string; // Update the type to the appropriate type based on the data type
}

const LargeCard: React.FC<CardProps> = ({ cover, name, tag }) => {
  return (
    <>
      <div className="relative h-72  md:w-full rounded-md">
        <Image
          src={cover}
          alt="cover"
          height={200}
          width={400}
          className="h-full object-cover rounded-md overflow-hidden"
        />
        <div className="overlay icon absolute top-1/2 left-[40%] text-white ">
          <BsPlayCircle size={45} className="show" />
          <AiFillPlayCircle
            size={50}
            className="hide absolute -top-1 -left-1"
          />
        </div>
        <div className="overlay absolute bottom-0 right-0 text-white">
          <div className="flex p-3">
            <AiOutlineHeart size={22} className="mx-3" />
            <BsThreeDots size={22} />
          </div>
        </div>
      </div>
      <div className="text text-center my-2 w-10/12">
        <h3 className="text-md text-gray-500 font-semibold">{name}</h3>
        <span className="text-gray-400">{tag}</span>
      </div>
    </>
  );
};

export default LargeCard;
