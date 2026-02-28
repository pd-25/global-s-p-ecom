import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image"
import topBrandImage from "@/public/home/top-brand-thumbnail.png"
import ProductCard from "./ProductCard";

export default function TopDeals() {

    const products = Array.from({ length: 20 }).map((_, i) => ({
        id: i + 1,
        title: 'Taylor Farms Broccoli Florets Vegetables',
        price: 14.99,
        oldPrice: 28.99,
        rating: 4.8,
        sold: 1835,
        badge: i % 5 === 0 ? 'Sale 50%' : i % 3 === 0 ? 'Best Sale' : i % 7 === 0 ? 'New' : null,
        image: '/sample-image.png', // put images in /public
      }));
    

    return (
        <div className="my-10 flex gap-4">
        {products.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
        </div>
    )
}