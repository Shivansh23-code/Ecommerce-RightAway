import { useNavigate } from 'react-router-dom';
import '../../styles/cart.css';

export default function CartSummary({ items }) {
  const navigate = useNavigate();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      <p>Subtotal: ₹{subtotal}</p>
      <p>Shipping: ₹{shipping}</p>
      <hr />
      <p><strong>Total: ₹{total}</strong></p>

      {/* ✅ Proceed to Checkout Button */}
      <button
        className="checkout-btn"
        onClick={() => navigate('/checkout')}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
