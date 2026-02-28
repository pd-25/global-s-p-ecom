"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SiteButton } from "@/components/SiteButton";

const items = [
  { id: 1, name: "Taylor Farms Broccoli Florets Vegetables", price: 125, qty: 1, image: "/sample-image.png", rating: 4.8, reviews: 128 },
  { id: 2, name: "Organic Carrots", price: 80, qty: 2, image: "/sample-image.png", rating: 4.5, reviews: 102 },
  { id: 3, name: "Fresh Spinach", price: 95, qty: 3, image: "/sample-image.png", rating: 4.7, reviews: 134 },
];

function Row({ item }: any) {
  const subtotal = item.price * item.qty;

  return (
    <div className="grid grid-cols-6 items-center py-6 border-gray-200 border-b">

      {/* Remove */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <DeleteOutlineIcon fontSize="small" />
        Remove
      </div>

      {/* Product */}
      <div className="col-span-2 flex items-center gap-4">
        <Image src={item.image} alt="" width={60} height={60} className="rounded-lg border border-gray-200" />
        <div>
          <p className="font-semibold text-sm">{item.name}</p>
          <p className="text-xs text-gray-500">⭐ {item.rating} | {item.reviews} Reviews</p>
        </div>
      </div>

      <div>${item.price.toFixed(2)}</div>

      {/* Quantity */}
      <div>
        <div className="inline-flex border border-gray-200 rounded-md">
          <button className="px-3 py-1">-</button>
          <span className="px-4 py-1 border-x border-gray-200">{item.qty}</span>
          <button className="px-3 py-1">+</button>
        </div>
      </div>

      <div>${subtotal.toFixed(2)}</div>
    </div>
  );
}

function Summary() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">

      <h3 className="font-semibold text-lg">Cart Totals</h3>

      <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-2">
        <div className="flex justify-between"><span>Subtotal</span><span>$250.00</span></div>
        <div className="flex justify-between"><span>Estimated Delivery</span><span>Free</span></div>
        <div className="flex justify-between"><span>Estimated Taxes</span><span>USD 10.00</span></div>
      </div>

      <div className="bg-gray-100 rounded-lg p-4 flex justify-between font-semibold">
        <span>Total</span>
        <span>$250.00</span>
      </div>

      <SiteButton
        fullWidth
      >
        Proceed to checkout
      </SiteButton>
    </div>
  );
}

function Features() {
  const data = [
    "Free Shipping",
    "100% Satisfaction",
    "Secure Payments",
    "24/7 Support",
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mt-12">
      {data.map((t) => (
        <div key={t} className="bg-[#eef2ff] rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-lime-600 rounded-full" />
          <div>
            <p className="font-semibold">{t}</p>
            <p className="text-xs text-gray-500">Free shipping all over the US</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CartPage() {
  return (
    <div className="bg-[#f4f6f8] min-h-screen py-10">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8 px-6">

        {/* Cart Table */}
        <div className="lg:col-span-3 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

          <div className="grid grid-cols-6 font-semibold text-sm pb-4 border-b border-gray-200">
            <div>&nbsp;</div>
            <div className="col-span-2">Product Name</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {items.map((i) => <Row key={i.id} item={i} />)}

        </div>

        <Summary />

      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Features />
      </div>

    </div>
  );
}