
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button, IconButton, Tabs, Tab } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { FaMinus, FaPlus } from 'react-icons/fa';

// --------- Gallery ---------
function ProductGallery() {
  const images = [
    '/sample-image.png',
    '/sample-image.png',
    '/sample-image.png',
    '/sample-image.png',
  ];
  const [active, setActive] = useState(images[0]);

  return (
    <div>
      <div className="bg-white border border-[#7FAF0D] rounded-2xl p-6 flex justify-center items-center h-[380px]">
        <Image src={active} alt="product" width={260} height={320} className="object-contain" />
      </div>

      <div className="flex gap-3 mt-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(img)}
            className={`border cursor-pointer border-[#054934] rounded-xl p-2 ${active === img ? 'hover:border-[#7FAF0D]' : 'border-gray-200'}`}
          >
            <Image src={img} alt="thumb" width={60} height={60} />
          </button>
        ))}
      </div>
    </div>
  );
}

// --------- Info ---------
function ProductInfo() {
  const [qty, setQty] = useState(1);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">
        Lay's Potato Chips Onion Flavored
      </h1>

      <div className="text-sm text-gray-500">⭐⭐⭐⭐⭐ 4.7 Star Rating (21,671) | SKU: EB4DRP</div>

      <p className="text-gray-600 text-sm">
        Vivamus adipiscing nisl ut dolor dignissim semper.
      </p>

      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold text-[#054934]">$25.00</span>
        <span className="text-gray-400 line-through">$38.00</span>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-[#7FAF0D] rounded-full px-3 py-1">
          <button className='cursor-pointer text-[#7FAF0D]' onClick={() => setQty(Math.max(1, qty - 1))}><FaMinus /></button>
          <span className="px-4 font-bold">{qty}</span>
          <button className='cursor-pointer text-[#7FAF0D]' onClick={() => setQty(qty + 1)}><FaPlus /></button>
        </div>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#7FAF0D',
            borderRadius: 20,
            textTransform: 'none',
            px: 4,
          }}
        >
          Add To Cart
        </Button>

        <IconButton><FavoriteBorderIcon /></IconButton>
        <IconButton><ShareIcon /></IconButton>
      </div>
    </div>
  );
}

// --------- Tabs Section ---------
function ProductTabs() {
  const [tab, setTab] = useState(0);

  return (
    <div className="bg-white border rounded-2xl mt-10" >
      <Tabs value={tab} onChange={(_, v) => setTab(v)}>
        <Tab label="Description" />
        <Tab label="Specification" />
        <Tab label="Nutrition" />
      </Tabs>

      <div className="p-6 text-gray-700 text-sm space-y-4">
        {tab === 0 && (
          <div>
            <h3 className="font-semibold mb-2">Product Description</h3>
            <p>
              Wherever celebrations and good times happen, the LAY'S brand will be there.
            </p>
          </div>
        )}

        {tab === 1 && (
          <ul className="list-disc ml-5 space-y-1">
            <li>Product Type: Chips & Dips</li>
            <li>Brand: Lay's</li>
            <li>Size: 8oz</li>
          </ul>
        )}

        {tab === 2 && (
          <ul className="list-disc ml-5 space-y-1">
            <li>Total Fat 10g</li>
            <li>Sodium 170mg</li>
            <li>Potassium 350mg</li>
          </ul>
        )}
      </div>
    </div>
  );
}

// --------- Main Page ---------
export default function ProductDetailsPage() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <ProductGallery />
        <ProductInfo />
      </div>

      <ProductTabs />
    </div>
  );
}
