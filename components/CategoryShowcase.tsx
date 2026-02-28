"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import ProductCard from "./ProductCard";

type Props = {
  position?: "left" | "right"; // default left
};

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: "Galaxy M13 (4GB)",
  price: "₹10,499",
  oldPrice: "₹14,999",
  image: "/sample-image.png",
}));

export default function CategoryShowcase({ position = "left" }: Props) {
  const FeatureCard = (
    <div className="relative rounded-2xl overflow-hidden bg-[#0f5132] text-white flex flex-col justify-end min-h-[520px]">
      <Image
        src="/sample-image.png"
        alt="category"
        fill
        className="object-cover opacity-70"
      />

      <div className="relative p-6 space-y-3">
        <p className="text-sm opacity-90">2.2K Products</p>

        <h3 className="text-2xl font-bold">
          Electronics Items And More
        </h3>

        <p className="text-sm opacity-80">2.2K Products</p>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7FAF0D",
            borderRadius: "12px",
            textTransform: "none",
            px: 4,
            py: 1.2,
            mt: 1,
          }}
        >
          Source Now
        </Button>
      </div>
    </div>
  );

  const ProductGrid = (
    <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );

  return (
    <section className="py-14 bg-gray-50">
      <div className="px-6">

        <div className="grid lg:grid-cols-4 gap-6">

          {position === "left" ? (
            <>
              {FeatureCard}
              {ProductGrid}
            </>
          ) : (
            <>
              {ProductGrid}
              {FeatureCard}
            </>
          )}

        </div>
      </div>
    </section>
  );
}