import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { useAuth } from '../context/AuthContext';
import { Button } from '@nextui-org/react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
      const redirect = searchParams.get('redirect') || '/';
      navigate(redirect);
    } catch (err) {
      setError('Invalid email or password');
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
            Welcome Back
          </h1>
          <p className="text-white/60 text-center mb-8">Sign in to your account</p>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-white/80">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-white/80 hover:text-white">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black font-semibold py-6 text-lg"
              size="lg"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 text-center text-white/60">
            Don't have an account?{' '}
            <Link to="/signup" className="text-white hover:underline">
              Sign up
            </Link>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};
