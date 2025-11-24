import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { cart = [] } = useContext(CartContext);
  const qty = cart.reduce((s, i) => s + (i.qty || 0), 0);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLoginClick = (role) => {
    navigate(`/login?role=${role}`);
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img className="nav-logo" src={logo} alt="logo" />
        <div className="logo">FASHIONISTA</div>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Search Bar, Cart, Login */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, position: "relative" }}>
        {/* ✅ Dynamic Search */}
        <input
          className="search-bar"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Cart */}
        <Link to="/cart">
          <button className="btn">🛒 Cart ({qty})</button>
        </Link>

        {/* Login Dropdown */}
        <div style={{ position: "relative" }}>
          <button className="btn" onClick={() => setShowDropdown(!showDropdown)}>Login ▼</button>
          {showDropdown && (
            <div style={{
              position: "absolute",
              right: 0,
              top: "100%",
              background: "white",
              border: "1px solid #ddd",
              borderRadius: "6px",
              overflow: "hidden",
              zIndex: 10
            }}>
              <button
                style={{ display: "block", padding: "8px 12px", width: "100%", cursor: "pointer", border: "none", background: "white" }}
                onClick={() => handleLoginClick("user")}
              >
                User
              </button>
              <button
                style={{ display: "block", padding: "8px 12px", width: "100%", cursor: "pointer", border: "none", background: "white" }}
                onClick={() => handleLoginClick("admin")}
              >
                Admin
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
