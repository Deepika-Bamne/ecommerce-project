import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-container">
  
      <div className="nav-left">
        <Link to="/" className="brand-link">
          <img src="https://media.istockphoto.com/id/1408777398/photo/gold-letter-s.webp?s=1024x1024&w=is&k=20&c=KC98FgpNOpwaPzWLQV8TT9sPLsF4tHYW8eiE18JxggY=" alt="Brand Logo" className="brand-logo" />
          <span className="brand-name">ShopNow</span>
        </Link>
      </div>
  
      
      <ul className="nav-center">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Categiry">Categories</Link></li>
        <li><Link to="/Aboutus">About Us</Link></li>
        <li><Link to="/Contactus">Contact</Link></li>
      </ul>
  
      
      <div className="nav-right">
  
       
      <Link to="/LoginPage" className="login-link">
  <i className="fas fa-user-circle"></i>
</Link>

  
        <div to="#" className="search"><i className="fas fa-search"></i>
        </div>
  
       
        <Link to="/Cardpage" className="cart-link">
        <i className="fas fa-shopping-cart"></i>
          {/* <span className="cart-badge">0</span>  */}
        </Link>
  
      </div>
  
    </div>
  </nav>
  
  
  );
};

export default Navbar;
