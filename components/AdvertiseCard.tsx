"use client"

import { Box, Button, Container, Stack, Typography } from "@mui/material"
import Icon from "@/components/ui/icon/Icon"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
// Top brands & marketplace images
import topBrandImage from "@/public/home/top-brand-thumbnail.png"
import appleLogo from "@/public/home/apple-logo.png"
import Image from "next/image"
import { useSliderNavigation } from "@/hooks/useSliderNavigation"
import { SiteButton } from "./SiteButton"
import { FaArrowRight } from "react-icons/fa"

const brands = [
  {
    id: 1,
    name: "Everyday Fresh Meat",
    image: topBrandImage,
    price: "$90.52",
  },
  {
    id: 2,
    name: "Everyday Fresh Meat",
    image: topBrandImage,
    price: "$90.52",
  },
  {
    id: 3,
    name: "Everyday Fresh Meat",
    image: topBrandImage,
    price: "$90.52",
  },
  {
    id: 4,
    name: "Everyday Fresh Meat",
    image: topBrandImage,
    price: "$90.52",
  },
]

export default function AdvertiseCard() {
  const { showNavigation } = useSliderNavigation(
    brands.length,
    1, // default slidesPerView
    {
      640: 1,
      768: 2,
      992: 3,
      1280: 4,
    }
  )
  return (
    <Box component="section" className="topBrandsWrapper secPadd pb-0 mb-10">
        <Box
          className="shortTitle"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
        </Box>
        <Box sx={{ mt: 3 }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            speed={1500}
            navigation={
              showNavigation
                ? {
                    nextEl: ".ComSliderNavigation .swiper-button-next",
                    prevEl: ".ComSliderNavigation .swiper-button-prev",
                  }
                : false
            }
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
            className="top-brands-swiper"
          >
            {showNavigation && (
              <Box className="ComSliderNavigation">
                <Box className="swiper-button-prev"></Box>
                <Box className="swiper-button-next"></Box>
              </Box>
            )}
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <Box
                  className={`topBrandsCard bg-slate-200`}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box className="brandContent ">
                      <div
                        className="font-normal text-2xl mb-4"
                      >
                        {brand.name}
                      </div>
                      <div className="font-normal text-normal mb-3">
                         Starting at <b className="text-rose-500">{brand.price}</b>
                      </div>

                      <SiteButton className="text-white">Shop Now <FaArrowRight className="ml-3"/></SiteButton>
                    </Box>
                    <Box className="brandImage">
                      <Image src={brand.image} alt="brand-image" />
                    </Box>
                  </Stack>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
    </Box>
  )
}
