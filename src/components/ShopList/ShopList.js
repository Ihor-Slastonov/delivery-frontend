import React from 'react';

const ShopList = ({ shops, handleShopSelect }) => {
  const handleButtonClick = id => {
    handleShopSelect(id);
  };

  return (
    <div className="w-72 p-5 bg-gray-100 rounded-r-3xl shadow-2xl">
      <h2 className="text-center mb-3 text-2xl text-gray-800">Shops</h2>
      <ul className="flex flex-col gap-3">
        {shops &&
          shops.map(shop => (
            <li key={shop._id}>
              <button
                className=" w-full px-2 py-4 text-lg text-gray-800 border-2 rounded-lg hover:text-green-600 transition-colors"
                onClick={() => handleButtonClick(shop._id)}
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
