import './SortSelect.css';

export default function SortSelect({ sortOption, onChange }) {
  return (
    <div className="sort-select">
      <label>Sort By: </label>
      <select value={sortOption} onChange={(e) => onChange(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
      </select>
    </div>
  );
}
