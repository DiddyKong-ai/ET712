import React, { useState } from 'react';
import ModalWindow from './modalwindow';

export default function Card({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
        onClick={() => setShowModal(true)}
        className="card-img"
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
        className="quantity-input"
      />
      <button className="add-btn" onClick={() => addToCart(product, quantity)}>
        Add to Cart
      </button>

      {showModal && (
        <ModalWindow
          title={product.title}
          image={product.image}
          description={product.description}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
