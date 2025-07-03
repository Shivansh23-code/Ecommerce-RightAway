export default function ProductList({ products, onDelete }) {
  return (
    <section className="product-list">
      <h3>Product List</h3>
      {products.length === 0 ? (
        <p>No products added.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
              </div>
              <button onClick={() => onDelete(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
