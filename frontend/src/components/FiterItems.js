import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductsList from './ProductsList';
import Product from './Product';

function FiterItems() {
  const [filterItems, setFilterItems] = useState([]);
  const location = useLocation();

  const handleSearch = async () => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const limit = queryParams.get('limit');

    try {
      const { data } = await axios.post('http://localhost:3004/api/products/filter', {
        category,
        limit,
      });
      setFilterItems(data);
    } catch (error) {
      console.error("Error fetching filtered items:", error);
      // Handle error appropriately (e.g., show a notification)
    }
  };

  useEffect(() => {
    handleSearch();
  }, [location.search]); // Run the effect when the search parameters change

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filterItems.map((item, index) => (
            <Product data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FiterItems;
