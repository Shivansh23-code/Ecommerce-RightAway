import { Link } from "react-router-dom";
import "../styles/thankyou.css";
import successImage from "../assets/success.png"; // ✅ replace with your own image

export default function ThankYouPage() {
  return (
    <main className="thankyou-page">
      <div className="thankyou-box">
        <img src={successImage} alt="Order Success" />
        <h2>Thank You for Your Purchase!</h2>
        <p>Your order has been placed successfully. We’ll send you tracking info shortly.</p>
        <Link to="/" className="home-btn">Go to Homepage</Link>
      </div>
    </main>
  );
}
