import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { CartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";
import "./Products.css";

import dress1 from "../assets/dress.jpg";
import dress2 from "../assets/dress2.jpg";
import shoes from "../assets/shoes.jpg";
import bag from "../assets/bag.jpg";

const Products = () => {
  const { cart, addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Summer Dress", price: 1499, image: dress1 },
    { id: 2, name: "Casual Top", price: 999, image: dress2 },
    { id: 3, name: "Stylish Shoes", price: 2499, image: shoes },
    { id: 4, name: "Leather Bag", price: 1999, image: bag },
    // Optional: uploaded image
    { id: 5, name: "Uploaded Image", price: 799, image: "/mnt/data/a6a83916-69ed-42b3-9530-a3033573ac9b.png" }
  ];

  const handleAdd = (product) => {
    addToCart(product);
    toast.success("Added to cart");
  };

  return (
    <section className="products">
      <h2>Featured Collection</h2>
      <h3>🛒 Cart: {cart.reduce((sum, item) => sum + (item.qty || 0), 0)}</h3>

      <div className="product-grid">
        {products.map((item, index) => (
          <div
            key={item.id}
            className="product-animate"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <ProductCard
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onAddToCart={() => handleAdd(item)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
