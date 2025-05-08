import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categiry = () => {
  const [Products, setProducts] = useState([]);
 
   const url = 'https://fakestoreapi.com/Products';
   async function getchdata(){
     const res = await fetch(url);
     const data = await res.json();
     setProducts(data)
   }
  useEffect(()=>{
    getchdata();
  }, [])
  
  const uniqueCategories = [...new Set(Products.map(p => p.category))];

const getCategoryImage = (cat) => {
  const match = Products.find(p => p.category === cat);
  return match?.image || "https://via.placeholder.com/300";
};
  return (
    <div className="categories-container">
    <h1>Shop by Category</h1>
    <div className="category-grid">
      {uniqueCategories.map((cat, index) => (
        <div key={index} className="category-card">
          <img src={getCategoryImage(cat)} alt={cat} className="category-image" />
          <h3 className="category-name">{cat.toUpperCase()}</h3>
          <Link to={`/category/${cat}`} className="view-category">
            View Category
          </Link>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Categiry;
