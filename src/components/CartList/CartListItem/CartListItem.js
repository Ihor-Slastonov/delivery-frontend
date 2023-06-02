import React from 'react';

import { ImCross, ImPlus, ImMinus } from 'react-icons/im';

const CartListItem = ({ order, updateCartItem, removeCartItem }) => {
  const { name, imgUrl, price, _id, quantity } = order;

  const handleIncreaseQuantity = () => {
    updateCartItem(_id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity >= 1) {
      updateCartItem(_id, quantity - 1);
    }
  };

  const handleRemoveItem = () => {
    removeCartItem(_id);
  };

  return (
    <div className="flex justify-around gap-8">
      <div className="w-[400px]  p-3 rounded-3xl shadow-xl border-gray-200 border-2">
        <img src={imgUrl} alt={name} className="rounded-xl" loading="lazy" />
      </div>
      <div className="flex flex-col items-center ">
        <p className="block mt-2 mr-2 text-xl text-gray-800">{name}</p>
        <p className="block mt-2 mr-2 text-xl text-gray-800">
          Price: $ {price}
        </p>

        <div className="flex items-center gap-6 mt-6 px-2">
          <button type="button" onClick={handleDecreaseQuantity}>
            <ImMinus />
          </button>
          <span className="text-xl">{quantity}</span>
          <button type="button" onClick={handleIncreaseQuantity}>
            <ImPlus />
          </button>
        </div>
        <button
          onClick={handleRemoveItem}
          className="flex items-center justify-center
           gap-2 mt-6 w-full p-1 
           border-2 rounded-md border-red-500
            hover:text-red-500 transition-colors"
        >
          <ImCross color="tomato" size={16} />
          DELETE
        </button>
      </div>
    </div>
  );
};

export default CartListItem;
