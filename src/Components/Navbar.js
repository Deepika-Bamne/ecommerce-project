import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-container">
  
      <div className="nav-left">
        <Link to="/" className="brand-link">
          <img src="https://cdn.shopify.com/s/files/1/0262/6905/7096/files/4864fd205ac63a7663224b8c1f8baed2.jpg?v=1745854980" alt="Brand Logo" className="brand-logo" />
          <span className="brand-name">ShopNow</span>
        </Link>
      </div>
  
      
      <ul className="nav-center">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/Categiry">Categories</Link></li>
        <li><Link to="/Aboutus">About Us</Link></li>
        <li><Link to="/Contactus">Contact</Link></li>
      </ul>
  
      
      <div className="nav-right">
  
       
        <Link to="/login" className="login-link">
          <p>Login/Logout</p>
        </Link>
  
        <div to="#" className="search"><img alt="" srcset="" src="https://cdn.shopify.com/s/files/1/0262/6905/7096/files/Search-icon.png?v=1745855557" className="search-icon"/></div>
        <div className="notification">
          <img src="https://cdn.shopify.com/s/files/1/0262/6905/7096/files/notification-bell.jpg?v=1745854795" alt="Notifications" className="notification-icon" />
          <span className="notification-badge">3</span> 
        </div>
  
       
        <Link to="/Cardpage" className="cart-link">
          <img src="https://cdn.shopify.com/s/files/1/0262/6905/7096/files/cart-icon.png?v=1745854795" alt="Cart" className="cart-icon" />
          <span className="cart-badge">5</span> 
        </Link>
  
      </div>
  
    </div>
  </nav>
  
  
  );
};

export default Navbar;
