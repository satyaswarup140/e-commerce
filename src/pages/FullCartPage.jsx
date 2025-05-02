import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const FullCartPage = () => {
  const { cartItems, subtotal, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <span>{item.title}</span>
          <div className="flex items-center gap-2">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <p className="mt-4">Subtotal: ${subtotal.toFixed(2)}</p>
    </div>
  );
};

export default FullCartPage;
