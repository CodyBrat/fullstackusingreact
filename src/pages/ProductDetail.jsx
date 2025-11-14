import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { Rating } from '../components/productlists/Rating';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { FaHeart, FaShoppingCart, FaCheck, FaTruck, FaUndo } from 'react-icons/fa';
import { Button } from '@nextui-org/react';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <PageLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/products')} className="bg-white text-black">
            Back to Products
          </Button>
        </div>
      </PageLayout>
    );
  }

  const baseImgUrl = 'https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes';
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-white/60 text-sm">
          <button onClick={() => navigate('/')} className="hover:text-white">Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate('/products')} className="hover:text-white">Products</button>
          <span className="mx-2">/</span>
          <span className="text-white">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex items-center justify-center"
          >
            <img
              src={`${baseImgUrl}/${product.images[0]}.png`}
              alt={product.title}
              className="w-full max-w-md h-auto object-contain"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {product.title}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <Rating rating={product.rating} peoplerated={product.peopleRated} />
                <span className="text-white/60">|</span>
                <span className="text-white/60">{product.stock} in stock</span>
              </div>
              <p className="text-3xl font-bold text-white">${product.price}</p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/80 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/80">
                    <FaCheck className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-white font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
                >
                  -
                </button>
                <span className="text-white text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-white text-black font-semibold py-6 text-lg"
                size="lg"
              >
                {addedToCart ? (
                  <span className="flex items-center gap-2">
                    <FaCheck /> Added to Cart
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FaShoppingCart /> Add to Cart
                  </span>
                )}
              </Button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`px-6 py-3 backdrop-blur-xl border rounded-lg transition-all ${
                  inWishlist
                    ? 'bg-red-500/20 border-red-500/50 text-red-400'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <FaHeart size={24} />
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t border-white/10 pt-6 space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <FaTruck className="text-xl" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <FaUndo className="text-xl" />
                <span>30-day return policy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};
