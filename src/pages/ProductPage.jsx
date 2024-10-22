// src/pages/ProductPage.jsx
import React from 'react';

const ProductPage = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col lg:flex-row">
        <img src="/path/to/product.jpg" alt="Product" className="w-full lg:w-1/2 object-cover rounded-md" />
        <div className="lg:ml-8 mt-4 lg:mt-0">
          <h1 className="text-3xl font-bold text-blue-600">Product Name</h1>
          <p className="text-lg text-gray-700 mt-4">Description of the product goes here...</p>
          <p className="text-2xl font-semibold text-green-500 mt-4">$29.99</p>
          <button className="bg-green-500 text-white px-6 py-3 mt-6 rounded-lg hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
