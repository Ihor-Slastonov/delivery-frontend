import React, { useEffect, useState } from 'react';
import CartForm from '../../components/CartForm/CartForm';
import CartList from '../../components/CartList/CartList';
import { toast } from 'react-hot-toast';
import localStorageCartApi from '../../api/localStorageCartApi';

const CartPage = () => {
  const [order, setOrder] = useState([]);
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);

  useEffect(() => {
    const getCurrentOrder = () => {
      try {
        const cart = localStorageCartApi.currentCart();
        if (!cart) {
          return;
        }
        const currentOrder = cart.map(item => ({ ...item, quantity: 1 }));
        const totalPrice = currentOrder.reduce(
          (sum, item) => sum + item.quantity * Number(item.price),
          0
        );
        setOrder(currentOrder);
        setTotalOrderPrice(totalPrice);
      } catch (error) {
        toast('try again later');
      }
    };
    getCurrentOrder();
  }, []);

  const updateCartItem = (itemId, newQuantity) => {
    const updatedOrder = order.map(item => {
      if (item._id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    const totalPrice = updatedOrder.reduce(
      (sum, item) => sum + item.quantity * Number(item.price),
      0
    );

    setOrder(updatedOrder);
    setTotalOrderPrice(totalPrice);
  };

  const removeCartItem = itemId => {
    const updatedOrder = order.filter(item => item._id !== itemId);

    const totalPrice = updatedOrder.reduce(
      (sum, item) => sum + item.quantity * Number(item.price),
      0
    );

    setOrder(updatedOrder);
    setTotalOrderPrice(totalPrice);
  };

  const handleClearOrder = () => {
    setOrder([]);
    setTotalOrderPrice(0);
  };

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex gap-10">
          <CartForm
            totalOrderPrice={totalOrderPrice}
            order={order}
            handleClearOrder={handleClearOrder}
          />
          <CartList
            order={order}
            updateCartItem={updateCartItem}
            removeCartItem={removeCartItem}
          />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
