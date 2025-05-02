import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$20", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Product 2", price: "$30", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Product 3", price: "$40", image: "https://via.placeholder.com/300" },
    { id: 4, name: "Product 4", price: "$50", image: "https://via.placeholder.com/300" },
  ];

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <Link to={`/product/${product.id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
