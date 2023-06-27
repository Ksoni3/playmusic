import React from "react";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/b4.jpg";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../clientComponents/MobileMenu";
import { AiOutlineSearch } from "react-icons/ai";
import LargeScreenMenu from "../clientComponents/LargeScreenMenu";

export const Header = () => {
  return (
    <header className="relative z-50  md:shadow-md shadow-sm ">
      {/* desktop and tablet */}
      <div className="hidden md:flex justify-between  w-11/12  mx-auto">
        {/* logo */}
        <div className="flex items-center ">
          <div className="bg-red-30 -ml-6">
            <Image src={logo} alt="logo" width={80} height={80} />
          </div>
          <h2 className="text-2xl font-semibold ">
            Play<span className="text-primary">Music</span>
          </h2>
        </div>

        <div className="menu flex items-center  ">
          <LargeScreenMenu />
        </div>

        {/* profile  */}
        <div className="profile flex items-center">
          <AiOutlineSearch size={22} />
          <button className="bg-primary px-6 py-1.5 text-white rounded-full mx-3">
            Upload
          </button>
          <div className="img w-10 h-10 rounded-full">
            <Image
              src={profile}
              alt="profile"
              className="img w-10 h-10 bg-red-300 rounded-full object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden h-full w-11/12 mx-auto ">
        {/* logo */}
        <Link href={"/discover"} className="flex items-center gap-2">
          <div className="logo flex items-center">
            <div className="-ml-3">
              <Image src={logo} alt="logo" width={60} height={60} />
            </div>
            <h3 className="text-2xl font-semibold">PlayMusic</h3>
          </div>
        </Link>

        <div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
