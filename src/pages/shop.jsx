import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext"; // optional if you want to add to cart
import "./shop.css";

const Shop = ({ searchTerm }) => {
  const { addToCart } = useContext(CartContext); // ensure CartContext has addToCart
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");

  const categories = ["All", "Men", "Women", "Kids", "Shoes", "Accessories"];

  const subCategories = {
    Men: ["All", "Shirts", "T-Shirts", "Jackets", "Jeans"],
    Women: ["All", "Dresses", "Tops", "Handbags", "Jewelry"],
    Kids: ["All", "T-Shirts", "Shorts", "Frocks"],
    Shoes: ["All", "Men Shoes", "Women Shoes"],
    Accessories: ["All", "Watches", "Bags", "Glasses"],
  };

  const products = [
    { id: 1, name: "Men’s Shirt", price: "₹999", category: "Men", sub: "Shirts", image: "/Shirts.jpg" },
    { id: 2, name: "Men’s T-Shirt", price: "₹799", category: "Men", sub: "T-Shirts", image: "/Tshirt.jpeg" },
    { id: 3, name: "Men’s Jacket", price: "₹1999", category: "Men", sub: "Jackets", image: "/Jacket.jpeg" },
    { id: 4, name: "Men’s Jeans", price: "₹1499", category: "Men", sub: "Jeans", image: "/Jeans.jpeg" },
    { id: 5, name: "Women Dress", price: "₹1299", category: "Women", sub: "Dresses", image: "/dress1.jpg" },
    { id: 6, name: "Women Top", price: "₹899", category: "Women", sub: "Tops", image: "/Top.jpeg" },
    { id: 7, name: "Women Handbag", price: "₹1499", category: "Women", sub: "Handbags", image: "/Bags.jpeg" },
    { id: 8, name: "Women Earrings", price: "₹499", category: "Women", sub: "Jewelry", image: "/earring.jpeg" },
    { id: 9, name: "Kids T-Shirt", price: "₹499", category: "Kids", sub: "T-Shirts", image: "/KidsTshirt.jpeg" },
    { id: 10, name: "Kids Shorts", price: "₹399", category: "Kids", sub: "Shorts", image: "/KidsShort.jpeg" },
    { id: 11, name: "Kids Frock", price: "₹699", category: "Kids", sub: "Frocks", image: "/KidsFrock.jpeg" },
    { id: 12, name: "Men Running Shoes", price: "₹999", category: "Shoes", sub: "Men Shoes", image: "/MenShoes1.jpeg" },
    { id: 13, name: "Women Heels", price: "₹1199", category: "Shoes", sub: "Women Shoes", image: "/WomenHeels.jpeg" },
    { id: 14, name: "Men Watch", price: "₹1299", category: "Accessories", sub: "Watches", image: "/Watch.jpeg" },
    { id: 15, name: "Sunglasses", price: "₹599", category: "Accessories", sub: "Glasses", image: "/Sunglass.jpeg" },
  ];

  // ✅ Filter products dynamically by category, subcategory, and search term
  const filteredProducts = products.filter((product) => {
  if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
  if (selectedSubCategory !== "All" && product.sub !== selectedSubCategory) return false;
  if (!product.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
  return true;
});


  return (
    <div className="page-container animate">
      <div className="shop-page">
        <h1 className="shop-title">Shop</h1>

        {/* Categories */}
        <div className="category-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === selectedCategory ? "cat-btn active" : "cat-btn"}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedSubCategory("All");
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Subcategories */}
        {selectedCategory !== "All" && (
          <div className="subcategory-container">
            {subCategories[selectedCategory].map((sub) => (
              <button
                key={sub}
                className={sub === selectedSubCategory ? "sub-btn active" : "sub-btn"}
                onClick={() => setSelectedSubCategory(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Products */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="product-card" key={item.id}>
                {item.image && <img src={item.image} alt={item.name} className="product-img" />}
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button className="add-btn" onClick={() => addToCart?.(item)}>
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="no-items">No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
