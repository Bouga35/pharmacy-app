// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p>123 Pharma Street, Health City</p>
          <p>Email: support@pharmacy.com</p>
          <p>Phone: +123 456 789</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Follow Us</h2>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
