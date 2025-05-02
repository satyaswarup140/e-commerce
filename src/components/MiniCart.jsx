// src/components/MiniCart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const MiniCart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
            <span>{item.name}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default MiniCart;
