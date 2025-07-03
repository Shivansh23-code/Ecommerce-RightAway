import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function ForgotPasswordPage() {
  return (
    <main className="auth-page">
      <div className="auth-box">
        <h2>Forgot Password</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Send Reset Link</button>
        </form>
        <div className="auth-links">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </main>
  );
}
