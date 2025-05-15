import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbars';
import ProductPage from './component/ProductPage';
import CartPage from './component/CartPage';
import ProductList from './component/ProductPage';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  return (
    <>
      <Navbar cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<ProductPage products={ProductList} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
      </Routes>
    </>
  );
}