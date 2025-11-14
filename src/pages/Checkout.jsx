import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Button } from '@nextui-org/react';
import { FaCreditCard, FaLock } from 'react-icons/fa';

export const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { user, addOrder, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isAuthenticated) {
    navigate('/login?redirect=/checkout');
    return null;
  }

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const order = {
      items: cart,
      total: cartTotal + (cartTotal > 100 ? 0 : 10) + cartTotal * 0.1,
      shippingAddress: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
      },
    };

    addOrder(order);
    clearCart();
    navigate('/orders?success=true');
  };

  const shipping = cartTotal > 100 ? 0 : 10;
  const tax = cartTotal * 0.1;
  const total = cartTotal + shipping + tax;

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Checkout
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Shipping Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white/80 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <FaCreditCard /> Payment Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2">CVC</label>
                      <input
                        type="text"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleChange}
                        placeholder="123"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <FaLock />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sticky top-24"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-white/80 text-sm">
                      <span>{item.title} x {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 space-y-3 mb-6">
                  <div className="flex justify-between text-white/80">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex justify-between text-white text-xl font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-white text-black font-semibold py-6 text-lg"
                  size="lg"
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </Button>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};
