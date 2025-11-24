// src/pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 0), 0);

  return (
    <section className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <Link to="/" className="shop-btn">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.name)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.name)}>+</button>
                  </div>
                </div>

                <div className="item-right">
                  <h4>₹{(item.price * item.qty).toLocaleString()}</h4>
                  <button className="remove" onClick={() => removeFromCart(item.name)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Items: {cart.reduce((s, i) => s + (i.qty || 0), 0)}</p>
            <h2>Total: ₹{total.toLocaleString()}</h2>
            <div className="cart-actions">
              <button className="checkout">Proceed to Checkout</button>
              <button className="clear" onClick={() => clearCart()}>Clear Cart</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
