"use client";

import React, { useEffect, useState } from "react";
import SideBar from "../../components/shared/SideBar";

interface LayoutSidebarProps {
  children: React.ReactNode;
}

const LayoutSideBar: React.FC<LayoutSidebarProps> = ({ children }) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const scrollThreshold = 100; // Set the threshold value as desired

      if (scrollPosition > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="md:flex md:justify-between w-[95%] py-6 mx-auto ml-4">
        <div className="content w-full md:w-[75%]">{children}</div>
        <div
          className={`md:w-[25%] border-2 border-solid border-gray-100 rounded-xl h-[44rem] mt-5  ${
            isSticky ? "sticky top-5" : ""
          }`}
        >
          <SideBar />
        </div>
      </main>
    </>
  );
};

export default LayoutSideBar;
