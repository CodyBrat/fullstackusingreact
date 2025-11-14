# Component Library Reference

Complete reference for all components in the Doozy e-commerce platform.

## 🎨 Layout Components

### PageLayout
Wrapper component that provides consistent layout across all pages.

**Location**: `src/components/layout/PageLayout.jsx`

**Props**:
- `children`: React nodes to render
- `showBeams`: Boolean (default: true) - Show animated background

**Usage**:
```jsx
import { PageLayout } from '../components/layout/PageLayout';

<PageLayout showBeams={true}>
  <div>Your page content</div>
</PageLayout>
```

**Features**:
- Includes SmoothCursor
- Includes BackgroundBeams (optional)
- Includes Navbar
- Includes Footer
- Adds padding-top for fixed navbar

---

### Navbar
Main navigation component with search, cart, and user menu.

**Location**: `src/components/layout/Navbar.jsx`

**Features**:
- Fixed position with backdrop blur
- Search bar with form submission
- Cart badge with item count
- User dropdown menu
- Mobile responsive hamburger menu
- Category links

**State**:
- Uses `useCart()` for cart count
- Uses `useAuth()` for user info

---

### Footer
Site footer with links and information.

**Location**: `src/components/layout/Footer.jsx`

**Sections**:
- Brand information
- Shop links
- Support links
- Company links
- Social media icons
- Copyright notice

---

## 🛍️ Product Components

### ProductCard
Reusable product card with glassmorphic design.

**Location**: `src/components/productlists/ProductCard.jsx`

**Props**:
- `product`: Product object
- `index`: Number for image mapping

**Features**:
- Click to view product details
- Wishlist toggle button
- Add to cart button
- Star rating display
- Hover animations
- Responsive design

**Usage**:
```jsx
import { ProductCard } from '../components/productlists/ProductCard';

<ProductCard 
  product={productObject} 
  index={0} 
/>
```

---

### Rating
Star rating display component.

**Location**: `src/components/productlists/Rating.jsx`

**Props**:
- `rating`: Number (1-5)
- `peoplerated`: String or number

**Features**:
- Visual star display
- Hover effects
- Read-only
- Shows review count

**Usage**:
```jsx
import { Rating } from '../components/productlists/Rating';

<Rating rating={4} peoplerated="523" />
```

---

### LoadingCard
Skeleton loader for product cards.

**Location**: `src/components/productlists/Loading.jsx`

**Features**:
- Matches ProductCard dimensions
- Animated skeleton effect
- Uses NextUI Skeleton component

**Usage**:
```jsx
import { LoadingCard } from '../components/productlists/Loading';

{loading && <LoadingCard />}
```

---

## ✨ Special Effect Components

### BackgroundBeamsDemo
Animated gradient beam background effect.

**Location**: `src/components/BackgroundBeamsDemo.jsx`

**Features**:
- Fixed full-screen background
- Animated SVG paths
- Gradient effects (cyan to purple)
- Dark neutral background

**Usage**:
```jsx
import { BackgroundBeamsDemo } from '../components/BackgroundBeamsDemo';

<BackgroundBeamsDemo />
```

---

### BackgroundBeams
Core animated beams component.

**Location**: `src/components/background-beans.jsx`

**Props**:
- `className`: Additional CSS classes

**Features**:
- Multiple animated paths
- Gradient animations
- Radial gradient overlay

---

### SmoothCursor
Custom animated cursor with physics.

**Location**: `src/components/cursor.jsx`

**Props**:
- `cursor`: Custom cursor SVG (optional)
- `springConfig`: Spring physics config (optional)

**Features**:
- Follows mouse with spring physics
- Rotates based on movement direction
- Scales on movement
- Smooth animations

**Usage**:
```jsx
import { SmoothCursor } from '../components/cursor';

<SmoothCursor />
```

---

### TextPressure
Interactive text with variable font effects.

**Location**: `src/components/Textpressure.jsx`

**Props**:
- `text`: String to display
- `fontFamily`: Font family name
- `fontUrl`: Font file URL
- `width`: Boolean - Enable width variation
- `weight`: Boolean - Enable weight variation
- `italic`: Boolean - Enable italic variation
- `alpha`: Boolean - Enable opacity variation
- `flex`: Boolean - Flex layout
- `stroke`: Boolean - Text stroke effect
- `scale`: Boolean - Scale to fit
- `textColor`: Hex color
- `strokeColor`: Hex color
- `strokeWidth`: Number
- `className`: Additional classes
- `minFontSize`: Minimum font size

**Features**:
- Variable font properties
- Mouse proximity effects
- Characters respond to cursor
- Smooth animations

**Usage**:
```jsx
import TextPressure from '../components/Textpressure';

<TextPressure
  text="Doozy"
  width={true}
  weight={true}
  italic={true}
  textColor="#ffffff"
  minFontSize={36}
/>
```

---

### Carousel
Hero product carousel with depth effect.

**Location**: `src/components/Carousel.jsx`

**Features**:
- Auto-rotating slides (5s interval)
- Manual navigation arrows
- Depth effect with layered images
- Smooth transitions
- Responsive design

**Data Structure**:
```javascript
const slides = [
  {
    id: number,
    title: string,
    topic: string,
    desc: string,
    image: string (URL),
  }
];
```

**Usage**:
```jsx
import Carousel from '../components/Carousel';

<Carousel />
```

---

### MacbookScrollDemo
3D MacBook mockup with scroll animations.

