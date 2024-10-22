// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">PharmaCare</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/categories" className="hover:text-gray-200">Categories</Link></li>
            <li><Link to="/cart" className="hover:text-gray-200">Cart</Link></li>
            <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
