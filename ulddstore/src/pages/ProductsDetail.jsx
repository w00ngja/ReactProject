import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../components/context/AuthContext';
import useCart from '../hooks/useCart';

export default function ProductsDetail() {
  const { user } = useAuthContext();

  const {
    state: { product },
  } = useLocation();
  const { id, image, title, category, price, description, options } = product;
  const [selected, setSelected] = useState(options && options[0]);
  const { addOrUpdateItem } = useCart();

  const handleChange = (e) => setSelected(e.target.value);
  const handleClick = () => {
    // 장바구니 추가
    // 로그인 안되어있을 경우, "로그인이 필요합니다" Alert
    // 로그인 되어있을 경우, 해당 유저의 장바구니 데이터베이스에 해당 제품을 넣어주면 됨
    if (user) {
      const product = { id, image, title, price, option: selected, quantity: 1 };
      return addOrUpdateItem.mutate(product);
    } else return alert('제품을 장바구니에 담기 위해선 로그인이 필요합니다.');
  };

  return (
    <section className="flex-col">
      <section className="flex flex-col justify-center gap-5 sm:flex-row mt-4">
        <img src={image} className="w-full px-4 basis-4/12" alt="" />
        <div className="w-full basis-4/12 px-4 flex flex-col">
          <div className="flex items-center gap-2">
            <h2 className="font-extrabold text-3xl">{title}</h2>
            <h2 className=" bg-light text-dark rounded-lg text-sm px-2">{category}</h2>
          </div>
          <h2>{description}</h2>

          <div className="flex items-center justify-between gap-2 mt-5">
            <div>
              <label className="bg-light px-3 py-1 rounded-xl mr-2">OPTION</label>
              <select className="flex-1 border-2 px-2 " onChange={handleChange} value={selected}>
                {options && options.map((option, index) => <option key={index}>{option}</option>)}
              </select>
            </div>

            <h2 className="font-bold text-3xl">₩{price}</h2>
          </div>

          <button className="bg-light px-5 py-3 rounded-lg text-dark hover:text-black  my-5" onClick={handleClick}>
            장바구니에 추가
          </button>
        </div>
      </section>
    </section>
  );
}
