import "./ProductCard.css";

import Image from "next/image";
import React from "react";

type TProductCard = {
  image: string;
};

export const ProductCard = ({ image }: TProductCard) => {
  return (
    <div className="art-item">
      <div className="art-thumb">
        <img
          src={image}
          alt="Chinese Qing Dynasty Porcelain Vase - Qianlong/Yongzheng Emperor"
          className="art-image"
        />
        <div className="art-overlay text-white">
          <span>Chinese Qing Dynasty Porcelain Vase - Qianlong/Yongzheng Emperor</span>
        </div>

        <button className="btn absolute top-[23px] left-[22px]" type="button">
          In storage
        </button>
      </div>

      <div className="art-description">
        <Image src="/icons/donx-art.svg" alt="donx art" loading="lazy" width={44} height={44} />

        <div className="art-text">
          <h6 className="text-white">Owned by us</h6>
          <p className="text-white">
            Mentioned in the international royal antiquities exhibition event
          </p>
        </div>
      </div>
    </div>
  );
};
