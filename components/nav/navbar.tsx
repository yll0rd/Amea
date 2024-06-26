"use client";

import React, { useState } from "react";
import Logo from "../logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Hamburger from "./hamburger";
import { navItems } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={cn("fixed top-0 w-full h-20 bg-white z-50 px-[100px]")}>
      <nav className="h-full items-center flex justify-between  relative overflow-hidden">
        <Logo />
        <Links isActive={isActive} />
        <Hamburger setIsActive={setIsActive} isActive={isActive} />
      </nav>
    </div>
  );
};

const Links = ({ isActive }: { isActive: boolean }) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "flex-1  absolute w-[65%] font-primary h-full left-0 center right-0 top-[-80px] m-auto transition-all duration-300",
        {
          "top-[0px]": isActive,
        }
      )}
    >
      <ul className="w-full flex justify-around">
        {navItems.map((item) => {
          //some code here
          const isActive = pathname === item.href;
          return (
            <li className={cn("relative")} key={item.title}>
              <Link href={item.href} className="capitalize">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
