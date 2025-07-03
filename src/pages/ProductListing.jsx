import { useState } from 'react';
import ProductCard from '../components/product/ProductCard';
import Filters from '../components/product/Filters';
import SortSelect from '../components/product/SortSelect';
import '../styles/products.css';

const allProducts = [
  // Clothing
  { name: 'Nike Air Jordan', price: 129999, category: 'Clothing', image: '/images/shoe.jpg' },
  { name: 'Nike Free', price: 4999, category: 'Clothing', image: '/images/shoe1.jpg' },
  { name: 'Brown Leather', price: 5999, category: 'Clothing', image: '/images/shoe2.jpg' },
  { name: 'Adidas Comfort', price: 3999, category: 'Clothing', image: '/images/shoe3.jpg' },
  { name: 'Professional Leather', price: 18999, category: 'Clothing', image: '/images/shoe4.jpg' },
  { name: 'Running Shoes', price: 14999, category: 'Clothing', image: '/images/shoe5.jpg' },
  // Electronics
  { name: 'Acer Swift', price: 65999, category: 'Electronics', image: '/images/laptop.jpg' },
  { name: 'Iphone 15 Pro', price: 149999, category: 'Electronics', image: '/images/mobile3.jpg' },
  { name: 'Realme Xt', price: 39799, category: 'Electronics', image: '/images/mobile.jpg' },
  { name: 'Iphone 12 Mini', price: 55999, category: 'Electronics', image: '/images/mobile5.jpg' },
  { name: 'Asus TUF F17', price: 89900, category: 'Electronics', image: '/images/laptop1.jpg' },
  { name: 'Asus VivoBook ', price: 49999, category: 'Electronics', image: '/images/laptop5.jpg' },
  // Home Decor
  { name: 'The Grand Manor Wall Clock', price: 150000, category: 'Home Decor', image: '/images/WallClock.jpg' },
  { name: 'The Heirloom Pendulum Clock', price: 100000, category: 'Home Decor', image: '/images/WallClock1.jpg' },
  { name: 'The Victoria Classic Timepiece', price: 80000, category: 'Home Decor', image: '/images/WallClock2.jpg' },
  { name: 'The Imperial Chiming Clock', price: 200000, category: 'Home Decor', image: '/images/WallClock3.jpg' },
  { name: 'The Ornate Oak Grande', price: 120000, category: 'Home Decor', image: '/images/WallClock4.jpg' },
  { name: 'The Westminster Elegance Clock', price: 180000, category: 'Home Decor', image: '/images/WallClock5.jpg' },
  // Toys
  { name: 'Teddy Bear', price: 1499, category: 'Toys', image: '/images/Toy.jpg' },
  { name: 'Teddy Bear', price: 1499, category: 'Toys', image: '/images/Toy1.jpg' },
  { name: 'Rolls Royce Vintage Edition', price: 1499, category: 'Toys', image: '/images/Toy2.jpg' },
  { name: 'Rolls Royce Wraith', price: 1499, category: 'Toys', image: '/images/Toy3.jpg' },
  { name: 'Toy Truck', price: 1299, category: 'Toys', image: '/images/Toy4.jpg' },
  { name: 'Vintage Bus', price: 1499, category: 'Toys', image: '/images/Toy5.jpg' },
];

export default function ProductListing() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('newest');

  const categories = ['All', 'Clothing', 'Electronics', 'Home Decor', 'Toys'];

  const filtered = allProducts.filter(
    (p) => category === 'All' || p.category === category
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'priceLowHigh') return a.price - b.price;
    if (sort === 'priceHighLow') return b.price - a.price;
    return 0;
  });

  return (
    <main className="product-listing-page">
      <Filters
        categories={categories}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />

      <section className="products-area">
        <SortSelect sortOption={sort} onChange={setSort} />
        <div className="product-grid">
          {sorted.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
