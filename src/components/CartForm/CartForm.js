import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import deliveryApi from '../../api/deliveryApi';
import localStorageCartApi from '../../api/localStorageCartApi';

const CartForm = ({ totalOrderPrice, order, handleClearOrder }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [orderId, setOrderId] = useState(null);

  const cleanForm = () => {
    setName('');
    setAddress('');
    setEmail('');
    setPhone('');
    setAddress('');
    handleClearOrder();
    localStorageCartApi.clearCart();
  };

  const createNewOrder = async newOrder => {
    try {
      const { result } = await deliveryApi.createNewOrder(newOrder);
      setOrderId(result._id);
    } catch (error) {
      toast.error('Try again later');
      console.log(error);
    } finally {
      toast.success('Your order has been successfully sent');
      cleanForm();
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const currentOrder = {
      name,
      email,
      phone,
      address,
      products: order,
      totalCoast: totalOrderPrice.toString(),
    };
    if (
      name === '' ||
      email === '' ||
      address === '' ||
      phone === '' ||
      order.length === 0
    ) {
      return toast.error(
        'Fill in all the fields or verify that the data entered is correct'
      );
    }
    createNewOrder(currentOrder);
  };

  return (
    <div className="w-[500px] p-5 h-[700px] overflow-auto bg-gray-100 rounded-3xl shadow-2xl flex flex-col justify-center">
      <form className="flex flex-col gap-4">
        <input
          type="text"
          name="userName"
          placeholder="Name"
          required
          minLength={4}
          value={name}
          onChange={e => setName(e.target.value)}
          className=" py-2 px-4 rounded-lg border-2 border-gray-300 shadow-md"
        />
        <input
          type="email"
          name="useEmail"
          placeholder="Email"
          required
          minLength={5}
          value={email}
          onChange={e => setEmail(e.target.value)}
          className=" py-2 px-4 rounded-lg border-2 border-gray-300 shadow-md"
        />
        <input
          type="tel"
          name="userPhone"
          placeholder="Phone"
          required
          minLength={10}
          pattern="^[0-9+]+$"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className=" py-2 px-4 rounded-lg border-2 border-gray-300 shadow-md"
        />
        <input
          type="text"
          name="userAddress"
          placeholder="Address"
          required
          minLength={5}
          value={address}
          onChange={e => setAddress(e.target.value)}
          className=" py-2 px-4 rounded-lg border-2 border-gray-300 shadow-md"
        />
        <div className="flex items-center gap-6 mt-7 mr-28 justify-end">
          <span className=" text-xl text-gray-800">
            Total price: $ {totalOrderPrice}
          </span>
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="px-4 py-2 border-2 border-green-600 rounded-xl "
          >
            Submit
          </button>
        </div>
      </form>
      {orderId && (
        <p className=" mt-4 text-center text-gray-800">
          Your order Id is{' '}
          <span className="text-lg text-green-600">{orderId}</span>
        </p>
      )}
    </div>
  );
};

export default CartForm;
