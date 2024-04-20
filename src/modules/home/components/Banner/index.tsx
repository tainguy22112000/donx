"use client";

import "swiper/css";
import "swiper/swiper-bundle.css";

import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
      direction="horizontal"
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={2000}
      className="w-screen h-full mt-0"
    >
      <SwiperSlide>
        <Image
          src="/images/banner/banner-1.png"
          alt="banner-1"
          loading="lazy"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/banner/banner-2.png"
          alt="banner-2"
          loading="lazy"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/banner/banner-3.png"
          alt="banner-3"
          loading="lazy"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
