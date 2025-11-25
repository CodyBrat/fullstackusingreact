import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import TextPressure from '../components/Textpressure';
import Carousel from '../components/Carousel';
import { ProductCard } from '../components/productlists/ProductCard';
import { products, categories } from '../data/products';
import { FaShieldAlt, FaTruck, FaUndo, FaHeadset } from 'react-icons/fa';

export const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen">
        <div className="w-full max-w-[1200px] px-4">
          <TextPressure
            text="Doozy"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center text-white/80 text-xl mt-8 max-w-2xl mx-auto"
          >
            Premium t-shirts designed for comfort, style, and self-expression
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-4 mt-8"
          >
            <Link
              to="/products"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              to="/products?category=tshirts"
              className="px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors"
            >
              Explore Collections
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full h-[90vh] flex justify-center items-center px-4">
        <div className="w-full max-w-[95vw]">
          <Carousel />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Shop by Category
          </h2>
          <p className="text-white/60">Find the perfect tee for your style</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/products?category=${category.id}`}
                className="group block p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-3 text-center group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-white text-center font-semibold">{category.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Featured Products
          </h2>
          <p className="text-white/60">Discover our most popular t-shirts</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FaTruck, title: 'Free Shipping', desc: 'On orders over $100' },
            { icon: FaUndo, title: 'Easy Returns', desc: '30-day return policy' },
            { icon: FaShieldAlt, title: 'Secure Payment', desc: '100% secure checkout' },
            { icon: FaHeadset, title: '24/7 Support', desc: 'Dedicated support team' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
            >
              <item.icon className="text-4xl text-white mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
