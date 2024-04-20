import "./MuseumIntro.css";

import Link from "next/link";
import React from "react";

export const MuseumIntro = () => {
  return (
    <div className="museum-left" data-aos="fade-up">
      <div className="museum-intro">
        <h1 className="text-white">MUSEUM</h1>
        <p className="text-gray-1">
          Donx Museum stores antiques or valuable documents related to many different fields, such
          as history, culture, and art. These items are collected, tested, and displayed for public
          viewing on our website platform. Enjoy this treasure trove of art, and pick out your
          favorite antiques!
        </p>

        <Link href="/museum">
          <button className="museum-btn" type="button">
            View all
          </button>
        </Link>
      </div>

      <img src="/images/museum/museum-1.png" alt="museum" className="museum-img musem-img-1" />
    </div>
  );
};
