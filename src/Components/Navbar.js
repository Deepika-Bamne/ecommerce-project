import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { path: "/Home", label: "Home" },
  { path: "/Categiry", label: "Categories" },
  { path: "/Aboutus", label: "About Us" },
  { path: "/Contactus", label: "Contact" },
];

const iconLinks = [
  { path: "/auth", iconClass: "fas fa-user-circle", ariaLabel: "Login/Signup" },
  { path: "/Cardpage", iconClass: "fas fa-shopping-cart", ariaLabel: "Cart" },
  { path: "#", iconClass: "fas fa-search", ariaLabel: "Search" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="brand-link">
            <img
              src="https://media.istockphoto.com/id/1408777398/photo/gold-letter-s.webp?s=1024x1024&w=is&k=20&c=KC98FgpNOpwaPzWLQV8TT9sPLsF4tHYW8eiE18JxggY="
              alt="Brand Logo"
              className="brand-logo"
            />
            <span className="brand-name">ShopNow</span>
          </Link>
        </div>

        <ul className="nav-center">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          {iconLinks.map(({ path, iconClass, ariaLabel }) => (
            path === "#" ? (
              <div key={ariaLabel} className="search" aria-label={ariaLabel}>
                <i className={iconClass}></i>
              </div>
            ) : (
              <Link key={path} to={path} className={`${ariaLabel.toLowerCase().replace(/\s+/g, "-")}-link`} aria-label={ariaLabel}>
                <i className={iconClass}></i>
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
