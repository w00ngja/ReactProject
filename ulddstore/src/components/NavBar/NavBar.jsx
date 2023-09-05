import React from 'react';
import logo from '../../img/logo.jpg';
import { Link } from 'react-router-dom';
import { BiListUl, BiLogIn, BiCart, BiPencil, BiLogOut } from 'react-icons/bi';
import { useAuthContext } from '../context/AuthContext';
import { getCart } from '../../api/firebase';
import CartStatus from '../CartStatus/CartStatus';

export default function NavBar() {
  // 커스텀 훅을 통해 전역 상태 (유저정보, 로그인, 로그아웃 함수) 호출
  const { user, login, logout } = useAuthContext();

  return (
    <nav className="w-full flex flex-col items-center justify-center">
      <Link to="/">
        <img className="w-60 py-5" alt="" src={logo} />
      </Link>

      <div className="w-full h-14 flex items-center justify-between px-7 bg-light text-dark">
        <Link to="/products" className="hover:text-black cursor-pointer flex items-center gap-1">
          <BiListUl className="text-xl" />
          전체상품
        </Link>

        <div className="cursor-pointer flex items-center gap-3 text-sm">
          {/* 로그인 상태일 경우 장바구니 버튼 출력 */}
          {user && (
            <>
              {/* 어드민 계정일 경우 상품추가 버튼 출력 */}
              {user.isAdmin && (
                <Link to="products/add" className="hover:text-black cursor-pointer flex items-center gap-1">
                  <BiPencil className="text-4xl" />
                  상품추가
                </Link>
              )}
              <Link to="/carts" className="hover:text-black  flex items-center gap-1">
                <CartStatus />
              </Link>
            </>
          )}

          {/* 로그인 상태라면 (user State에 값이 들어있다면) 유저정보와 로그아웃버튼 */}
          {!user && (
            <div onClick={login} className="hover:text-black  flex items-center gap-1">
              <BiLogIn className="text-xl" />
              로그인
            </div>
          )}
          {user && (
            <>
              <p className="pr">|</p>
              <div className="hover:text-black  flex items-center gap-1">
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
