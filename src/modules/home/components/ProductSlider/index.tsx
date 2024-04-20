"use client";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "./ProductSlider.css";

import { FreeMode, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductCard } from "../ProductCard";

export const ProductSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, FreeMode]}
      slidesPerView="auto"
      spaceBetween={10}
      navigation={{ enabled: true }}
      direction="horizontal"
      speed={500}
      centeredSlides
      className="w-full h-full !overflow-visible !p-5 md:!p-10 lg:!pt-16 lg:!pb-10 lg:!px-20"
      wrapperClass="swiper-wrapper py-5 md:pb-10"
      freeMode={{ enabled: true, sticky: true }}
      scrollbar={{
        enabled: true,
        dragClass: "swiper-scrollbar-drag",
      }}
      breakpoints={{
        500: {
          centeredSlides: false,
        },
        1440: {
          centeredSlides: false,
          spaceBetween: 16,
        },
      }}
    >
      {Array.from({ length: 9 }, (_, index) => (
        <SwiperSlide className="!w-[280px] md:!w-[340px] lg:!w-[440px]" key={index}>
          <ProductCard image={`/images/product/art-${index + 1}.png`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
