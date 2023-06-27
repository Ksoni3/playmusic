"use client";

import React from "react";
import Link from "next/link";
import { navBarData } from "@/app/assets/data/data";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

interface ListType {
  id: number;
  name: string;
  path: string;
}

const MobileMenu = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const pathname = usePathname();
  console.log(isMenu);

  const handleClick = (): void => {
    setIsMenu(!isMenu);
  };

  return (
    <div>
      <div
        className={`bg-gray-50 shadow-xl rounded-lg flex flex-col absolute left-0 w-full py-2 ${
          isMenu ? "top-16" : "-top-96"
        }`}
      >
        <ul className="flex flex-col">
          {navBarData.map((list: ListType, i: number) => {
            const isActive = pathname.startsWith(list.path);
            return (
              <li key={i} className="mx-6 my-1">
                <Link
                  className={isActive ? "text-primary" : "text-black"}
                  href={list.path}
                >
                  {list.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <AiOutlineMenu size={20} onClick={handleClick} />
      </div>
    </div>
  );
};

export default MobileMenu;