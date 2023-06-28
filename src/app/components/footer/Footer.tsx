import React from "react";
import Image from "next/image";
import b4 from "../../assets/images/b4.jpeg";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsPlayCircleFill } from "react-icons/bs";
import { MdRepeat } from "react-icons/md";
import { TbArrowsShuffle } from "react-icons/tb";
import { HiVolumeUp } from "react-icons/hi";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-700 fixed bottom-0 w-full text-white">
        <div className="flex justify-center md:justify-between items-center h-16 md:w-11/12 mx-auto">
          <div className="img md:flex items-center md:visible hidden">
            <Image
              src={b4}
              alt="img"
              height={60}
              width={60}
              className="w-16 h-16 object-cover mr-5"
            />
            <h3>Pull Up</h3>
            <AiOutlineHeart size={20} className="ml-32" />
          </div>
          <div className="flex items-center">
            <TbArrowsShuffle className="text-gray-400 mr-5" />
            <BiSkipPrevious size={30} />
            <BsPlayCircleFill size={40} className="text-primary mx-5" />
            <BiSkipNext size={30} />
            <MdRepeat className="text-gray-400 ml-5" />
          </div>
          <div className="md:flex items-center  md:visible hidden">
            <p className="text-gray-400 text-sm">00:00 / 00:00</p>
            <HiVolumeUp className="mx-8" />
            <AiOutlineMenu />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
