import { useState } from "react";



const CartItem = ({ product }) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleQuantityChange = (e) => {
        const qty = parseInt(e.target.value);
        setQuantity(qty > 0 ? qty : 1);
    };

    return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} loading="lazy" />
      <div className="cart-item-info">
        <h4>{product.name}</h4>
        <p>₹{product.price}</p>
        <input 
            type="number"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
        />
        <button className="remove-btn" >Remove</button>
      </div>
    </div>
  )
}

export default CartItem;
