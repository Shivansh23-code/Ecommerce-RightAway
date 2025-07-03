import "../../styles/productDetail.css";
import Tabs from "./Tabs";

const dummyProduct = {
  id: "1",
  name: "Wireless Headphones",
  price: 999,
  image: "/images/headphone.jpg",
  description: "Premium quality wireless headphones with long battery life.",
  reviews: [
    { user: "Aman", comment: "Great sound!", rating: 5 },
    { user: "Pooja", comment: "Loved the bass.", rating: 4 },
  ],
};


export default function ProductDetail({ productId }) {
    const product = dummyProduct; // Simulated fetch by Id

    return (
        <section className="product-detail">
          <div className="product-image">
            <img src={product.image} alt={product.name} loading="lazy" />
          </div>

          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="price">₹{product.price}</p>
            <button className="add-to-cart">Add Cart</button>


            <Tabs description={product.description} reviews={product.reviews} />
          </div>
        </section>
    );
}