import React from 'react';
import ProductListItem from './ProductListItem/ProductListItem';

const ProductList = ({ products }) => {
    
  return (
    <div className="w-full p-5 h-[700px] overflow-auto bg-gray-100 rounded-3xl shadow-2xl">
      <h2 className="text-center mb-3 text-2xl text-gray-800">Products</h2>
      <ul className="flex flex-wrap gap-8 justify-center">
        {products &&
          products.map(product => (
            <li key={product._id}>
              <ProductListItem product={product} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
