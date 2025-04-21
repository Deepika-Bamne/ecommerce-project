import React, { useEffect, useState } from "react";

const Home = () => {
    const [showallproduct, setshowallproduct] = useState([]);
    useEffect(()=>{
        const fetchproduct = async ()=>{
            try{
            let url = 'https://fakestoreapi.com/products';
            let res = await fetch(url);
            let data =await res.json();
            console.log(data); 
            setshowallproduct(data);
            }
            catch(error){
                console.log("error");  
            }
         };
         fetchproduct();
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
 <h2 className="home-title">🛍️ New Product</h2>
  {/* product card Section */}
  <div className="card-container">
 {showallproduct.map((Product)=>(
 <div className="product-card" key={Product.id}>
    
   <img
     src={Product.image}
     alt="/Product"
     className="product-image"
   />
   <h3 className="product-title">${Product.title}</h3>
   <p className="product-price">${Product.price}</p>
   <button className="add-to-cart-btn">Add to Cart</button>

 </div>
     ))}   
     </div>
    </div>
  );
};

export default Home;
