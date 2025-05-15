// components/ProductCard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';


const ProductCard = ({ product, showDescription = true }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    navigate('/Cardpage');
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-name">{product.title}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-category">{product.category}</div>
        {showDescription && (
          <div className="product-description">{product.description}</div>
        )}
      </Link>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
