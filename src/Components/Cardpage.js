import React from 'react'

function Cardpage() {
  return (
    <div><section className="cart-page">
    <h2>Your Shopping Cart</h2>
  
    <div className="cart-items">
     
      <div className="cart-item">
        <img src="https://via.placeholder.com/100" alt="Product" className="cart-item-img" />
        <div className="cart-item-details">
          <h4>Wireless Headphones</h4>
          <div className="quantity-price">
            <label>Qty:</label>
            <input type="number" value="1" min="1" />
          </div>
          <p>Price: $80</p>
          <p>Subtotal: $80</p>
        </div>
        <button className="remove-btn">Remove</button>
      </div>
  
     
      <div className="cart-item">
        <img src="https://via.placeholder.com/100" alt="Product" className="cart-item-img" />
        <div className="cart-item-details">
          <h4>Smart Watch</h4>
          <div className="quantity-price">
            <label>Qty:</label>
            <input type="number" value="2" min="1" />
          </div>
          <p>Price: $50</p>
          <p>Subtotal: $100</p>
        </div>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  
   
    <div className="cart-summary">
      <h3>Total: $180</h3>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  </section>
  </div>
  )
}

export default Cardpage