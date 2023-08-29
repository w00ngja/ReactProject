import React from 'react';
import logo from '../../img/logo.jpg';

export default function NavBar() {
  return (
    <nav className="w-full flex flex-col items-center justify-center">
      <img className="w-60 py-3" alt="" src={logo} />
      <div className="w-full h-10 flex items-center justify-between bg-main text-black">
        <p>전체상품</p>
        <p>장바구니</p>
        <p>로그인</p>
      </div>
    </nav>
  );
}
