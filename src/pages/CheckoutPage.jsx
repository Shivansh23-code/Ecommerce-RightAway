import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const user = JSON.parse(localStorage.getItem("authUser"));

  useEffect(() => {
    if (!user) {
      alert("You must be logged in to checkout.");
      navigate("/login");
    }

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    setForm((prev) => ({ ...prev, email: user?.email || "" }));
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    for (const key in form) {
      if (!form[key].trim()) {
        return alert("Please fill out all fields.");
      }
    }

    if (cart.length === 0) {
      return alert("Your cart is empty.");
    }

    const order = {
      email: user.email,
      items: cart,
      total,
      date: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    // Clear cart
    localStorage.removeItem("cart");

    navigate("/thank-you");
  };

  return (
    <main className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Information</h3>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            required
            disabled
          />
          <input
            type="text"
            name="address"
            value={form.address}
            placeholder="Address"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            value={form.city}
            placeholder="City"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            value={form.zip}
            placeholder="ZIP Code"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
          <button type="submit">Place Order</button>
        </form>

        <section className="checkout-summary">
          <h3>Order Summary</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} x{item.quantity} – ₹{item.price * item.quantity}
                </li>
              ))}
            </ul>
          )}
          <p className="total">Total: ₹{total}</p>
        </section>
      </div>
    </main>
  );
}
