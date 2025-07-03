import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/Admin/AdminSidebar";
import "../styles/admin.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("authUser"));
    if (!auth || auth.role !== "admin") {
      navigate("/login"); // redirect unauthorized
    }
  }, [navigate]);

  return (
    <main className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-content">
        <h2>Admin Dashboard</h2>
        <p>Welcome back, Admin!</p>
        {/* Future: Product management components */}
      </div>
    </main>
  );
}
