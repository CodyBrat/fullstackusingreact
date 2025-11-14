import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { useAuth } from '../context/AuthContext';
import { Button } from '@nextui-org/react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      await signup(formData.email, formData.password, formData.name);
      navigate('/');
    } catch (err) {
      setError('Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2 text-center" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Create Account
          </h1>
          <p className="text-white/60 text-center mb-8">Join Doozy today</p>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
              {error}
            </div>
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
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 flex items-center gap-2">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 flex items-center gap-2">
                <FaLock /> Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 flex items-center gap-2">
                <FaLock /> Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black font-semibold py-6 text-lg"
              size="lg"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center text-white/60">
            Already have an account?{' '}
            <Link to="/login" className="text-white hover:underline">
              Sign in
            </Link>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};
