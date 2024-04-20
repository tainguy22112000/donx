import "./MuseumCard.css";

import React from "react";

type TProps = {
  image: string;
  author: string;
  title: string;
  quote: string;
};

export const MuseumCard = ({ author, image, quote, title }: TProps) => {
  return (
    <div className="museum-right">
      <img src={image} alt="museum" className="museum-img musem-img-2" />
      <div className="picasso-banner">
        <h1 className="text-gray-1">{author}</h1>
        <div className="picasso-divider"></div>
        <p className="text-gray-2">{title}</p>
      </div>
      <div className="picasso-title text-white">{quote}</div>
    </div>
  );
};
