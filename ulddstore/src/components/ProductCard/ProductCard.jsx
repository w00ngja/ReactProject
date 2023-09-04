import React from 'react';

export default function ProductCard({ product: { id, image, title, category, price } }) {
  return (
    <li className="rounded-lg shadow-md overflow-hidden cursor-pointer p-3 bg-light hover:scale-105 transition-all">
      <img className="w-full rounded-lg" src={image} alt="" />
      <div className="mt-2 px-2 text-lg flex justify-between items-center text-black">
        <h2 className="text-xl font-bold truncate md:text-2xl">{title}</h2>
        <h2 className="text-xl truncate md:text-2xl">{`₩${price}`}</h2>
      </div>
      <div className="px-2 text-dark">{category}</div>
    </li>
  );
}
