import React from 'react'

function Productpage() {
  return (
    <div>
        <section className="product-details-page">
  <div className="product-wrapper">
    
    <div className="product-images">
      <img src="https://via.placeholder.com/400x400" alt="Product Image" className="main-image" />
      <div className="thumbnail-images">
        <img src="https://via.placeholder.com/100" />
        <img src="https://via.placeholder.com/100" />
        <img src="https://via.placeholder.com/100" />
      </div>
    </div>
    <div className="product-info">
      <h1 className="product-title">Stylish Headphones</h1>
      <p className="product-price">$89.99</p>
      <p className="product-description">
        Experience the best audio quality with our stylish headphones. Designed for comfort and built to last.
      </p>
      <div className="quantity-selector">
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" min="1" value="1" />
      </div>
      <button className="add-to-cart-btn">Add to Cart</button>

     
      <div className="tabs">
        <button className="tab-button active" onclick="showTab('specs')">Specifications</button>
        <button className="tab-button" onclick="showTab('reviews')">Reviews</button>
      </div>
      <div className="tab-content">
        <div id="specs" className="tab-panel active">
          <ul>
            <li>Bluetooth: 5.0</li>
            <li>Battery Life: 20 hours</li>
            <li>Noise Cancellation: Yes</li>
          </ul>
        </div>
        <div id="reviews" className="tab-panel">
          <p><strong>John:</strong> Great sound and build quality! 🌟🌟🌟🌟🌟</p>
          <p><strong>Anna:</strong> Super comfortable for long hours. Worth it!</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Productpage