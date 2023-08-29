import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Banner />
      <Outlet />
    </div>
  );
}
