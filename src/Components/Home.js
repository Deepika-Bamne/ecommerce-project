
import React, { useEffect, useState } from 'react';
import Categiry from "./Categiry";
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
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
  {latestProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}

</div>
    </div>
  );
};

export default Home;
