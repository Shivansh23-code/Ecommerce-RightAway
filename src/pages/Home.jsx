import React from "react";
import "../styles/Home.css";
import ProductCard from "../components/product/ProductCard";
import CategoryBox from "../components/product/CategoryBox";

const Home = () => {
  const featuredProducts = [
    {
      image: "/images/shoe3.jpg",
      name: "Running Shoes",
      price: 299,
    },
    {
      image: "/images/laptop5.jpg",
      name: "Slim Laptop",
      price: 1299,
    },
    {
      image: "/images/headphone3.jpg",
      name: "Wireless Headphones",
      price: 999,
    },
  ];

  const categories = [
    { icon: "👗", title: "Apparel" },
    { icon: "👕", title: "Clothing" },
    { icon: "📱", title: "Electronics" },
    { icon: "🌱", title: "Gardening" },
    { icon: "🏠", title: "Home Decor" },
    { icon: "🧸", title: "Toys" },
  ];

  return (
    <>
    {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Shop The Latest Trends</h1>
            <p>Discover exclusive deals on fashion, electronics, and more.</p>
            <a href="/products" className="hero-button">
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2>Featured Section</h2>
        <div className="product-grid">
          { featuredProducts.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="category-section">
        <h2>Shop By Category</h2>
        <div className="category-grid">
          { categories.map((cat, i) => (
            < CategoryBox key={i} {...cat} />
          ))}
        </div>
      </section>


    </>
  );
};

export default Home;
