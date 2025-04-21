import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
       
       

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <a href="/">🏠 Home</a>
          </li>
          <li>
            <a href="/login">🔐 Login</a>
          </li>
          <li>
            <a href="/account">👤 Account</a>
          </li>
          <li>
            <a href="/cart">
              🛒 Cart <span className="cart-count">0</span>
            </a>
          </li>
        </ul>
         {/* Logo */}
         <a href="/" className="nav-logo">
          MyShop
        </a>

         {/* Search Bar */}
         <div className="nav-search">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
