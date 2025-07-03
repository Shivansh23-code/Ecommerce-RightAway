import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin-orders.css";

export default function AdminOrders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("authUser"));
    if (!auth || auth.role !== "admin") {
      navigate("/login");
    } else {
      const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
      setOrders(storedOrders);
    }
  }, [navigate]);

  return (
    <main className="admin-orders-page">
      <h2>Order Management</h2>
      {orders.length === 0 ? (
        <p className="no-orders">No orders placed yet.</p>
      ) : (
        <div className="orders-container">
          {orders.map((order, idx) => (
            <div key={idx} className="order-card">
              <h3>Order #{idx + 1}</h3>
              <p><strong>Email:</strong> {order.email}</p>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.name} x{item.quantity} - ₹{item.price * item.quantity}
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ₹{order.total}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
