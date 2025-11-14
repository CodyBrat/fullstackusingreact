import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { useAuth } from '../context/AuthContext';
import { Button } from '@nextui-org/react';
import { FaUser, FaEnvelope, FaSave } from 'react-icons/fa';

export const Profile = () => {
  const { user, updateProfile, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const [saved, setSaved] = useState(false);

  if (!isAuthenticated) {
    navigate('/login?redirect=/profile');
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          My Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-fit"
          >
            <div className="text-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white/20"
              />
              <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
              <p className="text-white/60">{user.email}</p>
            </div>

            <div className="mt-8 space-y-2">
              <button
                onClick={() => navigate('/profile')}
                className="w-full text-left px-4 py-3 bg-white/20 text-white rounded-lg font-medium"
              >
                Profile Settings
              </button>
              <button
                onClick={() => navigate('/orders')}
                className="w-full text-left px-4 py-3 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
              >
                My Orders
              </button>
              <button
                onClick={() => navigate('/wishlist')}
                className="w-full text-left px-4 py-3 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
              >
                Wishlist
              </button>
            </div>
          </motion.div>

          {/* Profile Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Account Information</h2>

            {saved && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
              >
                Profile updated successfully!
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <FaUser /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 flex items-center gap-2">
                  <FaEnvelope /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="bg-white text-black font-semibold px-8 py-6"
                  size="lg"
                >
                  <FaSave className="mr-2" /> Save Changes
                </Button>
              </div>
            </form>

            <div className="border-t border-white/10 mt-8 pt-8">
              <h3 className="text-xl font-bold text-white mb-4">Password</h3>
              <p className="text-white/60 mb-4">
                Want to change your password? Click the button below to reset it.
              </p>
              <Button
                className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20"
              >
                Change Password
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};
