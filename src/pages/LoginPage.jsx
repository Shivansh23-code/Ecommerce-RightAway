import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!email || !password) return alert("Please fill in all fields.");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) return alert("Invalid email or password");

    localStorage.setItem("authUser", JSON.stringify({ email: user.email, role: user.role }));

    navigate(user.role === "admin" ? "/admin" : "/profile");
  };

  return (
    <main className="auth-page">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <span>
            Don’t have an account? <Link to="/register">Register</Link>
          </span>
        </div>
      </div>
    </main>
  );
}
