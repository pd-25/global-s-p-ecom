'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button, Slider, Checkbox, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProductCard from '@/components/ProductCard';

// ---------- Sample Data ----------
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

// ---------- Product Card ----------


// ---------- Sidebar Filters ----------
function Sidebar() {
  const [price, setPrice] = useState<number[]>([0, 200]);
  return (
    <aside className="w-full lg:w-72 bg-white border rounded-xl p-4 space-y-6 h-fit">
      <div>
        <h2 className="font-semibold mb-3 text-[#054934]">Product Category</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          {['Mobile & Accessories', 'Laptop', 'Electronics', 'Smart Watch', 'Storage', 'Camera'].map((c) => (
            <li key={c} className="hover:text-[#054934] cursor-pointer">{c} (12)</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold mb-2 text-[#054934]">Filter by Price</h2>
        <Slider color="success" value={price} onChange={(_, v) => setPrice(v as number[])} max={500} />
        <Button variant="contained" sx={{ backgroundColor: '#7FAF0D', textTransform: 'none' }}>Filter</Button>
      </div>

      <div>
        <h2 className="font-semibold mb-2 text-[#054934]">Filter by Rating</h2>
        <RadioGroup>
          {[5, 4, 3, 2].map((r) => (
            <FormControlLabel key={r} value={r} control={<Radio color="success" />} label={`⭐ ${r} & up`} />
          ))}
        </RadioGroup>
      </div>

      <div>
        <h2 className="font-semibold mb-2 text-[#054934]">Filter by Brand</h2>
        {['Apple', 'Samsung', 'Microsoft', 'HP', 'Dell', 'Redmi'].map((b) => (
          <FormControlLabel key={b} control={<Checkbox color="success"/>} label={b} />
        ))}
      </div>
    </aside>
  );
}

// ---------- Pagination ----------
function Pagination() {
  return (
    <div className="flex justify-center gap-2 mt-8">
        <button
          className={`w-10 h-10 rounded-md border bg-white flex justify-center items-center cursor-pointer hover:bg-[#7FAF0D] hover:text-white`}
        >
          <FaArrowLeft />
       </button>
      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
        <button
          key={n}
          className={`w-10 h-10 rounded-md border cursor-pointer ${n === 1 ? 'bg-[#7FAF0D] text-white' : 'bg-white hover:bg-[#7FAF0D] hover:text-white'}`}
        >
          {String(n).padStart(2, '0')}
        </button>
      ))}
      <button
          className={`w-10 h-10 rounded-md border bg-white flex justify-center items-center cursor-pointer hover:bg-[#7FAF0D] hover:text-white`}
        >
          <FaArrowRight />
       </button>
    </div>
  );
}

// ---------- Main Page ----------
export default function Products() {
  return (
    <div className="bg-gray-50 min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <Sidebar />

        <main className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-[#054934]">Showing 1-20 of 85 result</h1>
            <div className="text-sm text-gray-600">Sort by: Popular</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          <Pagination />
        </main>
      </div>
    </div>
  );
}
