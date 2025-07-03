import './CategoryBox.css';

const CategoryBox = ({ icon, title }) => {
  return (
    <div className="category-box">
      <div className="icon">
        { icon }
      </div>
      <h4>{ title }</h4>
    </div>
  );
}

export default CategoryBox;
