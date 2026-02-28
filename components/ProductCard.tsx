import { Button } from "@mui/material";
import Image from "next/image";

export default function ProductCard ({ p }: { p: any }) {
    return (
      <div className="relative bg-white rounded-2xl border border-gray-200 shadow-md p-5 flex flex-col hover:shadow-lg transition">
  
        {/* Badge */}
        {p.badge && (
          <span
            className={`absolute top-3 left-3 text-xs text-white px-2 py-1 rounded-md font-medium ${
              p.badge.includes("Sale")
                ? "bg-red-500"
                : p.badge.includes("Best")
                ? "bg-blue-500"
                : "bg-orange-400"
            }`}
          >
            {p.badge}
          </span>
        )}
  
        {/* Image Box */}
        <div className="flex justify-center items-center h-40 mb-4">
          <Image
            src={p.image}
            alt={p.title}
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
  
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800 leading-snug min-h-[40px]">
          {p.title}
        </h3>
  
        {/* Rating + Sold */}
        <div className="text-xs text-gray-500 mt-2">
          ⭐ {p.rating} ({Math.floor(Math.random() * 200)})
        </div>
        <div className="text-xs text-gray-500">Sold: {p.sold}</div>
  
        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-gray-400 line-through text-sm">
            ${p.oldPrice}
          </span>
          <span className="text-[#054934] font-bold text-lg">
            ${p.price}
          </span>
          <span className="text-xs text-gray-500">/Qty</span>
        </div>
  
        {/* Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#7FAF0D",
            "&:hover": { backgroundColor: "#6e9b0c" },
            textTransform: "none",
            borderRadius: "12px",
            fontWeight: 600,
            py: 1.2,
          }}
        >
          Add To Cart
        </Button>
      </div>
    );
}