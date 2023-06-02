import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import deliveryApi from '../../api/deliveryApi';
import localStorageCartApi from '../../api/localStorageCartApi';

const CartForm = ({ totalOrderPrice, order, handleClearOrder }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

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
      await deliveryApi.createNewOrder(newOrder);
    } catch (error) {
      toast.error('Try again later');
      console.log(error);
    } finally {
      toast.success('Your order is successfully sent');
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
      return toast.error('Fill all form fields');
    }
    createNewOrder(currentOrder);
  };

  return (
    <div className="w-[500px] p-5 h-[700px] overflow-auto bg-gray-100 rounded-3xl shadow-2xl flex flex-col justify-center">
      <form className="flex flex-col gap-4 px-12">
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
        <div className="flex items-center gap-4 mt-7 mr-28 justify-end">
          <span className="block">Total price: {totalOrderPrice}</span>
          <button type="Submit" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CartForm;
