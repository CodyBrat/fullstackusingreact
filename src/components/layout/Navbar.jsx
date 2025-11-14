import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              DOOZY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-white/80 hover:text-white transition-colors">
              Products
            </Link>
            <Link to="/products?category=sneakers" className="text-white/80 hover:text-white transition-colors">
              Sneakers
            </Link>
            <Link to="/products?category=running" className="text-white/80 hover:text-white transition-colors">
              Running
            </Link>
            <Link to="/products?category=training" className="text-white/80 hover:text-white transition-colors">
              Training
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-64 px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
            </div>
          </form>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="relative p-2 text-white/80 hover:text-white transition-colors">
              <FaHeart size={20} />
            </Link>
            
            <Link to="/cart" className="relative p-2 text-white/80 hover:text-white transition-colors">
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-white/80 hover:text-white transition-colors">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/profile" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10">
                    Profile
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10">
                    Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="p-2 text-white/80 hover:text-white transition-colors">
                <FaUser size={20} />
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  />
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                </div>
              </form>
              <Link to="/products" className="block text-white/80 hover:text-white py-2">
                Products
              </Link>
              <Link to="/products?category=sneakers" className="block text-white/80 hover:text-white py-2">
                Sneakers
              </Link>
              <Link to="/products?category=running" className="block text-white/80 hover:text-white py-2">
                Running
              </Link>
              <Link to="/products?category=training" className="block text-white/80 hover:text-white py-2">
                Training
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
