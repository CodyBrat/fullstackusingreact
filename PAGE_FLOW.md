# Page Flow & User Journey

Visual guide to the user experience and page navigation in Doozy e-commerce platform.

## 🗺️ Site Map

```
┌─────────────────────────────────────────────────────────────┐
│                         NAVBAR                               │
│  [Logo] [Products] [Sneakers] [Running] [Search] [❤️] [🛒] [👤] │
└─────────────────────────────────────────────────────────────┘

                              │
                              ▼
                              
┌─────────────────────────────────────────────────────────────┐
│                         HOME (/)                             │
│  • Hero with interactive text                               │
│  • CTA buttons (Shop Now, Explore)                          │
│  • Product carousel                                          │
│  • Category grid (6 categories)                             │
│  • Featured products (6 items)                              │
│  • Trust indicators                                          │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                ▼             ▼             ▼
                
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  PRODUCTS        │  │  CATEGORY        │  │  SEARCH          │
│  (/products)     │  │  (?category=x)   │  │  (?search=term)  │
│                  │  │                  │  │                  │
│  • Filter sidebar│  │  • Filtered list │  │  • Search results│
│  • Sort options  │  │  • Same layout   │  │  • Same layout   │
│  • Product grid  │  │  • Category name │  │  • Result count  │
│  • Pagination    │  │                  │  │                  │
└──────────────────┘  └──────────────────┘  └──────────────────┘
        │
        │ Click product
        ▼
┌─────────────────────────────────────────────────────────────┐
│                   PRODUCT DETAIL                             │
│                   (/product/:id)                             │
│                                                              │
│  • Large product image                                       │
│  • Product information                                       │
│  • Price & rating                                            │
│  • Quantity selector                                         │
│  • [Add to Cart] [❤️ Wishlist]                              │
│  • Features list                                             │
│  • Shipping info                                             │
└─────────────────────────────────────────────────────────────┘
        │
        │ Add to cart
        ▼
┌─────────────────────────────────────────────────────────────┐
│                      CART (/cart)                            │
│                                                              │
│  ┌────────────────────────┐  ┌──────────────────┐          │
│  │  Cart Items            │  │  Order Summary   │          │
│  │  • Product 1           │  │  • Subtotal      │          │
│  │    [- 2 +] [🗑️]       │  │  • Shipping      │          │
│  │  • Product 2           │  │  • Tax           │          │
│  │    [- 1 +] [🗑️]       │  │  • Total         │          │
│  │                        │  │  [Checkout]      │          │
│  └────────────────────────┘  └──────────────────┘          │
└─────────────────────────────────────────────────────────────┘
        │
        │ Proceed to checkout
        ▼
        
        ┌─ Not logged in? ─┐
        │                   │
        ▼                   ▼
┌──────────────┐    ┌──────────────┐
│   LOGIN      │    │   SIGNUP     │
│  (/login)    │◄───│  (/signup)   │
│              │    │              │
│  • Email     │    │  • Name      │
│  • Password  │    │  • Email     │
│  [Sign In]   │    │  • Password  │
│              │    │  • Confirm   │
│  [Sign Up]───┼───►│  [Sign Up]   │
└──────────────┘    └──────────────┘
        │
        │ Authenticated
        ▼
┌─────────────────────────────────────────────────────────────┐
│                   CHECKOUT (/checkout)                       │
│                                                              │
│  ┌────────────────────────┐  ┌──────────────────┐          │
│  │  Forms                 │  │  Order Summary   │          │
│  │  • Contact info        │  │  • Items list    │          │
│  │  • Shipping address    │  │  • Totals        │          │
│  │  • Payment info        │  │  [Place Order]   │          │
│  └────────────────────────┘  └──────────────────┘          │
└─────────────────────────────────────────────────────────────┘
        │
        │ Place order
        ▼
┌─────────────────────────────────────────────────────────────┐
│                    ORDERS (/orders)                          │
│                                                              │
│  ✅ Order placed successfully!                              │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Order #12345                    [Processing]       │   │
│  │  Date: Nov 14, 2024                                 │   │
│  │  • Product 1 x 2                        $99.98     │   │
│  │  • Product 2 x 1                        $49.99     │   │
│  │  Total: $159.97                                     │   │
│  │  Shipping: 123 Main St, City, State                │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   WISHLIST (/wishlist)                       │
│                                                              │
│  ❤️ My Wishlist (5 items)                                   │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│  │ Product  │  │ Product  │  │ Product  │                 │
│  │   [❤️]   │  │   [❤️]   │  │   [❤️]   │                 │
│  │  [Cart]  │  │  [Cart]  │  │  [Cart]  │                 │
│  └──────────┘  └──────────┘  └──────────┘                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   PROFILE (/profile)                         │
│                                                              │
│  ┌──────────┐  ┌────────────────────────────────────┐      │
│  │  Avatar  │  │  Account Information               │      │
│  │  [Photo] │  │  • Name: John Doe                  │      │
│  │          │  │  • Email: john@example.com         │      │
│  │ [Profile]│  │  [Save Changes]                    │      │
│  │ [Orders] │  │                                     │      │
│  │[Wishlist]│  │  Password                          │      │
│  │ [Logout] │  │  [Change Password]                 │      │
│  └──────────┘  └────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                         FOOTER                               │
│  [Brand] [Shop] [Support] [Company] [Social]               │
│  © 2024 Doozy. All rights reserved.                         │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 User Journeys

### Journey 1: Guest Browsing & Purchase

```
1. Land on Homepage
   ↓
