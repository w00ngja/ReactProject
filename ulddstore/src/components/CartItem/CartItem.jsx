import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import useCart from '../../hooks/useCart';

const ICON_STYLE = 'transition-all cursor-pointer hover:text-red-600 hover:scale-105';
export default function CartItem({ product, product: { id, image, title, price, option, quantity } }) {
  const { addOrUpdateItem, removeItem } = useCart();

  // 제품 수량 조절 콜백 (Minus, Plus, Remove)
  const handleMinus = () => {
    // 예외처리
    if (quantity < 2) return;

    // 수량이 1이 아닌 경우, 갖고 있는 수량에서 -1하여 DB 갱신
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />

      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-red-600">{option}</p>
          <p>₩{price}</p>
        </div>

        {/* 수량 조절 부분 */}
        <div className="text-2xl flex items-center gap-2">
          <AiOutlineMinusSquare className={ICON_STYLE} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_STYLE} onClick={handlePlus} />
          <RiDeleteBin5Fill className={ICON_STYLE} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
