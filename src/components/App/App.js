import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import Layout from '../Layout/Layout';

const ShopPage = lazy(() => import('../../pages/ShopPage/ShopPage'));
const CartPage = lazy(() => import('../../pages/CartPage/CartPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