2. Browse featured products
   ↓
3. Click "Shop Now" → Products page
   ↓
4. Filter by category (e.g., "Running")
   ↓
5. Click product → Product Detail
   ↓
6. Click "Add to Cart"
   ↓
7. View cart badge update
   ↓
8. Continue shopping or go to cart
   ↓
9. Click cart icon → Cart page
   ↓
10. Review items, adjust quantities
    ↓
11. Click "Proceed to Checkout"
    ↓
12. Redirected to Login (not authenticated)
    ↓
13. Click "Sign up" → Signup page
    ↓
14. Fill form, create account
    ↓
15. Auto-redirected to Checkout
    ↓
16. Fill shipping & payment info
    ↓
17. Click "Place Order"
    ↓
18. Redirected to Orders with success message
    ↓
19. View order details
```

### Journey 2: Returning User

```
1. Land on Homepage
   ↓
2. Click user icon → Login
   ↓
3. Enter credentials, sign in
   ↓
4. Redirected to Homepage (authenticated)
   ↓
5. Browse products
   ↓
6. Click heart icon → Add to Wishlist
   ↓
7. Continue browsing
   ↓
8. Click wishlist icon → Wishlist page
   ↓
9. Review saved items
   ↓
10. Click "Add to Cart" on wishlist item
    ↓
11. Go to cart → Checkout (no login needed)
    ↓
12. Complete purchase
    ↓
13. Click avatar → Profile
    ↓
14. Click "Orders" → View order history
```

### Journey 3: Product Discovery

```
1. Land on Homepage
   ↓
2. Scroll to category grid
   ↓
3. Click "Sneakers" category
   ↓
4. Filtered products page
   ↓
5. Adjust price range slider
   ↓
6. Change sort to "Price: Low to High"
   ↓
7. Browse filtered results
   ↓
8. Use search bar: "running"
   ↓
9. View search results
   ↓
10. Click product of interest
    ↓
11. Read details, features
    ↓
12. Add to wishlist for later
```

### Journey 4: Order Management

```
1. Login to account
   ↓
2. Click avatar → Orders
   ↓
3. View order history
   ↓
4. Check order status
   ↓
5. Review shipping address
   ↓
6. Click avatar → Profile
   ↓
7. Update profile information
   ↓
8. Save changes
   ↓
9. Click "Wishlist" in sidebar
   ↓
10. Manage saved items
```

## 🔄 State Flow

### Cart State Flow
```
Product Detail → Add to Cart
                      ↓
                CartContext updates
                      ↓
                localStorage saves
                      ↓
                Cart badge updates
                      ↓
                Cart page reflects changes
