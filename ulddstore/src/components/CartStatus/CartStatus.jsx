import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BiCart } from 'react-icons/bi';
import { getCart } from '../../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { data: products } = useQuery(['carts'], () => getCart(uid));
  const { uid } = useAuthContext();

  return (
    <div className="flex gap-2 relative items-center justify-center">
      <BiCart className="text-4xl" />
      {products && (
        <p className="w-5 h-5 bg-red-600 text-white text-sm rounded-full flex justify-center items-center font-bold absolute -top-0 left-5">
          {products.length}
        </p>
      )}
      {/* {console.log(products)} */}
      <h2 className="">장바구니</h2>
    </div>
  );
}
