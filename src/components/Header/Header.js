import React from 'react';

import { AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai';

import { StyledLink } from './Header.styled';

const Header = () => {
  return (
    <header className="py-2 w-full shadow-lg flex items-center">
      <div className="container">
        <nav className="flex">
          <StyledLink to="/">
            <AiOutlineShop width={24} height={24} />
            Shops
          </StyledLink>
          <StyledLink to="/cart">
            <AiOutlineShoppingCart width={24} height={24} />
            Shopping Cart
          </StyledLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
