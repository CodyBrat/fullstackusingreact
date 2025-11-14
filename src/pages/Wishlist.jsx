import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { ProductCard } from '../components/productlists/ProductCard';
import { useCart } from '../context/CartContext';
import { FaHeart } from 'react-icons/fa';

export const Wishlist = () => {
  const { wishlist } = useCart();

  if (wishlist.length === 0) {
    return (
      <PageLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <FaHeart className="text-6xl text-white/20 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Your Wishlist is Empty
            </h1>
            <p className="text-white/60 mb-8">Save your favorite products for later!</p>
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          My Wishlist
        </h1>
        <p className="text-white/60 mb-8">{wishlist.length} items saved</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} index={parseInt(product.images[0]) - 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
