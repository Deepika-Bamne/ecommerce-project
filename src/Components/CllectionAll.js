import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function CllectionAll() {
    const { categoryName } = useParams();
    const [Cllectinall, setCllectinall] = useState([]);
    
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
{Cllectinall.map((p)=>(
  <div className="product-card"id={p.id}>
    <div className="image">
 <img src={p.image} alt={p.image} srcset="" /></div>
  <div className="product-name">{p.title}</div>
  <div className="product-price">{p.price}</div>
  <div className="product-category">{p.category}</div>
  <div className="product-description">{p.description}</div>
  <button className='add-cart-btn'>Add to cart</button>
</div>
))}
</div>
</div>
  )
}

export default CllectionAll