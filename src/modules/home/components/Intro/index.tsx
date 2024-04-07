import "./Intro.css";

import Image from "next/image";
import React from "react";

export const Intro = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1 className="text-white about-header">The Family Office</h1>
        <h6 className="about-sub text-gray-1">A long time ago, possibly as early as millennia.</h6>
        <p className="about-description text-gray-1">
          There used to be powerful families all over the world, where those families managed their
          assets and people with skill and humility. Now they are always among us with all the
          advanced knowledge, a construction or a treasure with thousands of years of history.
        </p>
      </div>

      <div
        className="flex flex-col justify-center items-center mt-5 
      md:flex-row md:gap-[50px] md:mt-8 
      lg:gap-[66px] lg:mt-10"
      >
        <Image
          src="/icons/gold-donx-lg.svg"
          alt="gold-donx-large"
          width={120}
          height={120}
          className="w-[120px] md:w-[202px] lg:w-[280px]"
        />
        <div className="flex flex-col justify-center items-center max-w-[300px] md:items-start md:max-w-[320px] lg:max-w-[470px]">
          <h1 className="text-white leading-none text-[64px] mt-[5px] mb-[10px] md:mt-0">DonX</h1>
          <h6 className="text-gray-1 leading-tight text-xl mb-5 md:text-2xl lg:text-4xl">
            Become Our Member Now!
          </h6>
          <button className="signup-btn leading-tight">Sign Up / Log In</button>
        </div>
      </div>
    </div>
  );
};
