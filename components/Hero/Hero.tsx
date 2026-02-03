"use client";
import React from "react";
import SearchBox from "../Helper/SearchBox";

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url("/images/hero.jpg")] bg-cover bg-center'>
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10">
        <h1 className="text-white text-center text-base sm:text-lg font-semibold uppercase">
          the best way to
        </h1>
        <h1 className="text-center text-white font-semibold text-3xl sm:text-5xl uppercase mt-4">
          Find Your Dream Home
        </h1>
        <p className="mt-4 text-center text-sm sm:text-base text-gray-200">
          We have more than 745000 appertments, place & plot.
        </p>
        <div className="mt-12 w-full">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
