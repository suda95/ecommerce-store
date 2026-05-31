# React E-Commerce Store

A responsive e-commerce web application built with React, Context API, React Router, and Stripe integration.

This project allows users to browse products, search and filter items, add products to the cart, and complete checkout through Stripe test mode.

---

## Features

- Product listing with responsive product cards
- Search products by name
- Filter products by category
- Shopping cart functionality
- Add products to cart
- Remove products from cart
- Dynamic total price calculation
- Checkout page
- Stripe payment integration (test mode)
- Responsive design for desktop and mobile

---

## Built With

- React
- Vite
- JavaScript
- Context API
- React Router DOM
- Stripe (`@stripe/stripe-js`)
- CSS3

---

## Project Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── context/
│   └── CartContext.jsx
│
├── data/
│   └── products.js
│
├── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/react-ecommerce-store.git
```

Go to project folder:

```bash
cd react-ecommerce-store
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:5173
```

---

## Stripe Test Mode

Use Stripe test card:

```txt
Card Number: 4242 4242 4242 4242
Date: 12/34
CVC: 123
ZIP: 1000
```

---

## Learning Outcomes

This project helped strengthen understanding of:

- React component architecture
- State management using Context API
- Dynamic rendering
- React Router navigation
- Form handling
- Payment integration with Stripe
- Responsive UI design

---

## Future Improvements

- Product details page
- Cart persistence with localStorage
- Quantity increase/decrease buttons
- User authentication
- Admin dashboard
- Backend integration with database

---

## Author

Created by **Sudeys ibrahim**

GitHub: https://github.com/suda95
