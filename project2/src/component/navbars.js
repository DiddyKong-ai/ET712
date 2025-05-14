import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">Go to Cart ({cartCount})</Link>
    </nav>
  );
}

