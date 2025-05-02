import React from 'react';
import { Link } from 'react-router-dom';

const Categiry = () => {
  const categories = [
    { id: 1, name: "Electronics", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Clothing", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Home & Kitchen", image: "https://via.placeholder.com/300" },
    { id: 4, name: "Beauty & Health", image: "https://via.placeholder.com/300" },
  ];

  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
            <Link to={`/category/${category.id}`} className="view-category">
              View Category
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categiry;
