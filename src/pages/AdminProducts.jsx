import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/Admin/ProductForm";
import ProductList from "../components/Admin/ProductList";
import "../styles/admin-products.css";

export default function AdminProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("adminProducts")) || [];
  });

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("authUser"));
    if (!auth || auth.role !== "admin") {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("adminProducts", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, { id: Date.now(), ...product }]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <main className="admin-products-page">
      <h2>Manage Products</h2>
      <div className="admin-products-container">
        <ProductForm onAdd={addProduct} />
        <ProductList products={products} onDelete={deleteProduct} />
      </div>
    </main>
  );
}
