import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { HoveredLink, Menu, MenuItem } from '../navbar-menu';

export const Navbar = () => {
  const [active, setActive] = useState(null);
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4">
      <div className="flex items-center justify-between">
        {/* Floating Menu */}
        <Menu setActive={setActive}>
          <Link to="/" className="text-white/80 hover:text-white transition-colors font-semibold">
            Home
          </Link>
          <MenuItem setActive={setActive} active={active} item="Shop">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/products">All Products</HoveredLink>
              <HoveredLink href="/products?category=tshirts">T-Shirts</HoveredLink>
              <HoveredLink href="/products?category=oversized">Oversized</HoveredLink>
              <HoveredLink href="/products?category=graphic">Graphic Tees</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Collections">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/products?category=casual">Casual Wear</HoveredLink>
              <HoveredLink href="/products?category=premium">Premium</HoveredLink>
              <HoveredLink href="/products?category=limited">Limited Edition</HoveredLink>
            </div>
          </MenuItem>
        </Menu>

        {/* Icons */}
        <div className="flex items-center space-x-3 ml-4">
          <Link to="/wishlist" className="relative p-2 text-white/80 hover:text-white transition-colors">
            <FaHeart size={18} />
          </Link>
          
          <Link to="/cart" className="relative p-2 text-white/80 hover:text-white transition-colors">
            <FaShoppingCart size={18} />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>

          {user ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 text-white/80 hover:text-white transition-colors">
                <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full border border-white/20" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/profile" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-t-lg">
                  Profile
                </Link>
                <Link to="/orders" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10">
                  Orders
                </Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-b-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="p-2 text-white/80 hover:text-white transition-colors">
              <FaUser size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
