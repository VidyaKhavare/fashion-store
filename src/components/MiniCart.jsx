import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./MiniCart.css";

const MiniCart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="mini-toggle" onClick={()=>setOpen(o=>!o)}>🛒 {cart.reduce((s,i)=>s+(i.qty||0),0)}</button>
      <div className={`mini-drawer ${open ? 'open' : ''}`}>
        <h4>Cart</h4>
        {cart.length===0 ? <p>Empty</p> : cart.map(i=>(
          <div key={i.id} className="mini-item">
            <img src={i.image} alt="" />
            <div>
              <p>{i.name}</p>
              <small>₹{i.price} x {i.qty}</small>
            </div>
            <div className="mini-actions">
              <button onClick={()=>decreaseQty(i.name)}>-</button>
              <button onClick={()=>increaseQty(i.name)}>+</button>
              <button onClick={()=>removeFromCart(i.name)}>x</button>
            </div>
          </div>
        ))}
        <a href="/cart" className="view-cart">Go to Cart</a>
      </div>
    </>
  )
}
export default MiniCart;
