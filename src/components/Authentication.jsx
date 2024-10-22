// src/components/Authentication.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Mock authentication logic
    const mockUser = {
      email: 'user@pharmacy.com',
      password: 'password123'
    };

    if (email === mockUser.email && password === mockUser.password) {
      // If successful, redirect to homepage
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        {/* Email Field */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            title="Email Address"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            title="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Authentication;

  