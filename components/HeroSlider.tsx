"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconButton, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const slides = [
  {
    id: 1,
    title: "Daily Grocery Order and Get Express Delivery",
    subtitle: "Save Up To 50% Off On Your First Order",
    price: "$60.99",
    image: "/banner-slider-pic-01.svg",
  },
  {
    id: 2,
    title: "The leading B2B marketplace for European trade",
    subtitle: "Post your request to verified suppliers.",
    price: "$60.99",
    image: "/banner-slider-pic-01.svg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  // Auto slide
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden">

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* Image */}
          <Image
            src={slide.image}
            alt="banner"
            fill
            priority={i === 0}
            className="object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-16">
              <div className="max-w-xl space-y-5">

                <p className="font-medium text-white">
                  {slide.subtitle}
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {slide.title}
                </h1>

                <div className="flex items-center gap-5 pt-4">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#054934",
                      borderRadius: "30px",
                      textTransform: "none",
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    Explore Shop
                  </Button>

                  <p className="text-lg">
                    Starting at{" "}
                    <span className="text-red-500 font-bold">
                      {slide.price}
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <IconButton
        color="success"
        sx={{ backgroundColor: "#fff", "&:hover": {backgroundColor: "#ffffffa8"} }}
        onClick={prev}
        className="absolute! left-4 top-1/2 -translate-y-1/2 bg-white text-white shadow z-20"
      >
        <ChevronLeftIcon />
      </IconButton>

      <IconButton
        color="success"
        sx={{ backgroundColor: "#fff", "&:hover": {backgroundColor: "#ffffffa8"} }}
        onClick={next}
        className="absolute! right-4 top-1/2 -translate-y-1/2 bg-white text-white shadow z-20"
      >
        <ChevronRightIcon />
      </IconButton>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-[#054934]" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}