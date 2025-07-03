import './Filters.css';

export default function Filters({ categories, selectedCategory, onSelectCategory }) {
  return (
    <aside className="filters">
      <h3>Filter (Category)</h3>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>
            <button
              className={selectedCategory === cat ? 'active' : ''}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
