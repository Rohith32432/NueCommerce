import React from 'react';
import ProductsList from './ProductsList';

function Home() {
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' },
    { id: 4, name: 'Product 4', price: '$40' },
    { id: 5, name: 'Product 5', price: '$50' },
  ];

  return (
  <>
    <h2>slider</h2>
    <h2>random produts</h2>
    <ProductsList/>
    <h2>seprate by tags</h2>
  </>
  );
}

export default Home;
