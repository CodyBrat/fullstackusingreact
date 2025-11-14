import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { useAuth } from '../context/AuthContext';
import { FaBox, FaCheck } from 'react-icons/fa';

export const Orders = () => {
  const { orders, isAuthenticated } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login?redirect=/orders');
      return;
    }

    if (searchParams.get('success') === 'true') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  }, [isAuthenticated, navigate, searchParams]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'shipped':
        return 'text-blue-400 bg-blue-400/20';
      case 'delivered':
        return 'text-green-400 bg-green-400/20';
      default:
        return 'text-white/60 bg-white/10';
    }
  };

  if (orders.length === 0 && !showSuccess) {
    return (
      <PageLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <FaBox className="text-6xl text-white/20 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              No Orders Yet
            </h1>
            <p className="text-white/60 mb-8">Start shopping to see your orders here!</p>
            <a
              href="/products"
              className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Start Shopping
            </a>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3 text-green-400"
          >
            <FaCheck />
            <span>Order placed successfully! Thank you for your purchase.</span>
          </motion.div>
        )}

        <h1 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          My Orders
        </h1>

        <div className="space-y-6">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Order #{order.id}</h3>
                  <p className="text-white/60 text-sm">
                    Placed on {new Date(order.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="space-y-4">
                  {order.items.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium">{item.title}</p>
                        <p className="text-white/60 text-sm">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-white font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 mt-6 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-2xl font-bold text-white">${order.total.toFixed(2)}</span>
                  </div>
                </div>

                {order.shippingAddress && (
                  <div className="border-t border-white/10 mt-6 pt-6">
                    <h4 className="text-white font-semibold mb-2">Shipping Address</h4>
                    <p className="text-white/60 text-sm">
                      {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
                      {order.shippingAddress.address}<br />
                      {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
