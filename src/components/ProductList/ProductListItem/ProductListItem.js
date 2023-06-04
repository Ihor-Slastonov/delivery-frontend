import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { ImCheckmark } from 'react-icons/im';


import localStorageCartApi from '../../../api/localStorageCartApi';

const ProductListItem = ({ product }) => {
  const [isAdd, setIsAdd] = useState(false);
  const { name, imgUrl, price, _id } = product;

  const handleButtonClick = () => {
    localStorageCartApi.addToCart(product);
    toast.success('Product add to cart');
    setIsAdd(true);
  };

  useEffect(() => {
    const cart = localStorageCartApi.currentCart();
    const isProductSave = cart.find(item => item._id === _id);
    if (isProductSave) {
      setIsAdd(true);
    }
  }, [_id]);

  return (
    <div className="w-[400px] p-5 rounded-3xl shadow-xl border-gray-200 border-2">
      <div className=" w-96 h-60 object-cover">
        <img
          src={imgUrl}
          alt={name}
          width={360}
          loading="lazy"
          className=" rounded-xl h-full"
        />
      </div>
      <p className="inline-block mt-2 mr-2 text-xl">{name}</p>
      <span className="text-xl">$ {price}</span>

      <button
        onClick={handleButtonClick}
        type="button"
        className={`flex items-center justify-end gap-2 ml-auto py-2 px-4 rounded-2xl border-2 hover:border-green-600 transition-colors`}
      >
        {isAdd && <ImCheckmark width={24} height={24} color="green" />}
        add to Cart
      </button>
    </div>
  );
};

export default ProductListItem;
