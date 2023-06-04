import React from 'react';
import { ImCross } from 'react-icons/im';

import localStorageCartApi from '../../api/localStorageCartApi';

const ShopList = ({
  shops,
  handleShopSelect,
  selectedShop,
  clearShopSelect,
}) => {
  const handleClearButtonClick = () => {
    localStorageCartApi.clearCart();
    clearShopSelect();
  };

  const handleButtonClick = id => {
    handleShopSelect(id);
  };

  return (
    <div className="relative w-72 p-5 bg-gray-100 rounded-r-3xl shadow-2xl">
      <h2 className="text-center mb-3 text-2xl text-gray-800">Shops</h2>
      {selectedShop && (
        <button
          type="button"
          onClick={handleClearButtonClick}
          className=" absolute top-2  w-6 h-6 p-1 
        flex items-center justify-center border-2
         border-red-400 rounded-md text-red-400"
        >
          <ImCross size={18} />
        </button>
      )}

      <ul className="flex flex-col gap-3">
        {shops &&
          shops.map(shop => (
            <li key={shop._id}>
              <button
                className=" w-full px-2 py-4 text-lg 
                text-gray-800 
                border-2 rounded-lg hover:text-green-600 transition-colors 
                disabled:text-red-400"
                onClick={() => handleButtonClick(shop._id)}
                disabled={selectedShop && selectedShop !== shop._id}
              >
                {shop.name}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ShopList;
