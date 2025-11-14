# Doozy - Premium E-Commerce Platform

A modern, full-featured SaaS-style e-commerce platform built with React, featuring a stunning dark theme with glassmorphism effects and smooth animations.

## 🚀 Features

### Core Functionality
- **Product Catalog** - Browse products with advanced filtering and sorting
- **Product Details** - Detailed product pages with image galleries
- **Shopping Cart** - Full cart management with quantity controls
- **Wishlist** - Save favorite products for later
- **Checkout** - Secure checkout process with form validation
- **Order Management** - View order history and track status
- **User Authentication** - Login/Signup with profile management
- **Responsive Design** - Fully responsive across all devices

### Design System
- **Dark Theme** - Premium dark aesthetic with glassmorphism
- **Smooth Animations** - Framer Motion powered transitions
- **Custom Cursor** - Interactive cursor with physics-based movement
- **Background Effects** - Animated gradient beams
- **Typography** - Bebas Neue & Stack Sans Headline fonts
- **UI Components** - NextUI component library

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Main navigation with search
│   │   ├── Footer.jsx          # Site footer
│   │   └── PageLayout.jsx      # Shared layout wrapper
│   ├── productlists/
│   │   ├── ProductCard.jsx     # Product card component
│   │   ├── Rating.jsx          # Star rating display
│   │   └── Loading.jsx         # Skeleton loader
│   ├── BackgroundBeamsDemo.jsx # Animated background
│   ├── Carousel.jsx            # Hero carousel
│   ├── Textpressure.jsx        # Interactive hero text
│   ├── cursor.jsx              # Custom cursor
│   └── navbar-menu.jsx         # Dropdown menu components
├── pages/
│   ├── Home.jsx                # Landing page
│   ├── Products.jsx            # Product listing with filters
│   ├── ProductDetail.jsx       # Individual product page
│   ├── Cart.jsx                # Shopping cart
│   ├── Checkout.jsx            # Checkout process
│   ├── Wishlist.jsx            # Saved products
│   ├── Orders.jsx              # Order history
│   ├── Profile.jsx             # User profile
│   ├── Login.jsx               # Authentication
│   └── Signup.jsx              # Registration
├── context/
│   ├── AuthContext.jsx         # Authentication state
│   └── CartContext.jsx         # Cart & wishlist state
├── data/
│   └── products.js             # Product data & categories
├── lib/
│   └── utils.ts                # Utility functions
├── App.jsx                     # Main app with routing
└── main.jsx                    # App entry point
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **React Router DOM v7** - Routing
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **NextUI** - UI components
- **GSAP** - Advanced animations
- **LocalStorage** - State persistence

## 🎨 Design Features

### Color Palette
- Background: `neutral-950`, `black`
- Accents: Cyan (`#18CCFC`), Purple (`#6344F5`), Pink (`#AE48FF`)
- Glass: `white/5` with backdrop blur
- Text: White with various opacity levels

### Visual Effects
- Glassmorphism cards
- Backdrop blur effects
- Gradient animations
- Drop shadows with glow
- Scale transforms on hover
- Spring physics animations

## 🚦 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup

The app uses localStorage for data persistence. No backend setup required for demo purposes.

## 📱 Pages Overview

### Home (`/`)
- Hero section with interactive text
- Featured product carousel
- Category grid
- Featured products showcase
- Trust indicators (shipping, returns, security)

### Products (`/products`)
- Product grid with filtering
- Category filter sidebar
- Price range slider
- Sort options (price, rating)
- Search functionality
- Responsive layout

### Product Detail (`/product/:id`)
- Large product image
- Product information
- Quantity selector
- Add to cart/wishlist
- Key features list
- Shipping information

### Cart (`/cart`)
- Cart items with images
- Quantity controls
- Remove items
- Order summary
- Proceed to checkout

### Checkout (`/checkout`)
- Contact information form
- Shipping address form
- Payment information
- Order summary
- Secure checkout badge

### Wishlist (`/wishlist`)
- Saved products grid
- Quick add to cart
- Remove from wishlist

### Orders (`/orders`)
- Order history
- Order status tracking
- Order details
- Shipping information

### Profile (`/profile`)
- User information
- Edit profile
- Avatar display
- Quick links to orders/wishlist

### Authentication (`/login`, `/signup`)
- Login form
- Registration form
- Form validation
- Redirect handling

## 🔐 Authentication

Mock authentication system using localStorage:
- Email/password login
- User registration
- Profile management
- Persistent sessions

## 🛒 Cart & Wishlist

State management with Context API:
- Add/remove items
- Update quantities
- Toggle wishlist
- Persistent storage
- Cart count badge

## 📦 Product Data

Products include:
- ID, title, description
- Price, rating, reviews
- Category, stock level
- Images, features
- 12 sample products across 6 categories

## 🎯 Key Components

### Navbar
- Fixed position with blur
- Search functionality
- Cart count badge
- User dropdown menu
- Mobile responsive

### ProductCard
- Glassmorphic design
- Hover animations
- Wishlist toggle
- Quick add to cart
- Click to view details

### PageLayout
- Consistent wrapper
- Background effects
- Navbar & footer
- Custom cursor

## 🔄 State Management

### AuthContext
- User authentication
- Profile updates
- Order management
- Login/logout

### CartContext
- Cart operations
- Wishlist management
- Quantity updates
- Total calculations

## 📱 Responsive Design

Breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

Mobile features:
- Hamburger menu
- Touch-friendly buttons
- Optimized layouts
- Collapsible filters

## 🎨 Customization

### Colors
Update in Tailwind config or component styles:
- Primary: White
- Accent: Cyan/Purple gradient
- Background: Dark neutral

### Fonts
Defined in `App.css`:
- Headings: Bebas Neue
- Body: Stack Sans Headline
- Special: Compressa VF

### Products
Edit `src/data/products.js`:
- Add/remove products
- Update categories
- Modify pricing

## 🚀 Deployment

Build the project:
```bash
npm run build
```

Deploy the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, email support@doozy.com or open an issue on GitHub.

---

Built with ❤️ using React + Vite
