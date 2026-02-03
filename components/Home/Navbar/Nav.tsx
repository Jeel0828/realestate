"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const NavLink = [
  { id: 1, url: "#", label: "Home" },
  { id: 2, url: "#", label: "Listing" },
  { id: 3, url: "#", label: "Property" },
  { id: 4, url: "#", label: "Blog" },
  { id: 5, url: "#", label: "Contact" },
];

const Nav = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.screenY >= 90) setNavBg(true);
      if (window.screenX < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${navBg ? "bg-gray-800" : ""} h-[10vh] z-[100] w-full transition-all duration-200`}
    >
      <div className="flex items-center justify-between h-full w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
            <FaHouse />
          </div>
          <h1 className="text-sm sm:text-base md:text-xl font-bold text-white">
            HomeHub
          </h1>
        </div>

        <div className="lg:flex items-center space-x-14 text-white hidden">
          {NavLink.map((navlink) => {
            return (
              <Link key={navlink.id} href={navlink.url}>
                <p className="sont-medium hover:text-yellow-300">
                  {navlink.label}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer text-white space-x-2 hover:text-red-400 transition-all duration-200">
            <FaUserCircle className="w-5 h-5" />
            <p className="font-bold textr-xs sm:text-base">Login / Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
