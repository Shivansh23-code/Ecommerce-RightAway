import "../styles/profile.css";
import UserInfo from "../components/User/UserInfo";
import OrderHistory from "../components/User/OrderHistory";
import Wishlist from "../components/User/Wishlist";

export default function ProfilePage() {
  return (
    <main className="profile-page">
      <h2>User Dashboard</h2>
      <div className="profile-sections">
        <UserInfo />
        <OrderHistory />
        <Wishlist />
      </div>
    </main>
  );
}
