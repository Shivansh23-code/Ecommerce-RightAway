import { useState } from 'react';
import '../../styles/productDetail.css';

const Tabs = ({ description, reviews }) => {
  const [activeTab, setActiveTab] = useState('description');
  
  
  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button
          className={activeTab === 'description' ? 'active' : ''}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={activeTab === 'reviews' ? 'active' : ''}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'description' && <p>{description}</p>}

        {activeTab === 'reviews' && (
          <ul>
            {reviews.map((rev, i) => (
              <li key={i}>
                 <strong>{rev.user}:</strong> {rev.comment} ({rev.rating}⭐)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Tabs
