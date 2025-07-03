import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", price: "", image: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.image) return;
    onAdd(form);
    setForm({ name: "", price: "", image: "" });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>Add New Product</h3>
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="Product Name"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        value={form.price}
        placeholder="Price (₹)"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        value={form.image}
        placeholder="Image URL"
        onChange={handleChange}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}
