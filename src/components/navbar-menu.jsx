"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { cn } from "../lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white/80 hover:text-white">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center space-x-8">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <Link to={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">
          {title}
        </h4>
        <p className="text-white/70 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-white/70 hover:text-white transition-colors">
      {children}
    </Link>
  );
};

// Main Floating Navbar Component - SaaS Style
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Scroll behavior - hide on scroll down, show on scroll up
  React.useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
        setActive(null); // Close any open menus
      } else {
        // Scrolling up
        setVisible(true);
      }

      lastScrollY = currentScrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Floating Navbar */}
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{ opacity: 1, y: -100 }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
        >
          <div className="max-w-7xl mx-auto">
            {/* Main Floating Container */}
            <div className={cn(
              "relative bg-black/60 backdrop-blur-2xl border border-white/20 rounded-full shadow-2xl",
              "transition-all duration-300",
              scrollY > 50 && "shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            )}>
              <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 shrink-0">
                  <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    DOOZY
                  </span>
                </Link>

                {/* Desktop Navigation with Dropdown Menus */}
                <div className="hidden lg:flex items-center mx-8">
                  <Menu setActive={setActive}>
                    <MenuItem setActive={setActive} active={active} item="Categories">
                      <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/products?category=tshirts">T-Shirts</HoveredLink>
                        <HoveredLink href="/products?category=oversized">Oversized</HoveredLink>
                        <HoveredLink href="/products?category=graphic">Graphic Tees</HoveredLink>
                        <HoveredLink href="/products?category=casual">Casual</HoveredLink>
                        <HoveredLink href="/products?category=premium">Premium</HoveredLink>
                        <HoveredLink href="/products?category=limited">Limited Edition</HoveredLink>
                      </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Shop">
                      <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/products">All Products</HoveredLink>
                        <HoveredLink href="/products?featured=true">Featured</HoveredLink>
                        <HoveredLink href="/products?sort=newest">New Arrivals</HoveredLink>
                      </div>
                    </MenuItem>
                  </Menu>
                </div>

                {/* Search Bar - Compact */}
                <form onSubmit={handleSearch} className="hidden xl:flex items-center mr-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-48 px-4 py-2 pl-9 bg-white/10 border border-white/20 rounded-full text-white text-sm placeholder-white/50 focus:outline-none focus:border-white/40 focus:w-64 transition-all"
                    />
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 text-xs" />
                  </div>
                </form>

                {/* Icons */}
                <div className="flex items-center space-x-2 shrink-0">
                  <Link to="/wishlist" className="relative p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all">
                    <FaHeart size={18} />
                  </Link>

                  <Link to="/cart" className="relative p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all">
                    <FaShoppingCart size={18} />
                    {cartCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg"
                      >
                        {cartCount}
                      </motion.span>
                    )}
                  </Link>

                  {user ? (
                    <div className="relative group">
                      <button className="flex items-center space-x-2 p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all">
                        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full ring-2 ring-white/20" />
                      </button>
                      <div className="absolute right-0 mt-3 w-48 bg-black/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all overflow-hidden">
                        <Link to="/profile" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                          Profile
                        </Link>
                        <Link to="/orders" className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                          Orders
                        </Link>
                        <button
                          onClick={logout}
                          className="w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Link to="/login" className="p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all">
                      <FaUser size={18} />
                    </Link>
                  )}

                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2.5 text-white hover:bg-white/10 rounded-full transition-all"
                  >
                    {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu Dropdown */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden border-t border-white/10 rounded-b-3xl overflow-hidden"
                  >
                    <div className="px-6 py-6 space-y-4 bg-black/40 backdrop-blur-xl">
                      {/* Mobile Search */}
                      <form onSubmit={handleSearch}>
                        <div className="relative">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search products..."
                            className="w-full px-4 py-3 pl-10 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                          />
                          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                        </div>
                      </form>

                      {/* Categories */}
                      <div className="border-b border-white/10 pb-4">
                        <p className="text-white/60 text-xs uppercase font-semibold mb-3 tracking-wider">Categories</p>
                        <div className="space-y-2">
                          <Link to="/products?category=tshirts" className="block text-white/80 hover:text-white py-2 px-3 hover:bg-white/5 rounded-lg transition-colors">
                            T-Shirts
                          </Link>
                          <Link to="/products?category=oversized" className="block text-white/80 hover:text-white py-2 px-3 hover:bg-white/5 rounded-lg transition-colors">
                            Oversized
                          </Link>
                          <Link to="/products?category=graphic" className="block text-white/80 hover:text-white py-2 px-3 hover:bg-white/5 rounded-lg transition-colors">
                            Graphic Tees
                          </Link>
                          <Link to="/products?category=casual" className="block text-white/80 hover:text-white py-2 px-3 hover:bg-white/5 rounded-lg transition-colors">
                            Casual
                          </Link>
                          <Link to="/products?category=premium" className="block text-white/80 hover:text-white py-2 px-3 hover:bg-white/5 rounded-lg transition-colors">
                            Premium
                          </Link>
                          <Link to="/products?category=limited" className="block text-white/80 hover:text-white py-2 px-3 hover:bg-white/5 rounded-lg transition-colors">
                            Limited Edition
                          </Link>
                        </div>
                      </div>

                      {/* Shop */}
                      <div>
                        <p className="text-white/60 text-xs uppercase font-semibold mb-3 tracking-wider">Shop</p>
                        <div className="space-y-2">
                          <Link to="/products" className="block text-white/80 hover:text-white py-2 px-3 hover:bg-white/5 rounded-lg transition-colors">
                            All Products
                          </Link>
                          <Link to="/products?featured=true" className="block text-white/80 hover:text-white py-2 px-3 hover:bg-white/5 rounded-lg transition-colors">
                            Featured
                          </Link>
                          <Link to="/products?sort=newest" className="block text-white/80 hover:text-white py-2 px-3 hover:bg-white/5 rounded-lg transition-colors">
                            New Arrivals
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-20" />
    </>
  );
};
