"use client";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "./MuseumSlider.css";

import { Autoplay, FreeMode, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { MuseumCard } from "../MuseumCard";

export const MuseumSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, FreeMode, Autoplay]}
      slidesPerView={1}
      spaceBetween={10}
      direction="horizontal"
      speed={500}
      centeredSlides
      className="w-full h-full md:aspect-square md:w-1/2 md:h-full md:overflow-hidden"
      // autoplay={{
      //   delay: 4000,
      // }}
      scrollbar={{
        enabled: true,
        dragClass: "swiper-scrollbar-drag",
      }}
    >
      <SwiperSlide>
        <MuseumCard
          image="/images/museum/museum-2.png"
          author="Picasso"
          quote="“Art is the lie that allows us to recognize the truth.”"
          title="Legendary painter of the contemporary world"
        />
      </SwiperSlide>

      <SwiperSlide>
        <MuseumCard
          image="/images/museum/museum-3.png"
          author="Porcelain vase"
          quote=""
          title="The artifacts used by the emperors of the prosperous Chinese dynasties."
        />
      </SwiperSlide>

      <SwiperSlide>
        <MuseumCard
          image="/images/museum/museum-4.png"
          author="Porcelain vase"
          quote=""
          title="The artifacts used by the emperors of the prosperous Chinese dynasties."
        />
      </SwiperSlide>
    </Swiper>
  );
};
