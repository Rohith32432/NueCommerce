import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

function ProductsList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('https://dummyjson.com/products?page=10');
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); 
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {
            products.map((product,index) => (
              <Product data={product} type={'api'} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
