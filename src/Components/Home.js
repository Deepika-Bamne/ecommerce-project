import React from "react";

const Home = () => {
  return (
    <div className="home">
      {/* Banner Section */}
      <div className="banner">
        <div>
          <h1>Welcome to the Best Online Store!</h1>
          <button className="banner-btn">Shop Now</button>
        </div>
      </div>
  <section className="categories-section">
    <h2 className="section-title">Shop by Category</h2>
    <div className="categories-grid">
      <a href="/products?category=clothing" className="category-block">
        <img src="https://cdn.shopify.com/s/files/1/0262/6905/7096/files/clothes.jpg?v=1745941308" alt="Clothing" />
        <p>Clothing</p>
      </a>
      <a href="/products?category=electronics" className="category-block">
        <img src="https://cdn.shopify.com/s/files/1/0262/6905/7096/files/Electronic.png?v=1745941308" alt="Electronics" />
        <p>Electronics</p>
      </a>
      <a href="/products?category=shoes" className="category-block">
        <img src="https://cdn.shopify.com/s/files/1/0262/6905/7096/files/Shos.jpg?v=1745941308" alt="Shoes" />
        <p>Shoes</p>
      </a>
      <a href="/products?category=books" className="category-block">
        <img src="https://cdn.shopify.com/s/files/1/0262/6905/7096/files/Books.jpg?v=1745941308" alt="Books" />
        <p>Books</p>
      </a>
    </div>
  </section>
 {/* product Section */}
 <section className="featured-products">
  <h2 className="section-title">⭐ Featured Products</h2>
  <div className="product-grid">
    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1606813903229-cd2d9aa0ad75?auto=format&fit=crop&w=400&q=80" alt="Product 1" />
      <h3 className="product-name">Wireless Headphones</h3>
      <p className="product-price">$49.99</p>
      <button className="add-cart-btn">Add to Cart</button>
    </div>
    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80" alt="Product 2" />
      <h3 className="product-name">Classic Watch</h3>
      <p className="product-price">$99.00</p>
      <button className="add-cart-btn">Add to Cart</button>
    </div>
    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1598515214070-8127c84d4904?auto=format&fit=crop&w=400&q=80" alt="Product 3" />
      <h3 className="product-name">Sneakers</h3>
      <p className="product-price">$75.50</p>
      <button className="add-cart-btn">Add to Cart</button>
    </div>
    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" alt="Product 4" />
      <h3 className="product-name">Smartphone</h3>
      <p className="product-price">$299.99</p>
      <button className="add-cart-btn">Add to Cart</button>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
