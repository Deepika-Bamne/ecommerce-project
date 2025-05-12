
import React, { useEffect, useState } from 'react';
import Categiry from "./Categiry";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
const [showproduct, setshowPrducts] = useState([]);

  
  const latestProducts = showproduct.filter(product => product.rating.rate >= 4);
  const handleAddToCart = () => {
    navigate('/Cardpage');
  };
 useEffect(()=>{
  const url = 'https://fakestoreapi.com/products';
  async function fetchdata(){
    const res = await fetch(url);
    const data = await res.json();
    setshowPrducts(data)
  }
  fetchdata();
 }, [])
  return (
    <div className="home">
      {/* Banner Section */}
      <div className="banner">
        <div>
          <h1>Welcome to the Best Online Store!</h1>
          <button className="banner-btn">Shop Now</button>
        </div>
      </div>
      <Categiry/>
{/* product section */}
<div className="new-rrivals">
  <h1>new arrivals</h1>
  <div className="card">
  {latestProducts.map((Product) => (
    <div key={Product.id} className="product-card">
      <Link to={`/product/${Product.id}`} className="product-link">
        <div className="image">
          <img src={Product.image} alt={Product.title} />
        </div>
        <div className="product-name">{Product.title}</div>
        <div className="product-price">${Product.price}</div>
        <div className="product-category">{Product.category}</div>
        <div className="product-description">{Product.description}</div>
      </Link>
      <button
      onClick={() => {
        addToCart({ ...Product, quantity: 1 });
        navigate('/Cardpage');
      }}
      className="add-to-cart-btn"
    >
      Add to Cart
    </button>
    </div>
  ))}
</div>

</div>
    </div>
  );
};

export default Home;
