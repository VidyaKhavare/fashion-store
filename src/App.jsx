import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Shop from "./pages/shop";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Add search state

  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          {/* ✅ Pass searchTerm & setSearchTerm to Navbar */}
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <Routes>
            <Route path="/" element={<><Hero /><Products /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ✅ Pass searchTerm to Shop */}
            <Route path="/shop" element={<Shop searchTerm={searchTerm} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>

          <Footer />
          <Toaster position="top-right" />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
