import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { ProductCard } from '../components/productlists/ProductCard';
import { products, categories } from '../data/products';
import { FaFilter, FaTimes } from 'react-icons/fa';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let result = [...products];
    const searchQuery = searchParams.get('search');
    const categoryParam = searchParams.get('category');

    // Filter by category
    if (categoryParam && categoryParam !== 'all') {
      result = result.filter(p => p.category === categoryParam);
      setSelectedCategory(categoryParam);
    } else if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [searchParams, selectedCategory, sortBy, priceRange]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            All Products
          </h1>
          <p className="text-white/60">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full mb-4 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <FaFilter /> Filters
              </span>
              {showFilters ? <FaTimes /> : null}
            </button>

            <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6`}>
              {/* Categories */}
              <div>
                <h3 className="text-white font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-white/20 text-white'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-white/20 text-white'
                          : 'text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-white font-semibold mb-3">Price Range</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-white/60 text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-white font-semibold mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/40"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} index={parseInt(product.images[0]) - 1} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-white/60 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
