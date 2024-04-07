"use client";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "./ArtSlider.css";

import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArtCard } from "../ArtCard";

export const CardSlider = () => {
  return (
    <div
      className="flex flex-row justify-between gap-[10px] max-w-full overflow-x-scroll 
    md:max-[22px] md:max-w-[1024px] md:px-5 md:pb-[60px]
    lg:gap-[55px] lg:px-10 lg:pb-[100px] lg:max-w-[1360px]
    "
    >
      <Swiper
        modules={[Navigation, Scrollbar]}
        slidesPerView={1}
        spaceBetween={0}
        navigation={{ enabled: true }}
        direction="horizontal"
        speed={500}
        className="w-screen h-full mt-0"
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="px-5 pb-[60px] lg:w-1/3">
          <ArtCard
            description="dfaf"
            image="/images/intro/intro-1-bg.jpg"
            label="adfkjak"
            linkTitle="Go to Vault"
            sub="dalfalf"
            thumb="/images/intro/intro-1-icon.svg"
            title="adkfjakf"
          />
        </SwiperSlide>
        <SwiperSlide className="px-5 pb-[60px] lg:w-1/3">
          <ArtCard
            description="dfaf"
            image="/images/intro/intro-2-bg.jpg"
            label="adfkjak"
            linkTitle="Go to Vault"
            sub="dalfalf"
            thumb="/images/intro/intro-1-icon.svg"
            title="adkfjakf"
          />
        </SwiperSlide>
        <SwiperSlide className="px-5 pb-[60px] lg:w-1/3">
          <ArtCard
            description="dfaf"
            image="/images/intro/intro-3-bg.png"
            label="adfkjak"
            linkTitle="Go to Vault"
            sub="dalfalf"
            thumb="/images/intro/intro-1-icon.svg"
            title="adkfjakf"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
