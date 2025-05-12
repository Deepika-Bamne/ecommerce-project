import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from './CartContext';

function CllectionAll() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
    const { categoryName } = useParams();
    const [Cllectinall, setCllectinall] = useState([]);
    const handleAddToCart =()=>{
      navigate('/Cardpage')
    }
     useEffect(()=>{
        const url = 'https://fakestoreapi.com/Products';
      async function fetchdata(){
        const res = await fetch(url);
        const data = await res.json();
        const filterdata = data.filter(p=>p.category===categoryName)
        setCllectinall(filterdata)
      }
      fetchdata();
     }, [categoryName])
    
  return (
    <div>

<div className='product-grid'>
<h2>Products in {categoryName.toUpperCase()}</h2>
 {Cllectinall.map((Product) => (
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
  )
}

export default CllectionAll