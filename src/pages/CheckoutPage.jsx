import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

export default function CheckoutPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to Thank You page
    navigate("/thank-you");
  };

  return (
    <main className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-container">
        {/* Form Section */}
        <form className="checkout-form" onSubmit={handleSubmit} aria-label="Shipping and Payment Form">
          <h3>Shipping Information</h3>
          <input type="text" placeholder="Full Name" required aria-label="Full Name" />
          <input type="email" placeholder="Email Address" required aria-label="Email Address" />
          <input type="text" placeholder="Phone Number" required aria-label="Phone Number" />
          <input type="text" placeholder="Shipping Address" required aria-label="Shipping Address" />
          <input type="text" placeholder="City" required aria-label="City" />
          <input type="text" placeholder="Postal Code" required aria-label="Postal Code" />
          <input type="text" placeholder="Country" required aria-label="Country" />

          <h3>Payment Method</h3>
          <select required aria-label="Payment Method">
            <option value="">Select Payment Option</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <span>Items (2):</span>
            <span>₹1298</span>
          </div>
          <div className="summary-item">
            <span>Shipping:</span>
            <span>₹50</span>
          </div>
          <hr />
          <div className="summary-item total">
            <strong>Total:</strong>
            <strong>₹1348</strong>
          </div>
        </div>
      </div>
    </main>
  );
}
