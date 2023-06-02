import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { ImCheckmark } from 'react-icons/im';

const ProductListItem = ({ product }) => {
  const [isAdd, setIsAdd] = useState(false);
  const { name, imgUrl, price, shopId } = product;

  const handleButtonClick = () => {
    toast.success('Product add to cart');
    setIsAdd(true);
  };

  const buttonClasses = !isAdd ? ' border-gray-300' : 'border-green-600';

  return (
    <div className="w-[400px] p-5 rounded-3xl shadow-xl border-gray-200 border-2">
      <img src={imgUrl} alt={name} className="rounded-xl" loading="lazy" />
      <p className="inline-block mt-2 mr-2 text-xl">{name}</p>
      <span className="text-xl">$ {price}</span>

      <button
        onClick={handleButtonClick}
        type="button"
        active={isAdd}
        className={`flex items-center justify-end gap-2 ml-auto py-2 px-4 rounded-2xl border-2 ${buttonClasses} hover:border-green-600 transition-colors`}
      >
        {isAdd && <ImCheckmark width={24} height={24} color="green" />}
        Add to Cart
      </button>
    </div>
  );
};

export default ProductListItem;