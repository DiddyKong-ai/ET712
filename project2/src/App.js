import './styles/styles.css'
import React, { useState } from 'react';
import { products } from './component/data';
import Card from './component/card';
import CartPage from './component/CartPage';
import './styles/styles.css';


export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

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
    <div>
      <nav className="navbar">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('cart')}>
          Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
        </button>
      </nav>

      {currentPage === 'home' && (
        <div className="product-grid">
          {products.map(product => (
            <Card key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}

      {currentPage === 'cart' && <CartPage cartItems={cartItems} />}
    </div>
  );
}
