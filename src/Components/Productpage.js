import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import ProductCard from './ProductCard';


function Productpage() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);

        const allProductsRes = await fetch('https://fakestoreapi.com/products');
        const allProducts = await allProductsRes.json();
        const filteredProducts = allProducts.filter((p) => p.id !== data.id);
        setOtherProducts(filteredProducts);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    }
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    navigate('/Cardpage');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="product-details-page">
        <div className="product-wrapper">
          <div className="product-images">
            <img src={product.image} alt={product.title} className="main-image" />
            <div className="thumbnail-images">
              <img src={product.image} alt="thumb" />
              <img src={product.image} alt="thumb" />
              <img src={product.image} alt="thumb" />
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-category">
              <strong>Category:</strong> {product.category}
            </p>

            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <div className="product-grid">
        <h1>Featured Products</h1>
{otherProducts.map((product) => (
  <ProductCard key={product.id} product={product} showDescription={false} />
))}

      </div>
    </div>
  );
}

export default Productpage;
