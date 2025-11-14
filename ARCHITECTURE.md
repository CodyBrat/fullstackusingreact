# Doozy E-Commerce Architecture

## 🏗️ Architecture Overview

This document outlines the architecture, design patterns, and best practices used in the Doozy e-commerce platform.

## 📐 Design Patterns

### 1. Component Architecture

#### Layout Components (`src/components/layout/`)
Reusable layout components that wrap pages:
- **Navbar**: Global navigation with search, cart, user menu
- **Footer**: Site footer with links and social media
- **PageLayout**: Wrapper that includes background, cursor, navbar, footer

#### Feature Components (`src/components/`)
Specialized UI components:
- **ProductCard**: Reusable product display card
- **Rating**: Star rating display
- **Carousel**: Hero image carousel
- **BackgroundBeams**: Animated background effect
- **SmoothCursor**: Custom cursor with physics

### 2. State Management

#### Context API Pattern
Two main contexts for global state:

**AuthContext** (`src/context/AuthContext.jsx`)
```javascript
- user: Current user object
- orders: User's order history
- login(email, password): Authenticate user
- signup(email, password, name): Register new user
- logout(): Clear user session
- updateProfile(updates): Update user info
- addOrder(order): Add new order
- isAuthenticated: Boolean flag
```

**CartContext** (`src/context/CartContext.jsx`)
```javascript
- cart: Array of cart items
- wishlist: Array of wishlist items
- addToCart(product, quantity): Add item to cart
- removeFromCart(productId): Remove item
- updateQuantity(productId, quantity): Update item quantity
- clearCart(): Empty cart
- toggleWishlist(product): Add/remove from wishlist
- isInWishlist(productId): Check if in wishlist
- cartTotal: Total cart value
- cartCount: Total items in cart
```

### 3. Routing Structure

```
/ (Home)
├── /products (Product Listing)
│   └── /product/:id (Product Detail)
├── /cart (Shopping Cart)
│   └── /checkout (Checkout)
├── /wishlist (Saved Items)
├── /orders (Order History)
├── /profile (User Profile)
├── /login (Authentication)
└── /signup (Registration)
```

### 4. Data Flow

```
User Action → Component → Context → LocalStorage
                ↓
            Re-render with new state
```

Example: Adding to Cart
1. User clicks "Add to Cart" on ProductCard
2. ProductCard calls `addToCart()` from CartContext
3. CartContext updates cart state
4. Cart state saved to localStorage
5. All components using CartContext re-render
6. Cart badge updates with new count

## 🎨 Design System

### Color System
```javascript
// Background
bg-neutral-950    // Main background
bg-black/40       // Navbar/Footer

// Glass Effects
bg-white/5        // Card backgrounds
bg-white/10       // Hover states
backdrop-blur-xl  // Blur effect

// Borders
border-white/10   // Default borders
border-white/20   // Hover borders

// Text
text-white        // Primary text
text-white/80     // Secondary text
text-white/60     // Tertiary text
```

### Spacing System
```javascript
// Container
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

// Sections
py-12  // Page padding
py-20  // Section padding

// Cards
p-6    // Card padding
gap-8  // Grid gaps
```

### Typography
```javascript
// Headings
font-family: 'Bebas Neue'
text-4xl font-bold

// Body
font-family: 'Stack Sans Headline'
text-base

// Special Effects
font-family: 'Compressa VF' (variable font)
```

## 🔄 Component Patterns

### 1. Page Component Pattern
```jsx
import { PageLayout } from '../components/layout/PageLayout';

export const PageName = () => {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page content */}
      </div>
    </PageLayout>
  );
};
```

### 2. Protected Route Pattern
```jsx
export const ProtectedPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login?redirect=/protected');
    return null;
  }

  return <PageLayout>{/* Content */}</PageLayout>;
};
```

### 3. Form Handling Pattern
```jsx
const [formData, setFormData] = useState({
  field1: '',
  field2: '',
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  // Process form
};
```

### 4. Animation Pattern
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
  {/* Content */}
