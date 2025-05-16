import './styles/styles.css'
import React, { useState } from 'react';
import './styles/styles.css';
import { products } from './component/data';
import Card from './component/card';
import CartPage from './component/CartPage';
// import images
import amibo from './images/amibo.png'
import banner from './images/banner.png'
import computer from './images/computer.png'
import console from './images/console.png'
import games from './images/games.png'
import technology from './images/technology.png'



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
