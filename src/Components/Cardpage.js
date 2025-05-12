import React from 'react';
import { useCart } from './CartContext';

function CartPage() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} width="80" />
              <h4>{item.name}</h4>
              <p>Qty: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <hr />
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default CartPage;
