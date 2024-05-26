import React from 'react';
import '../CSS/Sidebar.css';

function Sidebar({ categories, onSelectCategory, selectedCategory }) {
  return (
    <div className="sidebar">
      <ul>
        <li
          onClick={() => onSelectCategory('')}
          className={`category-item ${selectedCategory === '' ? 'active' : ''}`}
        >
          All
        </li>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onSelectCategory(category)}
            className={`category-item ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
