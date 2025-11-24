import React from "react";
import { useWishlist } from "../context/WishlistContext";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h2>My Wishlist 💖</h2>

      {wishlist.length === 0 ? (
        <p className="empty">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item, index) => (
            <div className="wishlist-card" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromWishlist(item)}>
                Remove ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
