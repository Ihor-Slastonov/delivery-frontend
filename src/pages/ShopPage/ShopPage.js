import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import deliveryApi from '../../api/deliveryApi';

import ShopList from '../../components/ShopList/ShopList';
import Loader from '../../components/Loader/Loader';
import ProductList from '../../components/ProductList/ProductList';

const ShopPage = () => {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        setIsLoading(true);
        const { result } = await deliveryApi.fetchAllShops();
        setShops(result);
      } catch (error) {
        console.log(error);
        toast('try again later');
      } finally {
        toast.success('Shops loaded');
        setIsLoading(false);
      }
    };
    fetchShops();
  }, []);

  const fetchProducts = async id => {
    try {
      const { result } = await deliveryApi.fetchShopsItemsById(id);
      setProducts(result);
    } catch (error) {
      toast('try again later');
    } finally {
      toast.success(`Products loaded`);
    }
  };

  const handleShopSelect = id => {
    fetchProducts(id);
  };

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex gap-10">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <ShopList shops={shops} handleShopSelect={handleShopSelect} />
              <ProductList products={products} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
