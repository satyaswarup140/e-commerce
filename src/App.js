import React from 'react';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';

const App = () => (
  <CartProvider>
    <HomePage />
  </CartProvider>
);

export default App;
