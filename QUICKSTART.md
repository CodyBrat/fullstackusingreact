# Quick Start Guide

Get your Doozy e-commerce platform up and running in minutes!

## 🚀 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 🎯 First Steps

### 1. Browse Products
- Visit the homepage at `/`
- Click "Shop Now" or navigate to `/products`
- Browse the product catalog

### 2. Add to Cart
- Click on any product card to view details
- Click "Add to Cart" button
- View cart badge update in navbar

### 3. Create Account
- Click the user icon in navbar
- Select "Sign up"
- Fill in your details (any email/password works for demo)

### 4. Complete Purchase
- Go to cart (`/cart`)
- Click "Proceed to Checkout"
- Fill in shipping and payment info (demo data)
- Place order

### 5. View Orders
- Click your avatar in navbar
- Select "Orders"
- See your order history

## 📱 Key Features to Try

### Product Browsing
- **Filter by Category**: Use sidebar filters
- **Search**: Use search bar in navbar
- **Sort**: Change sort order (price, rating)
- **Price Range**: Adjust price slider

### Shopping Experience
- **Add to Cart**: Quick add from product cards
- **Wishlist**: Click heart icon to save items
- **Quantity**: Adjust quantities in cart
- **Remove Items**: Delete unwanted items

### User Features
- **Profile**: Update your information
- **Orders**: Track order status
- **Wishlist**: Manage saved products
- **Logout**: Sign out anytime

## 🎨 Customization

### Change Products
Edit `src/data/products.js`:
```javascript
export const products = [
  {
    id: '1',
    title: 'Your Product',
    description: 'Product description',
    price: 99.99,
    rating: 5,
    peopleRated: '100',
    category: 'sneakers',
    stock: 50,
    images: ['1'],
    features: ['Feature 1', 'Feature 2'],
  },
  // Add more products...
];
```

### Add Categories
Edit `src/data/products.js`:
```javascript
export const categories = [
  { id: 'new-category', name: 'New Category', icon: '🎯' },
  // Add more categories...
];
```

### Modify Colors
Edit component styles or Tailwind config:
```jsx
// Change card background
className="bg-white/5"  // Change opacity

// Change accent colors
className="text-cyan-400"  // Change color
```

## 🔧 Common Tasks

### Add a New Page
1. Create file in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```
3. Add link in navbar if needed

### Add to Navigation
Edit `src/components/layout/Navbar.jsx`:
```jsx
<Link to="/new-page" className="text-white/80 hover:text-white">
  New Page
</Link>
```

### Modify Homepage
Edit `src/pages/Home.jsx`:
- Change hero text
- Update featured products
- Add new sections

## 📦 Project Structure

```
src/
├── pages/          # All page components
├── components/     # Reusable components
├── context/        # State management
├── data/           # Product data
└── lib/            # Utilities
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for TypeScript errors
npm run lint

# Clean build
rm -rf dist
npm run build
```

## 📚 Learn More

- [Full Documentation](./README.md)
- [Architecture Guide](./ARCHITECTURE.md)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

## 🎓 Tutorial: Adding a Feature

Let's add a "Recently Viewed" feature:

### Step 1: Add Context
Create `src/context/RecentlyViewedContext.jsx`:
```jsx
import React, { createContext, useContext, useState } from 'react';

const RecentlyViewedContext = createContext();

export const useRecentlyViewed = () => useContext(RecentlyViewedContext);

export const RecentlyViewedProvider = ({ children }) => {
  const [viewed, setViewed] = useState([]);

  const addToViewed = (product) => {
    setViewed(prev => {
      const filtered = prev.filter(p => p.id !== product.id);
      return [product, ...filtered].slice(0, 5);
    });
  };

  return (
    <RecentlyViewedContext.Provider value={{ viewed, addToViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};
```

### Step 2: Wrap App
Update `src/App.jsx`:
```jsx
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';

<RecentlyViewedProvider>
  {/* existing providers */}
</RecentlyViewedProvider>
```

### Step 3: Use in Product Detail
Update `src/pages/ProductDetail.jsx`:
```jsx
import { useRecentlyViewed } from '../context/RecentlyViewedContext';

const { addToViewed } = useRecentlyViewed();

useEffect(() => {
  if (product) {
    addToViewed(product);
  }
}, [product]);
```

### Step 4: Display on Homepage
Update `src/pages/Home.jsx`:
```jsx
const { viewed } = useRecentlyViewed();

{viewed.length > 0 && (
  <div className="max-w-7xl mx-auto px-4 py-20">
    <h2 className="text-4xl font-bold text-white mb-8">
      Recently Viewed
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {viewed.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  </div>
)}
```

Done! You've added a new feature following the project patterns.

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy dist folder via Netlify UI
```

### GitHub Pages
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/doozy",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 💡 Tips

1. **Use the search**: Find products quickly
2. **Check responsive**: Test on mobile
3. **Explore animations**: Hover over elements
4. **Try the cursor**: Move mouse around
5. **Test checkout**: Complete full flow

## 🎉 You're Ready!

Start building your e-commerce empire with Doozy!

Need help? Check the [full documentation](./README.md) or [architecture guide](./ARCHITECTURE.md).
