import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { useCart } from '../context/CartContext';
import { FaTrash, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa';
import { Button } from '@nextui-org/react';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();
  const baseImgUrl = 'https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes';

  if (cart.length === 0) {
    return (
      <PageLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <FaShoppingBag className="text-6xl text-white/20 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              Your Cart is Empty
            </h1>
            <p className="text-white/60 mb-8">Add some products to get started!</p>
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-32 h-32 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <img
                      src={`${baseImgUrl}/${item.images[0]}.png`}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-white/60 text-sm">{item.description}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/60 hover:text-red-400 transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors flex items-center justify-center"
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors flex items-center justify-center"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-white/60 text-sm">${item.price} each</p>
                        <p className="text-xl font-bold text-white">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-white/80">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Shipping</span>
                  <span>{cartTotal > 100 ? 'FREE' : '$10.00'}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Tax</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between text-white text-xl font-bold">
                    <span>Total</span>
                    <span>${(cartTotal + (cartTotal > 100 ? 0 : 10) + cartTotal * 0.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => navigate('/checkout')}
                className="w-full bg-white text-black font-semibold py-6 text-lg mb-4"
                size="lg"
              >
                Proceed to Checkout
              </Button>

              <Link
                to="/products"
                className="block text-center text-white/80 hover:text-white transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
