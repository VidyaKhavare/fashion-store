import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => String(p.id) === id);
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist } = useContext(WishlistContext);
  if(!product) return <div style={{padding:40}}>Product not found</div>;

  return (
    <div style={{padding:40, display:'flex', gap:30}}>
      <img src={product.image} style={{width:420, height:520, objectFit:'cover'}} alt={product.name}/>
      <div>
        <h1>{product.name}</h1>
        <p style={{color:'#e91e63', fontWeight:700}}>₹{product.price}</p>
        <p>{product.description}</p>
        <p><strong>Color:</strong> {product.color}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <div style={{marginTop:20}}>
          <button onClick={()=>addToCart(product)} style={{marginRight:12}}>Add to Cart</button>
          <button onClick={()=>toggleWishlist(product)}>Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
