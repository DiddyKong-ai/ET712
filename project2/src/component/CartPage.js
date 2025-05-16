// src/components/CartPage.js
import React from 'react';

export default function CartPage({ cartItems }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * 10, 0); // $10 per item
  const tax = subtotal * 0.0816;
  const total = subtotal + tax;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <strong>{item.title}</strong> – Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}

      <div className="cart-summary">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (8.16%): ${tax.toFixed(2)}</p>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}
