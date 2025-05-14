import React from 'react';
import Card from './Card';

const sampleProducts = [
  { id: 1, name: "Laptop", price: 69 },
  { id: 2, name: "Phone", price: 50 },
  { id: 3, name: "Headphones", price: 15 },
  { id: 4, name: "Consoles", price: 200 },
  { id: 5, name: "Games", price: 60 },
  { id: 6, name: "Amibo", price: 30 },
  { id: 7, name: "Camera", price: 30 },
  { id: 8, name: "Keyboard", price: 24 },
  { id: 9, name: "Banner", price: 50 },
];

const ProductList = ({ addToCart }) => (
  <div>
    <h2 className="text-lg font-semibold mb-4">Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {sampleProducts.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow">
          <h3 className="text-md font-bold">{product.name}</h3>
          <p>${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;
