import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              DOOZY
            </h3>
            <p className="text-white/60 text-sm">
              Premium footwear for every lifestyle. Quality, comfort, and style in every step.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-white/60 hover:text-white transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=sneakers" className="text-white/60 hover:text-white transition-colors text-sm">
                  Sneakers
                </Link>
              </li>
              <li>
                <Link to="/products?category=running" className="text-white/60 hover:text-white transition-colors text-sm">
                  Running
                </Link>
              </li>
              <li>
                <Link to="/products?category=training" className="text-white/60 hover:text-white transition-colors text-sm">
                  Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Doozy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
