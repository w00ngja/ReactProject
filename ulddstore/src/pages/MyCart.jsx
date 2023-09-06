import React from 'react';
import CartItem from '../components/CartItem/CartItem';
import PriceCard from '../components/PriceCard/PriceCard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import useCart from '../hooks/useCart';

const SHIPPING = 3000;

export default function MyCart() {
  const {
    cartQuery: { data: products, isLoading },
  } = useCart();

  // 데이터 로딩 처리
  if (isLoading) return <p>loading...</p>;

  // 담긴 상품 있는지 여부 확인
  const hasProduct = products && products.length > 0;
  if (!hasProduct) return <p>장바구니가 비어있습니다.</p>;

  // 장바구니에 담겨 있는 제품 가격으 총합 계산, PriceCard 컴포넌트로 Prop 전송
  const totalPrice =
    products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0);

  return (
    <section className="mb-10 p-8">
      <h2 className="text-2xl font-bold text-center">내 장바구니</h2>

      {/* 장바구니에 들어있는 제품 출력 */}
      <ul className="border-b border-gray-300 mb-8 p-8 px-4">
        {products && products.map((product) => <CartItem key={product.id} product={product} />)}
      </ul>

      {/* 담겨 있는 제품 총액 계산하여 출력 */}
      <div className="flex justify-between items-center gap-2 px-2 md:px-8">
        <PriceCard text="상품 총액" price={totalPrice} />
        <BsFillPlusCircleFill className="flex flex-shrink-0" />
        <PriceCard text="배송액" price={SHIPPING} />
        <FaEquals className="flex flex-shrink-0" />
        <PriceCard text="총가격" price={totalPrice + SHIPPING} />
      </div>
    </section>
  );
}
