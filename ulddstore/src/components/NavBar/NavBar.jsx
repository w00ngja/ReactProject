import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.jpg';
import { Link } from 'react-router-dom';
import { BiListUl, BiLogIn, BiCart, BiPencil, BiLogOut } from 'react-icons/bi';
import { login, logout, onUserStateChange } from '../../api/firebase';

export default function NavBar() {
  // 로그인 시 유저정보 객체를 반환할 State, 기본값은 undefined
  const [user, setUser] = useState();

  useEffect(() => {
    // 컴포넌트 최초 마운트 시 1회만 로그인 세션 확인
    onUserStateChange(setUser);
  }, []);

  return (
    <nav className="w-full flex flex-col items-center justify-center">
      <Link to="/">
        <img className="w-60 py-3" alt="" src={logo} />
      </Link>

      <div className="w-full h-10 flex items-center justify-between px-7 bg-light text-dark">
        <Link to="/products" className="hover:text-black cursor-pointer flex items-center gap-1">
          <BiListUl className="text-xl" />
          전체상품
        </Link>

        <div className="cursor-pointer flex items-center gap-3 text-sm">
          <Link to="products/add" className="hover:text-black cursor-pointer flex items-center gap-1">
            <BiPencil className="text-xl" />
            상품추가
          </Link>
          <Link to="/carts" className="hover:text-black  flex items-center gap-1">
            <BiCart className="text-xl" />
            장바구니
          </Link>

          {/* 로그인 상태라면 (user State에 값이 들어있다면) 유저정보와 로그아웃버튼 */}
          {!user ? (
            <div onClick={login} className="hover:text-black  flex items-center gap-1">
              <BiLogIn className="text-xl" />
              로그인
            </div>
          ) : (
            <>
              <p className="pr">|</p>
              <div onClick={login} className="hover:text-black  flex items-center gap-1">
                <img alt="" src={user.photoURL} className="rounded-full w-6" />
                <p>{user.displayName}님</p>
              </div>
              <div onClick={logout} className="hover:text-black  flex items-center gap-1">
                <BiLogOut className="text-xl" />
                로그아웃
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