</motion.div>
```

## 📦 Data Structure

### Product Object
```javascript
{
  id: string,
  title: string,
  description: string,
  price: number,
  rating: number (1-5),
  peopleRated: string,
  category: string,
  stock: number,
  images: string[],
  features: string[]
}
```

### Cart Item Object
```javascript
{
  ...product,
  quantity: number
}
```

### Order Object
```javascript
{
  id: string,
  userId: string,
  date: ISO string,
  status: 'processing' | 'shipped' | 'delivered',
  items: CartItem[],
  total: number,
  shippingAddress: {
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zipCode: string
  }
}
```

### User Object
```javascript
{
  id: string,
  email: string,
  name: string,
  avatar: string (URL)
}
```

## 🔐 Security Considerations

### Current Implementation (Demo)
- Mock authentication (localStorage)
- Client-side validation only
- No real payment processing

### Production Recommendations
1. **Backend Integration**
   - JWT authentication
   - Secure API endpoints
   - Server-side validation

2. **Payment Processing**
   - Stripe/PayPal integration
   - PCI compliance
   - Secure checkout flow

3. **Data Protection**
   - HTTPS only
   - Input sanitization
   - XSS prevention
   - CSRF tokens

## 🚀 Performance Optimizations

### Current Optimizations
1. **Code Splitting**: React Router lazy loading ready
2. **Image Optimization**: External CDN for product images
3. **Animation Performance**: GPU-accelerated transforms
4. **State Persistence**: localStorage for offline capability

### Future Optimizations
1. **Lazy Loading**: Implement React.lazy() for routes
2. **Image Lazy Loading**: Intersection Observer for images
3. **Virtual Scrolling**: For large product lists
4. **Service Worker**: PWA capabilities
5. **CDN**: Static asset delivery

## 📱 Responsive Design Strategy

### Breakpoint System
```javascript
// Tailwind breakpoints
sm: 640px   // Small devices
md: 768px   // Tablets
lg: 1024px  // Laptops
xl: 1280px  // Desktops
2xl: 1536px // Large screens
```

### Mobile-First Approach
1. Base styles for mobile
2. Progressive enhancement for larger screens
3. Touch-friendly interactions
4. Optimized images for mobile

## 🧪 Testing Strategy

### Recommended Testing
1. **Unit Tests**: Component logic
2. **Integration Tests**: Context providers
3. **E2E Tests**: User flows (Cypress/Playwright)
4. **Visual Tests**: Screenshot comparison

### Key Test Cases
- Add to cart flow
- Checkout process
- Authentication flow
- Product filtering
- Responsive layouts

## 🔧 Development Workflow

### Adding a New Page
1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/layout/Navbar.jsx`
4. Add to `src/pages/index.js` exports

### Adding a New Feature
1. Create component in appropriate folder
2. Add to context if state needed
3. Update types/interfaces
4. Add to relevant pages
5. Test responsive behavior

### Styling Guidelines
1. Use Tailwind utility classes
2. Follow existing color/spacing system
3. Maintain glassmorphism aesthetic
4. Add hover/focus states
5. Test dark theme compatibility

## 📚 Dependencies

### Core
- react: UI framework
- react-dom: DOM rendering
- react-router-dom: Routing

### UI/Styling
- tailwindcss: Utility CSS
- @nextui-org/react: Component library
- framer-motion: Animations
- styled-components: CSS-in-JS

### Icons
- react-icons: Icon library
- @tabler/icons-react: Additional icons
- lucide-react: Modern icons

### Utilities
- clsx: Conditional classes
- tailwind-merge: Class merging
- gsap: Advanced animations

## 🎯 Future Enhancements

### Planned Features
1. **Search**: Full-text product search
2. **Filters**: Advanced filtering options
3. **Reviews**: User product reviews
4. **Recommendations**: AI-powered suggestions
5. **Notifications**: Order status updates
6. **Admin Panel**: Product management
7. **Analytics**: User behavior tracking
8. **Multi-language**: i18n support
9. **Dark/Light Mode**: Theme toggle
10. **Social Sharing**: Share products

### Technical Improvements
1. Backend API integration
2. Database implementation
3. Real authentication
4. Payment gateway
5. Email notifications
6. Image upload
7. Inventory management
8. Order tracking
9. Customer support chat
10. SEO optimization

## 📖 Code Style Guide

### Naming Conventions
- Components: PascalCase (`ProductCard.jsx`)
- Functions: camelCase (`addToCart`)
- Constants: UPPER_SNAKE_CASE (`BASE_URL`)
- CSS Classes: kebab-case (via Tailwind)

### File Organization
- One component per file
- Co-locate related files
- Index files for exports
- Separate logic from UI

### Best Practices
- Use functional components
- Prefer hooks over classes
- Keep components small
- Extract reusable logic
- Comment complex code
- Use TypeScript for utilities

---

This architecture provides a solid foundation for a scalable, maintainable e-commerce platform.
