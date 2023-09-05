import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div className="bg-gray-50 p-5 px-8 mx-2 rounded-2xl text-center text-lg md:text-xl">
      <p>{text}</p>
      <p className="font-bold text-red-600 text-xl md:text-2xl">₩{price}</p>
    </div>
  );
}
