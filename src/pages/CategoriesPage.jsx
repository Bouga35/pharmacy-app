// src/pages/CategoriesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold text-gray-800">Product Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Example category */}
        <Link to="/categories/pain-relief" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
          <img src="/path/to/pain-relief.jpg" alt="Pain Relief" className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-700">Pain Relief</h3>
          </div>
        </Link>
        {/* More categories */}
      </div>
    </div>
  );
};

export default CategoriesPage;
