import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import logo from '../assets/logo.png';

const Header = () => {
  const { toggleCart, cartItems } = useContext(CartContext);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <img src={logo} alt="Logo" className="w-32 h-auto" />
      <nav className="space-x-4">
        <button onClick={toggleCart} className="relative">
          🛒
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            {cartItems.length}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
