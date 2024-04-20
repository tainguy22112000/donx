"use client";
import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  Banner,
  CardSlider,
  Intro,
  MuseumIntro,
  MuseumSlider,
  ProductSlider,
} from "@/modules/home";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <section
        className="flex flex-col w-full justify-center items-center bg-dark-1"
        data-aos="fade-up"
      >
        <Intro />
        <CardSlider />
      </section>
      <section id="artwork" className="overflow-scroll bg-dark-2" data-aos="fade-up">
        <ProductSlider />
      </section>

      <section id="museum">
        <div className="flex flex-col px-5 bg-black gap-[10px] w-full overflow-hidden md:flex-row md:p-0">
          <MuseumIntro />
          <MuseumSlider />
        </div>
      </section>
      <Footer />
    </>
  );
}
