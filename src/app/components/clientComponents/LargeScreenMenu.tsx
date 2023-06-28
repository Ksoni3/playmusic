"use client";
import { usePathname } from "next/navigation";
import { navBarData } from "@/app/assets/data/data";
import Link from "next/link";

interface ListType {
  id: number;
  name: string;
  path: string;
}

const LargeScreenMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-8 ">
      {navBarData.map((list: ListType, i: number) => {
        const isActive = pathname === list.path;
        return (
          <li key={i} className="hover-list">
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
  );
};

export default LargeScreenMenu;
