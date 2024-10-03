import React from 'react';

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
