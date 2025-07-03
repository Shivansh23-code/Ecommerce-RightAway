import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const role = e.target.role.value;

    if (!name || !email || !password || !confirmPassword || !role) {
      return alert("All fields are required.");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return alert("User already registered.");
    }

    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("authUser", JSON.stringify({ email, role }));

    navigate(role === "admin" ? "/admin" : "/profile");
  };

  return (
    <main className="auth-page">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
          <select name="role" required>
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Register</button>
        </form>
        <div className="auth-links">
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </main>
  );
}
