import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import "./ProductCard.css";

const ProductCard = ({ id, name, price, image, onAddToCart }) => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  // Safe check if required props exist
  if (!id || !name || !price || !image) return null;

  const isWish = wishlist.some((p) => p.id === id);

  return (
    <div className="product-card">
      <button
        className={`wish-btn ${isWish ? "active" : ""}`}
        onClick={() => toggleWishlist({ id, name, price, image })}
      >
        {isWish ? "♥" : "♡"}
      </button>

      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}</p>

      {onAddToCart && (
        <button className="add-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
