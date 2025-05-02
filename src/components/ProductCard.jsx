import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import placeholder from '../assets/placeholder.jpg';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded p-4 flex flex-col items-center">
      <img src={product.image || placeholder} alt={product.name} className="w-48 h-48 object-contain mx-auto" />
      <h2 className="mt-2 text-center font-medium">{product.title}</h2>
      <p className="text-sm text-gray-700">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
