import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h3>Admin Panel</h3>
      <nav>
        <Link to="/admin/products">Manage Products</Link>
        <Link to="/admin/orders">View Orders</Link>
        <Link to="/admin/users">View Users</Link>
      </nav>
    </aside>
  );
}
