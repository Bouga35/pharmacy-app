// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to PharmaCare</h1>
          <p className="mt-4 text-lg">Your trusted online pharmacy for health, wellness, and beauty products</p>
          <Link to="/categories" className="bg-green-500 text-white px-6 py-3 mt-6 inline-block rounded-lg hover:bg-green-600">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">Featured Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Link to="/categories/pain-relief" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <img src="/path/to/pain-relief.jpg" alt="Pain Relief" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">Pain Relief</h3>
              </div>
            </Link>
            <Link to="/categories/supplements" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <img src="/path/to/supplements.jpg" alt="Supplements" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">Supplements</h3>
              </div>
            </Link>
            <Link to="/categories/skin-care" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <img src="/path/to/skin-care.jpg" alt="Skin Care" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">Skin Care</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800">Best Selling Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {/* Product Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="/path/to/product1.jpg" alt="Product 1" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">Pain Reliever</h3>
                <p className="text-green-500 font-bold">$19.99</p>
                <Link to="/product/1" className="bg-blue-600 text-white px-4 py-2 mt-4 block text-center rounded hover:bg-blue-700">
                  View Details
                </Link>
              </div>
            </div>

            {/* More Product Cards */}
            {/* Repeat for other products */}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-12 bg-green-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Up to 50% off on Health Supplements!</h2>
          <Link to="/categories/supplements" className="bg-white text-green-500 px-6 py-3 mt-6 inline-block rounded-lg hover:bg-gray-100">
            Shop Supplements
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
