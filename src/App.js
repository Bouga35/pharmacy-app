import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import '../src/assets/styles/tailwind.css'
function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
