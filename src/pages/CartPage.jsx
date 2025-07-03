import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import "../styles/cart.css";

const dummyCartItems = [
    {
        id: "1",
        name: "Running Shoes",
        price: 4299,
        image: "/images/shoe.jpg",
        quantity: 1
    },
    {
        id: "2",
        name: "Wireless Headphones",
        price: 2499,
        image: "/images/headphone3.jpg",
        quantity: 2
    },
];

const CartPage = () => {
    return (
        <main className="cart-page">
            <h2>Your Cart</h2>
            <div className="cart-container">
                <div className="cart-items">
                    {dummyCartItems.map(item => (
                        <CartItem key={item.id} product={item} />
                    ))}
                </div>
                <CartSummary items={dummyCartItems} />
            </div>
        </main>
    )
}

export default CartPage;