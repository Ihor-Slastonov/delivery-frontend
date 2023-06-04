import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import deliveryApi from '../../api/deliveryApi';
import localStorageCartApi from '../../api/localStorageCartApi';

import ShopList from '../../components/ShopList/ShopList';
import ProductList from '../../components/ProductList/ProductList';
import Loader from '../../components/Loader/Loader';

const ShopPage = () => {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        setIsLoading(true);
        toast('Loading');
        const { result } = await deliveryApi.fetchAllShops();
        setShops(result);
      } catch (error) {
        console.log(error);
        toast('try again later');
      } finally {
        setIsLoading(false);
      }
    };

    const checkCart = () => {
      try {
        const cart = localStorageCartApi.currentCart() || [];
        if (cart.length === 0) {
          return;
        }
        setSelectedShop(cart[0].shopId);
      } catch (error) {
        console.log(error);
      }
    };

    fetchShops();
    checkCart();
    if (selectedShop) {
      fetchProducts(selectedShop);
    }
  }, [selectedShop]);

  const fetchProducts = async id => {
    try {
      const { result } = await deliveryApi.fetchShopsItemsById(id);
      setProducts(result);
    } catch (error) {
      toast('try again later');
    }
  };

  const clearShopSelect = () => {
    setSelectedShop(null);
    setProducts([]);
  };

  const handleShopSelect = id => {
    setSelectedShop(id);
    fetchProducts(id);
  };

  return (
    <section className="py-10">
      <div className="container">
        <h1 className="sr-only">Welcome to Jam's Delivery!</h1>
        <div className="flex gap-10">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <ShopList
                shops={shops}
                handleShopSelect={handleShopSelect}
                selectedShop={selectedShop}
                clearShopSelect={clearShopSelect}
              />
              <ProductList products={products} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
