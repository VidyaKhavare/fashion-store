// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import { products as seed } from "../data/products";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("admin_products") || JSON.stringify(seed)));
  const [form, setForm] = useState({ name: "", price: "", category: "", color: "", image: "" });
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [errors, setErrors] = useState({});

  useEffect(() => localStorage.setItem("admin_products", JSON.stringify(items)), [items]);

  // Validate form
  const validateForm = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.price) errs.price = "Price is required";
    else if (Number(form.price) <= 0) errs.price = "Price must be positive";
    if (!form.image) errs.image = "Image URL is required";
    if (!form.category) errs.category = "Category is required";
    return errs;
  };

  const addProduct = () => {
    const errs = validateForm();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const newItem = {
      ...form,
      id: Date.now(),
      price: Number(form.price),
      createdAt: Date.now(),
    };

    setItems(prev => [newItem, ...prev]);
    setForm({ name: "", price: "", category: "", color: "", image: "" });
    setErrors({});
  };

  const removeProduct = (id) => setItems(prev => prev.filter(p => p.id !== id));

  const updateProduct = (id, key, value) => {
    setItems(prev => prev.map(p => (p.id === id ? { ...p, [key]: value } : p)));
  };

  const filteredItems = items
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "newest") return b.createdAt - a.createdAt;
      if (sort === "oldest") return a.createdAt - b.createdAt;
      if (sort === "priceLow") return a.price - b.price;
      if (sort === "priceHigh") return b.price - a.price;
      return 0;
    });

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard - Products</h2>

      {/* Search + Sort */}
      <div className="admin-controls">
        <input
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>

      {/* Add Product Form */}
      <div className="add-product-form">
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <small className="error">{errors.name}</small>}

        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        {errors.price && <small className="error">{errors.price}</small>}

        <input
          placeholder="Image URL"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
        />
        {errors.image && <small className="error">{errors.image}</small>}

        <input
          placeholder="Category"
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        />
        {errors.category && <small className="error">{errors.category}</small>}

        <input
          placeholder="Color"
          value={form.color}
          onChange={e => setForm({ ...form, color: e.target.value })}
        />

        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* Products List */}
      <div className="products-list">
        {filteredItems.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredItems.map(item => (
            <div key={item.id} className="product-item">
              <img src={item.image} alt={item.name} />
              <div className="product-info">
                <input
                  value={item.name}
                  onChange={e => updateProduct(item.id, "name", e.target.value)}
                />
                <input
                  type="number"
                  value={item.price}
                  onChange={e => updateProduct(item.id, "price", Number(e.target.value))}
                />
                <input
                  value={item.category}
                  onChange={e => updateProduct(item.id, "category", e.target.value)}
                />
                <input
                  value={item.color}
                  onChange={e => updateProduct(item.id, "color", e.target.value)}
                />
              </div>
              <button className="delete-btn" onClick={() => removeProduct(item.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
