import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CardSlider } from "@/modules/home/components/ArtSlider";
import Banner from "@/modules/home/components/Banner";
import { Intro } from "@/modules/home/components/Intro";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <section className="flex flex-col w-full justify-center items-center bg-dark-1">
        <Intro />
        <CardSlider />
      </section>
      <Footer />
    </>
  );
}
