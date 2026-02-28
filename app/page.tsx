import Image from "next/image"
import SampleImage from "@/public/sample-image.png"
import { Box, Container, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./globals.scss";
import CategorySlider from "@/components/CategorySlider";
import AdvertiseCard from "@/components/AdvertiseCard";
import TopDeals from "@/components/TopDeals";
import HeroSlider from "@/components/HeroSlider";
import CategoryShowcase from "@/components/CategoryShowcase";

export default function Home() {

  


  return (
    <>
    <Container  sx={{ maxWidth: "95% !important", padding: "0 15px !important" }}>

      <HeroSlider />

      <CategorySlider />


      <AdvertiseCard />

      <h2 className="text-4xl font-bold">Flash Sales Today</h2>

      <TopDeals />

      
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#054934] mb-10">
          Search by Product Category And get inspired
      </h2>

      <CategoryShowcase />
      <CategoryShowcase position="right"/>

    </Container>
    </>
  );
}
