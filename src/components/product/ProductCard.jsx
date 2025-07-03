import './ProductCard.css';

// export default function ProductCard({ image, name, price }) {
//     return (
//         <div className="product-card">
//             <img src={ image } alt={ name } loading="lazy" />
//             <h3>{name}</h3>
//             <p>₹{price}</p>
//         </div>
//     );
// }

import { Link } from 'react-router-dom';

export default function ProductCard({ name, price, image }) {
  return (
    <Link to={`/product/1`} className="product-card"> {/* Simulated id */}
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}</p>
    </Link>
  );
}
