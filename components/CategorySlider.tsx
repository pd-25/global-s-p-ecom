"use client";

import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import SampleImage from "@/public/sample-image.png";

import "swiper/css";
import "swiper/css/navigation";

export default function CategorySlider() {
  const items = Array(20).fill(0);

  return (
    <Box className="relative mt-20 mb-20">

      {/* Navigation buttons */}
      <Box className="ComSliderNavigation">
        <IconButton className="swiper-button-prev absolute! left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-500 text-white">
          <ChevronLeft />
        </IconButton>

        <IconButton className="swiper-button-next absolute! right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-500 text-white">
          <ChevronRight />
        </IconButton>
      </Box>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={6}
        loop={true}                // 🔥 real infinite loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 8 },
          1280: { slidesPerView: 10 },
        }}
      >
        {items.map((_, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center">
                <Image src={SampleImage} alt="Sample" />
              </div>
              <h3 className="mt-4 font-semibold">Yummy Candy</h3>
              <p className="text-sm text-gray-500">125+ Products</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}