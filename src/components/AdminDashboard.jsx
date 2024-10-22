// src/components/AdminDashboard.jsx
import React, { useState } from 'react';

const AdminDashboard = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();

    // Basic validation
    if (!productName || !price || !description) {
      setError('All fields are required.');
      return;
    }

    // Mock adding product to a database
    const newProduct = {
      id: Math.random().toString(36).substr(2, 9), // Random ID
      name: productName,
      price: parseFloat(price),
      description: description
    };

    // Mock database (you could replace this with an API call)
    console.log('Product added:', newProduct);

    // Clear the form and show success message
    setProductName('');
    setPrice('');
    setDescription('');
    setError('');
    setSuccess('Product added successfully!');
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold text-center">Add New Product</h1>
      <form onSubmit={handleAddProduct} className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        {/* Product Name Field */}
        <div className="mb-6">
          <label htmlFor="product-name" className="block text-gray-700 font-bold mb-2">Product Name</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            title="Product Name"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Price Field */}
        <div className="mb-6">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            title="Price"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Description Field */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            title="Product Description"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