**Location**: `src/components/MacbookScrolldemo.jsx`

**Features**:
- Scroll-based parallax
- 3D perspective transforms
- Detailed keyboard/trackpad
- Responsive scaling

---

## 🎯 Navigation Components

### Menu
Dropdown menu container.

**Location**: `src/components/navbar-menu.jsx`

**Props**:
- `setActive`: Function to set active menu
- `children`: MenuItem components

**Features**:
- Hover activation
- Smooth animations
- Glassmorphic design

---

### MenuItem
Individual menu item with dropdown.

**Props**:
- `setActive`: Function to set active
- `active`: Current active item
- `item`: Menu item name
- `children`: Dropdown content

**Usage**:
```jsx
<Menu setActive={setActive}>
  <MenuItem setActive={setActive} active={active} item="Products">
    <div>Dropdown content</div>
  </MenuItem>
</Menu>
```

---

### ProductItem
Product link in dropdown menu.

**Props**:
- `title`: Product title
- `description`: Product description
- `href`: Link URL
- `src`: Image URL

---

### HoveredLink
Styled link for menu items.

**Props**:
- `children`: Link text
- `...rest`: Additional props

---

## 📄 Page Components

### Home
Landing page with hero, carousel, categories, and featured products.

**Location**: `src/pages/Home.jsx`

**Sections**:
1. Hero with TextPressure
2. CTA buttons
3. Product carousel
4. Category grid
5. Featured products
6. Trust indicators

---

### Products
Product listing page with filters and sorting.

**Location**: `src/pages/Products.jsx`

**Features**:
- Category filter sidebar
- Price range slider
- Sort dropdown
- Search integration
- Responsive grid
- Mobile filter toggle

**URL Params**:
- `?category=sneakers`: Filter by category
- `?search=term`: Search products

---

### ProductDetail
Individual product page with full details.

**Location**: `src/pages/ProductDetail.jsx`

**Features**:
- Large product image
- Product information
- Quantity selector
- Add to cart/wishlist
- Key features list
- Breadcrumb navigation

**Route**: `/product/:id`

---

### Cart
Shopping cart with item management.

**Location**: `src/pages/Cart.jsx`

**Features**:
- Cart items list
- Quantity controls
- Remove items
- Order summary
- Proceed to checkout
- Empty state

---

### Checkout
Checkout form with payment.

**Location**: `src/pages/Checkout.jsx`

**Features**:
- Contact information form
- Shipping address form
- Payment information form
- Order summary
- Form validation
- Protected route (requires auth)

---

### Wishlist
Saved products page.

**Location**: `src/pages/Wishlist.jsx`

**Features**:
- Product grid
- Quick add to cart
- Remove from wishlist
- Empty state

---

### Orders
Order history page.

**Location**: `src/pages/Orders.jsx`

**Features**:
- Order list
- Order details
- Status badges
- Shipping information
- Success message
- Protected route

---

### Profile
User profile management.

**Location**: `src/pages/Profile.jsx`

**Features**:
- Profile sidebar with avatar
- Edit profile form
- Quick links
- Password change
- Protected route

---

### Login
User authentication page.

**Location**: `src/pages/Login.jsx`

**Features**:
- Email/password form
- Remember me checkbox
- Forgot password link
- Sign up link
- Redirect handling

---

### Signup
User registration page.

**Location**: `src/pages/Signup.jsx`

**Features**:
- Registration form
- Password confirmation
- Form validation
- Auto-login after signup

---

## 🎨 Styling Patterns

### Glassmorphic Card
```jsx
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
  {/* Content */}
</div>
```

### Hover Effect
```jsx
<div className="transition-all duration-300 hover:bg-white/10 hover:scale-105">
  {/* Content */}
</div>
```

### Button Primary
```jsx
<button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
  Button Text
</button>
```

### Button Secondary
```jsx
<button className="px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors">
  Button Text
</button>
```

### Input Field
```jsx
<input
  type="text"
  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
  placeholder="Enter text..."
/>
```

### Section Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  {/* Content */}
</div>
```

---

## 🔧 Utility Functions

### cn()
Combines class names with tailwind-merge.

**Location**: `src/lib/utils.ts`

**Usage**:
```jsx
import { cn } from '../lib/utils';

<div className={cn(
  "base-class",
  condition && "conditional-class",
  "another-class"
)}>
```

---

## 📦 Context Hooks

### useAuth()
Access authentication context.

**Returns**:
```javascript
{
  user: User | null,
  orders: Order[],
  login: (email, password) => Promise,
  signup: (email, password, name) => Promise,
  logout: () => void,
  updateProfile: (updates) => void,
  addOrder: (order) => Order,
  isAuthenticated: boolean
}
```

### useCart()
Access cart context.

**Returns**:
```javascript
{
  cart: CartItem[],
  wishlist: Product[],
  addToCart: (product, quantity?) => void,
  removeFromCart: (productId) => void,
  updateQuantity: (productId, quantity) => void,
  clearCart: () => void,
  toggleWishlist: (product) => void,
  isInWishlist: (productId) => boolean,
  cartTotal: number,
  cartCount: number
}
```

---

## 🎯 Animation Patterns

### Fade In
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

### Slide Up
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}
>
```

### Stagger Children
```jsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
))}
```

### Scale on Hover
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

---

This component library provides all the building blocks for the Doozy e-commerce platform. Mix and match components to create new features while maintaining design consistency.
