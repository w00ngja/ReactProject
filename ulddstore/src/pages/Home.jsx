import React, { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import Products from '../components/Products/Products';

export default function Home() {
  // useEffect(() => {
  //   getProducts();
  // }, []);
  return (
    <div className="">
      <Banner />
      <Products />
    </div>
  );
}