```

### Auth State Flow
```
Login/Signup → Submit form
                    ↓
              AuthContext updates
                    ↓
              localStorage saves
                    ↓
              Navbar shows avatar
                    ↓
              Protected routes accessible
```

### Wishlist State Flow
```
Product Card → Click heart
                    ↓
              CartContext updates
                    ↓
              localStorage saves
                    ↓
              Heart icon fills
                    ↓
              Wishlist page updates
```

## 📱 Responsive Behavior

### Mobile (< 768px)
```
┌─────────────────┐
│  [☰] Logo [🛒]  │  ← Hamburger menu
├─────────────────┤
│                 │
│  Hero Section   │
│  (Full width)   │
│                 │
├─────────────────┤
│  Carousel       │
│  (Swipeable)    │
├─────────────────┤
│  Categories     │
│  (2 columns)    │
├─────────────────┤
│  Products       │
│  (1 column)     │
└─────────────────┘
```

### Tablet (768px - 1024px)
```
┌───────────────────────────┐
│  Logo [Links] [Icons]     │
├───────────────────────────┤
│                           │
│    Hero Section           │
│    (Centered)             │
│                           │
├───────────────────────────┤
│    Carousel               │
├───────────────────────────┤
│  Categories (3 columns)   │
├───────────────────────────┤
│  Products (2 columns)     │
└───────────────────────────┘
```

### Desktop (> 1024px)
```
┌─────────────────────────────────────────┐
│  Logo [Nav Links] [Search] [Icons]      │
├─────────────────────────────────────────┤
│                                         │
│         Hero Section (Wide)             │
│                                         │
├─────────────────────────────────────────┤
│            Carousel (Full)              │
├─────────────────────────────────────────┤
│      Categories (6 columns)             │
├─────────────────────────────────────────┤
│      Products (3 columns)               │
└─────────────────────────────────────────┘
```

## 🎨 Interaction Patterns

### Hover States
- **Product Cards**: Scale up, shadow increase
- **Buttons**: Background opacity change
- **Links**: Color transition
- **Icons**: Scale and color change

### Click Actions
- **Product Card**: Navigate to detail
- **Add to Cart**: Add item, show feedback
- **Wishlist**: Toggle state, update icon
- **Quantity**: Update cart, recalculate

### Loading States
- **Products**: Show skeleton cards
- **Forms**: Disable button, show "Processing..."
- **Navigation**: Instant (no loading)

### Success States
- **Add to Cart**: Button text changes briefly
- **Order Placed**: Success banner at top
- **Profile Updated**: Success message

### Empty States
- **Cart**: "Your cart is empty" + CTA
- **Wishlist**: "No saved items" + CTA
- **Orders**: "No orders yet" + CTA

## 🔐 Protected Routes

### Public Routes (No Auth Required)
- `/` - Home
- `/products` - Product listing
- `/product/:id` - Product detail
- `/login` - Login page
- `/signup` - Signup page

### Protected Routes (Auth Required)
- `/checkout` - Checkout process
- `/orders` - Order history
- `/profile` - User profile

### Semi-Protected (Optional Auth)
- `/cart` - Cart (works without auth)
- `/wishlist` - Wishlist (works without auth)

## 🎯 Conversion Funnel

```
Homepage (100%)
    ↓
Products Page (70%)
    ↓
Product Detail (50%)
    ↓
Add to Cart (30%)
    ↓
View Cart (25%)
    ↓
Checkout (20%)
    ↓
Complete Order (15%)
```

### Optimization Points
1. **Homepage**: Clear CTAs, featured products
2. **Products**: Easy filtering, good images
3. **Detail**: Clear pricing, easy add to cart
4. **Cart**: Simple checkout button
5. **Checkout**: Minimal form fields
6. **Success**: Order confirmation, next steps

---

This page flow guide helps understand the complete user experience and navigation structure of the Doozy e-commerce platform.
