import React from 'react';
import CartListItem from './CartListItem/CartListItem';

const CartList = ({ order, updateCartItem, removeCartItem }) => {
  return (
    <div className="w-[800px] p-5 h-[700px] overflow-auto bg-gray-100 rounded-3xl shadow-2xl">
      <ul className="flex flex-col gap-7 w-full">
        {order &&
          order.map(item => (
            <li key={item._id}>
              <CartListItem
                order={item}
                removeCartItem={removeCartItem}
                updateCartItem={updateCartItem}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CartList;
